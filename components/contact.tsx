import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-pDiTrmRXYXUnx07iG2gE1AKOA65phU.jpeg)",
          filter: "brightness(0.7)",
        }}
      />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <div className="text-center mb-12">
          <p className="text-gray-200 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to collaborate on a project, discuss opportunities, or just have a
            conversation about data science and technology.
          </p>
        </div>
        <Card className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>434-310-1088</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>srivallabh.ns@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <a
                  href="http://www.linkedin.com/in/srivallabh-siddharth-nadadhur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

