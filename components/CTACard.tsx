import type { FC } from "react"
import Link from "next/link"
import { Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CTACardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const CTACard: FC<CTACardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <Card className="border-2 border-blue-100 bg-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white p-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="rounded-full bg-white/10 p-2 transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-xl text-blue-100">{description}</p>
      </CardHeader>
      <CardContent className="flex justify-center p-8 bg-gradient-to-b from-white to-blue-50/30">
        <Button
          asChild
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Link href={buttonLink} className="flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default CTACard

