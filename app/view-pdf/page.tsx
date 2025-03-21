"use client"
import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PDFViewer = () => {
  const searchParams = useSearchParams()
  const pdfUrl = searchParams.get("pdfUrl")
  const [error, setError] = useState<string | null>(null)

  // Process the URL to ensure it works correctly
  let displayUrl = ""

  if (pdfUrl) {
    // If the URL doesn't already start with http/https, treat it as a relative path
    if (!pdfUrl.startsWith("http")) {
      // Remove any leading slash to prevent double slashes
      const cleanPath = pdfUrl.startsWith("/") ? pdfUrl.substring(1) : pdfUrl
      // Create an absolute URL based on the current origin
      displayUrl = `${window.location.origin}/${cleanPath}`
    } else {
      displayUrl = pdfUrl
    }
  }

  useEffect(() => {
    // Check if the PDF exists
    if (pdfUrl) {
      fetch(pdfUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`PDF not found (${response.status})`)
          }
        })
        .catch((err) => {
          console.error("Error loading PDF:", err)
          setError(
            "The requested PDF could not be found. Please make sure the sample PDFs are uploaded to your public directory.",
          )
        })
    }
  }, [pdfUrl])

  if (!pdfUrl) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error: No PDF URL provided</h1>
        <Link href="/">
          <Button className="bg-[#4B6FEE] hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-red-500 mb-4">{error}</h1>
        <p className="mb-8">The sample PDF files need to be uploaded to your project.</p>
        <Link href="/">
          <Button className="bg-[#4B6FEE] hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="pdf-container h-screen">
      <iframe src={displayUrl} width="100%" height="100%" style={{ border: "none" }} title="PDF Viewer" />
    </div>
  )
}

const ViewPDF = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" className="text-[#4B6FEE] border-[#4B6FEE]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <Suspense fallback={<div className="text-center py-4">Loading PDF viewer...</div>}>
        <PDFViewer />
      </Suspense>
    </div>
  )
}

export default ViewPDF

