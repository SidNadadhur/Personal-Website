"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.5)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <div className="sticky top-4 z-10 bg-white rounded-lg shadow-md p-2 mb-4">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
            disabled={pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setScale((prev) => Math.max(1, prev - 0.2))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setScale((prev) => Math.min(2.5, prev + 0.2))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <Document
          file="/Srivallabh_Siddharth_Nadadhur_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="max-w-full"
        >
          <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
    </div>
  )
}

