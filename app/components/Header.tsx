import Link from "next/link"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const sections = ["profile", "experience", "skills", "projects", "contact"]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeSection === section
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

