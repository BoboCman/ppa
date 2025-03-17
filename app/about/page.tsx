"use client"

import {
  Zap,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Search,
  Lightbulb,
  ArrowRight,
  ArrowDownToLine,
  ArrowUpToLine,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { FC } from "react"
import PolicyReviewQuiz from "@/components/PolicyReviewQuiz"

const AboutPage: FC = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="w-full relative" aria-labelledby="about-title">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
            <h1
              id="about-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#4B6FEE] mb-4 tracking-tight flex flex-col items-center"
            >
              <span className="mb-2">Why Policy Reviews</span>
              <span className="flex items-center gap-2">
                <span className="text-3xl md:text-5xl lg:text-6xl opacity-90">Matter Now</span>
                <span className="bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white text-lg md:text-xl lg:text-2xl px-4 py-2 rounded-full shadow-md font-semibold relative overflow-hidden">
                  <span className="relative z-10">More Than Ever</span>
                  <span className="absolute inset-0 bg-white opacity-20 transform -skew-x-12"></span>
                </span>
              </span>
            </h1>
            <h2 className="text-xl md:text-3xl mb-12 text-gray-600 font-light">
              Life moves fast. Markets change. Opportunities emerge.
              <br className="hidden md:block" />
              Make sure life insurance keeps pace with life.
            </h2>
            <Card className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-blue-100">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-6">
                  <div className="rounded-full bg-blue-50 p-3">
                    <Zap className="w-8 h-8 text-[#4B6FEE]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4B6FEE] text-center">
                    Three Signs a Policy Review is Needed
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 w-full">
                    {[
                      {
                        icon: TrendingUp,
                        title: "Life Changes",
                        items: ["Major life events", "Career shifts", "New financial goals"],
                      },
                      {
                        icon: AlertTriangle,
                        title: "Policy Performance",
                        items: ["Premium fluctuations", "Market impacts", "Expiring guarantees"],
                      },
                      {
                        icon: Shield,
                        title: "Coverage Evolution",
                        items: ["New protection types", "Enhanced benefits", "Tax law opportunities"],
                      },
                    ].map((section, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="rounded-full bg-blue-50 p-3 mb-4">
                          <section.icon className="w-6 h-6 text-[#4B6FEE]" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#4B6FEE] mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 rounded-full p-1">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              </div>
                              <span className="text-gray-600 ml-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                    <Button
                      onClick={() => scrollToSection("policy-quiz")}
                      className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <span className="flex items-center gap-2">
                        Take the Policy Quiz
                        <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div id="policy-quiz" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B6FEE]">Quick Policy Review Quiz</h2>
              <p className="text-gray-600 text-lg">Find out if a policy review could benefit you</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <PolicyReviewQuiz />
            </div>

            <div className="mt-16 flex flex-col items-center space-y-2">
              <Button
                onClick={() => scrollToSection("ai-advantage")}
                className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold group transition-all duration-300 hover:transform hover:scale-105 flex items-center"
              >
                <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>Explore AI Advantage</span>
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="text-sm text-gray-600">↓ See how AI transforms policy reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Insurance Planner AI Advantage Section */}
      <div id="ai-advantage" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B6FEE]">The Insurance Planner AI Advantage</h2>
              <p className="text-gray-600 text-lg">See how our technology transforms the policy review experience</p>
            </div>

            <Card className="bg-white p-8 shadow-lg border-blue-100 mb-16 overflow-hidden">
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#4B6FEE] mb-4 flex items-center">
                    <ArrowDownToLine className="w-6 h-6 mr-2 text-red-400" />
                    Traditional Review
                  </h3>
                  {[
                    {
                      icon: Clock,
                      title: "Time-consuming",
                      description: "Hours of manual document review",
                    },
                    {
                      icon: AlertTriangle,
                      title: "Error-prone",
                      description: "Key details often overlooked",
                    },
                    { icon: FileText, title: "Surface-level", description: "Basic policy summary" },
                  ].map((item, index) => (
                    <Card key={index} className="group transition-all duration-300 hover:shadow-md bg-gray-50">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="rounded-full bg-blue-50 p-2 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#4B6FEE] mb-4 flex items-center">
                    <ArrowUpToLine className="w-6 h-6 mr-2 text-green-400" />
                    Insurance Planner AI
                  </h3>
                  {[
                    { icon: Zap, title: "Lightning-fast", description: "5-minute AI-powered analysis" },
                    { icon: Search, title: "Comprehensive", description: "Every feature examined" },
                    {
                      icon: Lightbulb,
                      title: "Actionable insights",
                      description: "Clear, personalized recommendations",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="group transition-all duration-300 hover:shadow-md bg-gray-50">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="rounded-full bg-blue-50 p-2 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center mt-12 space-y-2">
              <Button
                onClick={() => scrollToSection("cta-section")}
                className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold group transition-all duration-300 hover:transform hover:scale-105 flex items-center"
              >
                <FileText className="w-6 h-6 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>Get Started</span>
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="text-sm text-gray-600">↓ Start your policy analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* CTA Card */}
            <Card className="border-2 border-blue-100 bg-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white p-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="rounded-full bg-white/10 p-2 transition-transform duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Ready for AI-Powered Policy Insights?</h2>
                </div>
                <p className="text-xl text-blue-100">Upload any in-force illustration and receive analysis reports within minutes</p>
              </CardHeader>
              <CardContent className="flex justify-center p-8 bg-gradient-to-b from-white to-blue-50/30">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/upload" className="flex items-center gap-2">
                    Analyze Now
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

