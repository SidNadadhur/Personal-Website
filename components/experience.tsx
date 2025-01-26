import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Associate Data Scientist",
      company: "Halvik Corp",
      location: "Vienna, VA, USA",
      period: "January 2025 - present",
      description: [
        "Improved processes by collaborating with cross-functional teams to optimize and deliver impactful solutions using LLaMa.",
        "Conducted statistical analyses, built predictive models to generate actionable insights into data trends and customer needs.",
        "Designed and deployed algorithms to analyze, summarize, and visualize data effectively.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Cognizant",
      location: "Hyderabad, India",
      period: "July 2022 - February 2023",
      description: [
        "Designed and deployed scalable RESTful APIs using Spring Boot, ensuring high reliability through testing with JUnit and Mockito.",
        "Optimized database performance to reduce latency by 15% and developed client-focused interfaces using Angular, HTML, CSS.",
        "Delivered end-to-end solutions by collaborating across teams, leveraging Git for version control and Agile methodologies.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} • {exp.location}
                  <br />
                  {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

