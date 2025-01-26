import Image from "next/image"

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Your Title</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A brief introduction about yourself and your professional goals. Highlight your key strengths and what makes
          you unique in your field.
        </p>
      </div>
    </section>
  )
}

