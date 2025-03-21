"use client"
import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"

const PDFViewer = () => {
  const searchParams = useSearchParams()
  const pdfUrl = searchParams.get("pdfUrl")
  
  // Process the URL to ensure it works correctly
  let displayUrl = '';
  
  if (pdfUrl) {
    // If the URL doesn't already start with http/https, treat it as a relative path
    if (!pdfUrl.startsWith('http')) {
      // Remove any leading slash to prevent double slashes
      const cleanPath = pdfUrl.startsWith('/') ? pdfUrl.substring(1) : pdfUrl;
      // Create an absolute URL based on the current origin
      displayUrl = `${window.location.origin}/${cleanPath}`;
    } else {
      displayUrl = pdfUrl;
    }
  }
  
  return (
    <div className="pdf-container h-screen">
      {pdfUrl ? (
        <iframe 
          src={displayUrl} 
          width="100%" 
          height="100%" 
          style={{ border: "none" }} 
          title="PDF Viewer"
        />
      ) : (
        <p className="text-center py-4">No PDF URL provided</p>
      )}
    </div>
  )
}

const ViewPDF = () => {
  return (
    <Suspense fallback={<div className="text-center py-4">Loading PDF viewer...</div>}>
      <PDFViewer />
    </Suspense>
  )
}

export default ViewPDF
