export default function Skills() {
  const skills = [
    { name: "Skill 1", level: 90 },
    { name: "Skill 2", level: 85 },
    { name: "Skill 3", level: 80 },
    { name: "Skill 4", level: 75 },
    { name: "Skill 5", level: 70 },
  ]

  return (
    <section id="skills" className="min-h-screen py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
            <div className="relative h-4 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

