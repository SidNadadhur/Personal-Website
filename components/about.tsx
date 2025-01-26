import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing a Master's degree in Data Science at The George Washington University, I am gaining
              hands-on experience through an AI/ML research internship in the US. With plans to graduate in May 2025, I
              am eager to contribute to impactful full-time roles that leverage my expertise in machine learning, data
              analysis, and software development.
            </p>
            <div className="mt-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Connect</h3>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("http://www.linkedin.com/in/srivallabh-siddharth-nadadhur", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://github.com/SidNadadhur?tab=repositories", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold text-lg mb-4">Resume</h3>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/10H4pJqcZAfUiOXB3rp1xyPlzWNzdmpXbJQZxhY5mb6I/edit?usp=sharing",
                    "_blank",
                  )
                }
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


