"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  title: string
}

export function ProjectModal({ isOpen, onClose, images, title }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleZoom = () => {
    setZoom(!zoom)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0">
        <div className="relative h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">{title} - Demo</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <div
              className={`relative h-full transition-transform duration-300 ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            >
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${title} demo ${currentImageIndex + 1}`}
                fill
                className={`object-contain transition-transform duration-300 ${zoom ? "scale-150" : "scale-100"}`}
                onClick={toggleZoom}
              />
            </div>

            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <Button variant="ghost" size="icon" className="absolute right-4 bottom-4" onClick={toggleZoom}>
              {zoom ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
            </Button>
          </div>

          {images.length > 1 && (
            <div className="p-4 border-t">
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

