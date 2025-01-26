"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/ui/project-modal"
import Image from "next/image"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string
    images: string[]
  } | null>(null)

  const projects = [
    {
      title: "AI Meets Law",
      description: "Transforming Legal Research with RAG and Fine-Tuned LLM",
      details: [
        "Developed an AI-powered legal research system using RAG and fine-tuned LLM",
        "Integrated Few Shot Learning to optimize training data requirements",
        "Designed a FAISS-based retrieval system with semantic embeddings",
      ],
      tech: ["Python", "RAG", "LLM", "FAISS", "Streamlit", "NLP"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ui-9Ci2SMT2TaOscW46mNp91hxgJLFxZD.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2019.01.38-o0ttHMr497aWdcrP2d4n13Rmprmi44.png",
      ],
    },
    {
      title: "Apple Stock Prediction",
      description: "Stock Price Forecasting using ML Models",
      details: [
        "Engineered forecasting frameworks using LSTM, XGBoost, ARIMA, and Prophet",
        "Conducted advanced time series analysis",
        "Achieved forecasting accuracy of over 85%",
      ],
      tech: ["Python", "LSTM", "XGBoost", "ARIMA", "Prophet"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.45.20-8pLqtTn2I8TcH0eFCRm9P1oRb4hzx5.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.47.27-hnMmlUTucpLBOB4YEz8l4jhB1hgjbI.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.46.29-cBM4WnDnTATWKlqenzSJTnwuTqibHo.png",
      ],
    },
    {
      title: "Bank Customer Churn Prediction",
      description: "AWS-based Customer Churn Analysis",
      details: [
        "Constructed predictive models with Amazon SageMaker",
        "Employed Amazon S3 and QuickSight for visualization",
        "Performed extensive data preprocessing and feature engineering",
      ],
      tech: ["AWS", "SageMaker", "S3", "QuickSight", "Python"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.55.45-Sgg6BYPfgGZg16AuQPyzfCJZnv9kPI.png",
      ],
      github: "https://github.com/SidNadadhur?tab=repositories",
      demo: "#",
    },
    {
      title: "Hospital Readmission Analysis",
      description: "Healthcare Analytics using Tableau & Python",
      details: [
        "Utilized Python visualizations and Tableau to analyze hospital readmission rates",
        "Developed interactive dashboards with various chart types",
        "Enabled dynamic filtering for targeted healthcare interventions",
      ],
      tech: ["Tableau", "Python", "Data Visualization", "Healthcare Analytics"],
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.57.44-qGICKhKvmntHNOIaws8rQrVhlZfspO.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.58.48-cY2L3N3mPKfT2PIcxrRo4goLoEz0C1.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-25%20at%2018.58.24-hn6qC4ElGPvIEAdmpcRBTAa7Wd50uB.png",
      ],
      github: "https://github.com/SidNadadhur?tab=repositories",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          images={selectedProject.images}
          title={selectedProject.title}
        />
      )}
    </section>
  )
}

