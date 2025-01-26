import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "R", "SQL (MySQL, PostgreSQL)", "MongoDB", "Neo4j"],
    },
    {
      category: "Data Science",
      skills: [
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Statistical Analysis",
        "Scikit-Learn",
        "PyTorch",
        "TensorFlow",
        "Keras",
      ],
    },
    {
      category: "MLOps & Deployment",
      skills: ["Docker", "Kubernetes", "Flask", "Streamlit", "RESTful APIs"],
    },
    {
      category: "Cloud & Distributed Computing",
      skills: ["Amazon Web Services", "Azure ML", "Data Factory", "PySpark", "Hadoop", "Apache Kafka"],
    },
    {
      category: "Tools & Version Control",
      skills: ["GitHub", "Git", "Jupyter Notebooks", "Visual Studio Code", "Informatica", "Conda"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

