import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import ZoomableImage from "./zoomable-image"

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-pattern">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="mb-8">
          <ZoomableImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-17%20at%2011.14.42-ohGNRniHcJhd73UqK9I9lYvQIRaf2x.jpeg"
            alt="Srivallabh Siddharth Nadadhur"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Srivallabh Siddharth Nadadhur</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">Data Scientist & ML Engineer</p>
        <Button
          variant="outline"
          className="animate-bounce"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown className="h-4 w-4 mr-2" />
          Learn More
        </Button>
      </div>
    </section>
  )
}

