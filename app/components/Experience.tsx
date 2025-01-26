export default function Experience() {
  const experiences = [
    {
      title: "Job Title 1",
      company: "Company Name 1",
      period: "Jan 2020 - Present",
      description: "Brief description of your responsibilities and achievements.",
    },
    {
      title: "Job Title 2",
      company: "Company Name 2",
      period: "Jan 2018 - Dec 2019",
      description: "Brief description of your responsibilities and achievements.",
    },
    // Add more experiences as needed
  ]

  return (
    <section id="experience" className="min-h-screen py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-lg text-gray-600">{exp.company}</h4>
            <p className="text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

