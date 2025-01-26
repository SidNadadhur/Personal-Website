"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ZoomableImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full border-4 border-white shadow-xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <Image src={src || "/placeholder.svg"} alt={alt} width={1000} height={1000} className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </>
  )
}

