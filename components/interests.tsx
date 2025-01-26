import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  ShoppingBasketIcon as Basketball,
  CastleIcon as ChessKnight,
  UtensilsCrossed,
  Dog,
  Cat,
} from "lucide-react"

export default function Interests() {
  const interests = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Traveling",
      description: "Have been to 14 countries till now, exploring new cultures",
    },
    {
      icon: <Basketball className="h-6 w-6" />,
      title: "Basketball",
      description: "Playing basketball to stay active and competitive",
    },
    {
      icon: <ChessKnight className="h-6 w-6" />,
      title: "Chess",
      description: "Strategic thinking and mental challenges",
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" />,
      title: "Foodie",
      description: "Discovering new restaurants and cuisines around town",
    },
    {
      icon: <Dog className="h-6 w-6" />,
      title: "Pet Parent",
      description: "Proud parent to a loving dog and a curious cat",
    },
  ]

  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">When I'm Not Working</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{interest.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{interest.title}</h3>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

