// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth/config';

// Track request counts for rate limiting
const ipRequestMap = new Map<string, { count: number, timestamp: number, blocked: boolean }>();
const MAX_REQUESTS = 60; // Maximum requests per minute
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds
const BLOCK_DURATION = 5 * 60 * 1000; // 5 minute block for abusive IPs

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for PDF files in sample_reports directory
  if (pathname.startsWith('/sample_reports/') && pathname.endsWith('.pdf')) {
    return NextResponse.next();
  }
  
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  
  // ===== SECURITY CHECKS =====
  
  // Check for malicious patterns based on the observed attack logs
  const maliciousPatterns = [
    /\.php$/i,                   // PHP file access attempts
    /wp-(?!json)/i,              // WordPress paths (but allow wp-json for legitimate APIs)
    /xmlrpc/i,                   // XML-RPC attack attempts
    /admin\.php/i,               // Admin access attempts
    /shell/i,                    // Shell scripts
    /alfa/i,                     // Common webshell name 
    /config/i,                   // Configuration file access
    /wp-admin/i,                 // WordPress admin
    /(install|upgrade)\.php/i,   // Installation scripts
    /wp-includes/i,              // WordPress core files
    /wp-content\/(plugins|themes)/i, // WordPress plugins/themes
    /\.well-known\/(?!acme-challenge)/i, // Suspicious .well-known access
    /(phpinfo|info)\.php/i,      // PHP info disclosure
    /xmrlpc\.php/i,              // Cryptocurrency mining malware
    /[a-z0-9]{8}\.php/i,         // Random named PHP files
    /(c|n|pi|ws|sx|rx)\.php$/i   // Single letter PHP files
  ];

  // Block known malicious patterns
  if (maliciousPatterns.some(pattern => pattern.test(pathname))) {
    console.warn(`[SECURITY] Blocked malicious request: ${ip} - ${pathname}`);
    
    // Mark this IP for stricter rate limiting
    const now = Date.now();
    ipRequestMap.set(ip, { 
      count: MAX_REQUESTS, 
      timestamp: now,
      blocked: true
    });
    
    // Return 403 but redirect to login to hide our blocking mechanism
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Implement rate limiting
  const now = Date.now();
  const record = ipRequestMap.get(ip);
  
  // If this IP was previously marked as abusive and still in block period
  if (record?.blocked && (now - record.timestamp < BLOCK_DURATION)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Reset record if outside time window
  if (!record || (now - record.timestamp > TIME_WINDOW)) {
    ipRequestMap.set(ip, { count: 1, timestamp: now, blocked: false });
  } else {
    // Increment request count
    record.count++;
    
    // Check if this IP should be blocked
    if (record.count > MAX_REQUESTS) {
      record.blocked = true;
      record.timestamp = now; // Reset timestamp for block duration
      console.warn(`[SECURITY] Rate limited IP: ${ip} - ${record.count} requests`);
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    ipRequestMap.set(ip, record);
  }

  // ===== ORIGINAL AUTHENTICATION LOGIC =====
  
  // First, exclude API routes completely
  if (pathname.startsWith('/api')) {
    return addSecurityHeaders(NextResponse.next());
  }
  
  // Public paths that don't need authentication
  const publicPaths = ['/login', '/', '/about', '/pricing', '/illustration-helper', '/terms', '/privacy', '/cookie-policy'];
  
  // Get auth token and verify authentication status
  const authToken = request.cookies.get('auth-token');
  const isAuthenticated = authToken && verifyToken(authToken.value);
  
  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    if (isAuthenticated && pathname === '/login') {
      // If authenticated and trying to access login, redirect to home
      return addSecurityHeaders(NextResponse.redirect(new URL('/', request.url)));
    }
    return addSecurityHeaders(NextResponse.next());
  }
  
  // Require authentication for all upload-related paths
  if (pathname.startsWith('/upload')) {
    if (!isAuthenticated) {
      // Redirect unauthenticated users to login
      const redirectUrl = new URL('/login', request.url);
      redirectUrl.searchParams.set('callbackUrl', pathname);
      return addSecurityHeaders(NextResponse.redirect(redirectUrl));
    }
    
    // Handle base upload path - only for authenticated users
    if (pathname === '/upload') {
      console.log('Base /upload path accessed');
      const mockToken = `pi_${Date.now()}_mock`;
      return addSecurityHeaders(NextResponse.redirect(new URL(`/upload/${mockToken}`, request.url)));
    }
    
    // Handle success page - only for authenticated users
    if (pathname === '/upload/success') {
      console.log('Success page accessed');
      return addSecurityHeaders(NextResponse.next());
    }
    
    // Handle token paths - only for authenticated users
    if (pathname.startsWith('/upload/')) {
      const token = pathname.split('/').pop();
      
      if (token && (token.startsWith('pi_') && token.includes('_'))) {
        console.log('Valid token, proceeding');
        return addSecurityHeaders(NextResponse.next());
      }
      
      console.log('Invalid token, redirecting to new mock token');
      const mockToken = `pi_${Date.now()}_mock`;
      return addSecurityHeaders(NextResponse.redirect(new URL(`/upload/${mockToken}`, request.url)));
    }
  }
  
  // Check authentication for all other routes
  if (!isAuthenticated) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', pathname);
    return addSecurityHeaders(NextResponse.redirect(redirectUrl));
  }
  
  return addSecurityHeaders(NextResponse.next());
}

// Helper function to add security headers to all responses
function addSecurityHeaders(response: NextResponse) {
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // Updated CSP to allow PDFs
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data:; " +
    "connect-src 'self'; " +
    "object-src 'self'; " +  // Allow PDFs in object tags
    "frame-src 'self';"      // Allow PDFs in iframes
  );
  
  return response;
}

export const config = {
  matcher: [
    // Protect all routes except static assets and PDF files
    '/((?!_next/static|_next/image|favicon.ico|sample_reports\/.*.pdf).*)',
  ]
}
