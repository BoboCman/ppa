import { NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { PDFOptions } from 'puppeteer-core';

// Custom error types
interface ConversionError extends Error {
    stack?: string;
}

const PDF_OPTIONS: PDFOptions = {
    format: 'letter',
    printBackground: true,
    margin: {
        top: '0.75in',
        right: '0.5in',
        bottom: '0.75in',
        left: '0.5in'
    },
    preferCSSPageSize: false, // Changed to false to ensure our margins are enforced
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
        <div style="font-size: 8pt; width: 100%; padding: 0 0.5in; margin-top: 20px">
            <span style="color: #2d3748;">Confidential</span>
            <span style="float: right;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
    `,
    timeout: 60000 // Increased timeout for more reliability
};

export async function POST(request: Request) {
    let browser;
    try {
        if (!request) {
            throw new Error('No request received');
        }

        const html = await getHtmlFromRequest(request);
        if (!html) {
            throw new Error('No HTML content received');
        }

        // Launch browser with optimized settings
        browser = await puppeteer.launch({
            args: [
                ...chromium.args, 
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--font-render-hinting=none',
                '--disable-dev-shm-usage', // Prevents OOM in container environments
                '--disable-gpu',           // Reduces rendering inconsistencies
                '--disable-web-security',  // Helps with fonts and resources
                '--disable-features=IsolateOrigins,site-per-process' // Improves stability
            ],
            defaultViewport: {
                width: 1200,
                height: 1553,
                deviceScaleFactor: 2
            },
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
        });

        // Create page with extended timeout
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000);
        await page.setDefaultTimeout(60000);

        // Intercept console messages for better debugging
        page.on('console', msg => console.log('Browser console:', msg.text()));
        page.on('pageerror', error => console.error('Browser page error:', error));

        // Inject CSS to handle potential conflicts with HTML margins
        // This won't modify the HTML but will override its CSS at runtime
        await page.evaluateHandle(() => {
            const style = document.createElement('style');
            style.textContent = `
                @page {
                    margin: 0;
                    size: letter;
                }
                
                body {
                    margin: 0;
                    padding: 0;
                }
                
                .page-break-before {
                    page-break-before: always !important;
                }
                
                .page-break-after {
                    page-break-after: always !important;
                }
                
                .cover {
                    margin: 0;
                    padding: 0;
                }
                
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
            `;
            document.head.appendChild(style);
            return true;
        });

        // Set content with robust loading strategy
        await page.setContent(html, { 
            waitUntil: ['networkidle0', 'domcontentloaded', 'load'],
            timeout: 45000
        });

        // Ensure all resources and fonts are loaded with robust error handling
        await Promise.all([
            // Wait for fonts to load
            page.evaluateHandle(() => {
                return new Promise((resolve) => {
                    if (document.fonts && document.fonts.ready) {
                        document.fonts.ready.then(() => resolve(true))
                            .catch(() => {
                                console.warn('Font loading failed, continuing anyway');
                                resolve(true);
                            });
                    } else {
                        // Fallback for browsers without document.fonts
                        setTimeout(resolve, 2000);
                    }
                });
            }),
            
            // Wait for all images and resources to load
            page.evaluate(() => {
                return new Promise((resolve) => {
                    // If document is already complete, resolve immediately
                    if (document.readyState === 'complete') {
                        return resolve(true);
                    }
                    
                    // Otherwise wait for load event
                    window.addEventListener('load', () => resolve(true));
                    
                    // Fallback timeout in case load never fires
                    setTimeout(() => resolve(true), 5000);
                });
            })
        ]).catch(err => {
            console.warn('Resource loading warning:', err.message);
            // Continue anyway to attempt PDF generation
        });

        // Add a delay to ensure everything is rendered
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Take a screenshot for debugging purposes
        const screenshotBuffer = await page.screenshot({ 
            fullPage: true,
            type: 'jpeg',
            quality: 80
        });
        console.log(`Screenshot taken: ${screenshotBuffer.length} bytes`);

        // Generate PDF with optimized settings
        const pdfBuffer = await page.pdf(PDF_OPTIONS);

        if (!pdfBuffer || pdfBuffer.length === 0) {
            throw new Error('Generated PDF is empty');
        }

        console.log(`PDF generated successfully: ${pdfBuffer.length} bytes`);
        
        const filename = `policy_review_${new Date().toISOString().split('T')[0]}.pdf`;
        
        return new NextResponse(pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${filename}`,
                'Cache-Control': 'no-cache'
            }
        });

    } catch (error) {
        const conversionError = error as ConversionError;
        console.error('PDF conversion error:', {
            error: conversionError.message || 'Unknown error',
            stack: conversionError.stack || 'No stack trace',
            timestamp: new Date().toISOString()
        });
        
        // Return a detailed error response
        return NextResponse.json(
            { 
                error: 'Failed to convert HTML to PDF', 
                details: conversionError.message || 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        );
    } finally {
        if (browser) {
            try {
                await browser.close();
                console.log('Browser closed successfully');
            } catch (closeError) {
                console.error('Browser cleanup failed:', closeError);
            }
        }
    }
}

// Helper function to extract HTML from request with retry logic
async function getHtmlFromRequest(request: Request): Promise<string> {
    const maxRetries = 3;
    let attempt = 0;
    
    while (attempt < maxRetries) {
        try {
            const contentType = request.headers.get('content-type');
            
            if (!contentType) {
                throw new Error('Content-Type header is missing');
            }
            
            if (contentType.includes('application/json')) {
                const body = await request.json();
                if (!body.html) {
                    throw new Error('HTML content missing in JSON body');
                }
                return body.html;
            } 
            
            if (contentType.includes('text/html')) {
                const html = await request.text();
                if (!html) {
                    throw new Error('Empty HTML content');
                }
                return html;
            }
            
            throw new Error('Unsupported Content-Type: ' + contentType);
        } catch (error) {
            attempt++;
            const requestError = error as ConversionError;
            console.error(`HTML extraction attempt ${attempt} failed:`, requestError);
            
            if (attempt >= maxRetries) {
                throw requestError;
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    throw new Error('Failed to extract HTML after multiple attempts');
}
