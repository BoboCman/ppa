"use client"

import type { FC } from "react"
import { CheckCircle, ArrowUpToLine, RefreshCw, ArrowRight, Brain, Users, CheckSquare } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import CTACard from "@/components/CTACard"

const DecisionPathwaysPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-blue-100/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#4B6FEE] mb-6 leading-tight">
              Understanding Your Options
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              After your policy review, you'll have three clear paths forward
            </p>
          </div>
        </div>
      </section>

      {/* Decision Cards Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B6FEE] mb-12">
              Your Policy Decision Pathways
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Keep & Optimize Card */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <CheckCircle className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Keep & Optimize Your Policy</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">When This Makes Sense</h4>
                      <ul className="space-y-2">
                        {[
                          "Policy is performing as expected",
                          "Coverage still aligns with needs",
                          "Premium structure remains affordable",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Optimization Strategies</h4>
                      <ul className="space-y-2">
                        {["Premium adjustments", "Asset allocation changes", "Policy loan management"].map(
                          (item, i) => (
                            <li key={i} className="flex items-start group/item">
                              <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              </div>
                              <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                                {item}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Surrender Card */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <ArrowUpToLine className="w-8 h-8 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Surrender Your Policy</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">When This Makes Sense</h4>
                      <ul className="space-y-2">
                        {[
                          "Significant underperformance",
                          "Coverage no longer needed",
                          "Better options available elsewhere",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Considerations</h4>
                      <ul className="space-y-2">
                        {["Tax implications", "Surrender fees", "Alternative protection strategies"].map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Repurpose Card */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <RefreshCw className="w-8 h-8 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Repurpose Your Policy</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">When This Makes Sense</h4>
                      <ul className="space-y-2">
                        {[
                          "Health has changed since purchase",
                          "New policy types better suit needs",
                          "Financial objectives have shifted",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Implementation Approach</h4>
                      <ul className="space-y-2">
                        {["Underwriting assessment", "Carrier selection", "1035 exchange options"].map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-gray-600 ml-2 transition-colors duration-300 group-hover/item:text-gray-900">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-12">Your Decision Journey</h2>

            <div className="relative">
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    title: "AI Analysis",
                    description: "Policy evaluation completed",
                    icon: <Brain className="w-6 h-6" />,
                  },
                  {
                    title: "Expert Consultation",
                    description: "Options discussed",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    title: "Option Selection",
                    description: "Decision made",
                    icon: <CheckSquare className="w-6 h-6" />,
                  },
                  {
                    title: "Implementation Support",
                    description: "Action taken",
                    icon: <ArrowRight className="w-6 h-6" />,
                  },
                ].map((item, index) => (
                  <div key={item.title} className="relative flex">
                    <Card className="text-center transition-all duration-300 hover:shadow-lg bg-white group hover:-translate-y-1 w-full flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full justify-between">
                        <div>
                          <div className="bg-blue-50 text-[#4B6FEE] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-xl font-bold">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-4 text-[#4B6FEE]">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-[100%] -translate-y-1/2 z-20">
                        <div className="hidden md:flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
                          <ArrowRight className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-medium text-gray-600 mb-2">Client Success Stories Coming Soon</h3>
              <p className="text-gray-500">We're working with clients now and will share their experiences here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CTACard
              title="Ready to understand your options?"
              description="Start with a free policy analysis to see where you stand"
              buttonText="Upload Your Policy"
              buttonLink="/upload"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default DecisionPathwaysPage

