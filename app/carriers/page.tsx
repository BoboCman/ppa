"use client"
/*
import type { FC } from "react"
import { CheckCircle, Eye, ThumbsUp, Shield, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import CTACard from "@/components/CTACard"

const CarriersPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-blue-100/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#4B6FEE] mb-6 leading-tight">
              Our Open Architecture Approach
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Independent access to multiple top-rated insurance carriers
            </p>
          </div>
        </div>
      </section>

      {/* Carrier Showcase Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B6FEE] mb-6">Carrier Independence</h2>
            <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
              As a truly independent agency, we are not tied to any single carrier. This allows us to recommend the best
              solution for your unique situation, without conflicts of interest.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "American General",
                "John Hancock",
                "Lincoln Financial",
                "Pacific Life",
                "Protective Life",
                "Prudential",
                "Symetra",
                "Transamerica",
              ].map((carrier) => (
                <div
                  key={carrier}
                  className="rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-center h-24 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-gray-700">{carrier}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting Support Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-6">Expert Underwriting Navigation</h2>
            <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
              For clients with complex medical histories or other underwriting challenges, our approach helps identify
              carriers most likely to offer favorable terms.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-[#4B6FEE]">Our Underwriting Process</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Pre-submission carrier assessment",
                      "Strategic application positioning",
                      "Medical records organization",
                      "Comprehensive underwriting package preparation",
                      "Multi-carrier submission strategy when appropriate",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 rounded-full p-1">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-600 ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-[#4B6FEE]">Specialized Experience With</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Diabetes and cardiovascular conditions",
                      "Cancer history cases",
                      "Hazardous avocations",
                      "Foreign national coverage",
                      "High net worth planning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 rounded-full p-1">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-600 ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-12">Our Transparency Commitment</h2>

            <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Eye,
                    text: "We disclose all carrier compensation",
                  },
                  {
                    icon: ThumbsUp,
                    text: "We recommend what's in your best interest, even if that means keeping your current policy",
                  },
                  {
                    icon: Shield,
                    text: "We maintain independence from any single insurance company",
                  },
                  {
                    icon: MessageCircle,
                    text: "We explain everything in plain language",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full bg-white p-2">
                      <item.icon className="w-6 h-6 text-[#4B6FEE]" />
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CTACard
              title="Ready to explore your options?"
              description="Our independent approach ensures you get the right solution for your needs."
              buttonText="Start My Free AI Analysis"
              buttonLink="/upload"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
*/

export default CarriersPage

