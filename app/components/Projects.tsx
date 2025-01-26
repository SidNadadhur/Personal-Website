import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Brief description of the project and your role.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Project 2",
      description: "Brief description of the project and your role.",
      image: "/placeholder.svg?height=200&width=300",
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="min-h-screen py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

