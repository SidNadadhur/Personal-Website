import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      name: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      icon: "☁️",
    },
    {
      name: "AWS Cloud Architecting",
      issuer: "Amazon Web Services",
      icon: "🏗️",
    },
    {
      name: "Red Hat OpenShift I: Containers & Kubernetes",
      issuer: "Red Hat",
      icon: "🐳",
    },
    {
      name: "Red Hat System Administration: Operating a Production Cluster",
      issuer: "Red Hat",
      icon: "⚙️",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                    <Badge variant="secondary">{cert.issuer}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

