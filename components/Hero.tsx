"use client"

import type { FC } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  FileText,
  CheckCircle,
  Zap,
  ArrowRight,
  Shield,
  Sparkles,
  TrendingUp,
  Lock,
  LineChart,
  ChevronDown,
  UploadIcon,
  Brain,
  Inbox,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const Hero: FC = () => {
  const router = useRouter()

  const handleViewSample = (pdfUrl: string) => {
    router.push(`/view-pdf?pdfUrl=/${pdfUrl}`)
  }

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="w-full relative" aria-labelledby="hero-title">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#4B6FEE] mb-4 tracking-tight flex flex-col items-center"
            >
              <span className="mb-2">Life Insurance</span>
              <span className="flex items-center gap-2">
                <span className="text-3xl md:text-5xl lg:text-6xl opacity-90">Policy Reviews</span>
                <span className="bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white text-lg md:text-xl lg:text-2xl px-4 py-2 rounded-full shadow-md font-semibold relative overflow-hidden">
                  <span className="relative z-10">in minutes</span>
                  <span className="absolute inset-0 bg-white opacity-20 transform -skew-x-12"></span>
                </span>
              </span>
            </h1>
            <h2 className="text-xl md:text-3xl mb-12 text-gray-600 font-light">
              Turn Policy Details into Clear Answers
              <br className="hidden md:block" />
              with Smart AI Technology
            </h2>
            <Card className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-blue-100">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-6">
                  <div className="rounded-full bg-blue-50 p-3">
                    <Zap className="w-8 h-8 text-[#4B6FEE]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4B6FEE] text-center">
                    The Next Generation of Insurance Policy Analysis
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center">
                    Get clarity on life insurance policies instantly – our AI transforms complex insurance documents
                    into clear insights that policyholders and advisors can act on.
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 font-medium w-full">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
                      <span>Reliable AI Analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
                      <span>Quick, Clear Results</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
                      <span>Expert-Level Analysis</span>
                    </div>
                  </div>
                  <div className="flex items-center text-[#4B6FEE] font-bold text-lg">
                    <UploadIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                    <span>Simply upload any in-force illustration and let our AI handle the rest</span>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                    <Button
                      onClick={() => router.push("/upload")}
                      className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <span className="flex items-center gap-2">
                        Upload a Policy
                        <UploadIcon className="w-5 h-5" />
                      </span>
                    </Button>
                    <Button
                      onClick={() => scrollToSection("how-it-works")}
                      variant="outline"
                      className="border-[#4B6FEE] text-[#4B6FEE] px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <span className="flex items-center gap-2">
                        Learn More
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

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B6FEE]">Rapid Policy Analysis</h2>
              <p className="text-gray-600 text-lg">From complex document to clear insights in moments</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    title: "Upload a Policy",
                    description: "Simply upload a policy illustration and provide an email. That is all we need.",
                    icon: <UploadIcon className="w-6 h-6" />,
                    link: {
                      text: "Need help getting an illustration?",
                      href: "/illustration-helper",
                    },
                  },
                  {
                    title: "AI Analysis",
                    description: "Insurance Planner AI analyzes the illustration to identify key policy details",
                    icon: <Brain className="w-6 h-6" />,
                  },
                  {
                    title: "Quick Results",
                    description: "Receive a clear summary and detailed PDF report to an inbox in minutes",
                    icon: <Inbox className="w-6 h-6" />,
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
                        {item.link && (
                          <Link
                            href={item.link.href}
                            className="text-blue-500 hover:text-blue-700 underline mt-4 inline-block bg-white"
                          >
                            {item.link.text}
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                    {index < 2 && (
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

            <div className="mt-16 flex flex-col items-center space-y-2">
              <Button
                onClick={() => scrollToSection("ai-analysis")}
                className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold group transition-all duration-300 hover:transform hover:scale-105 flex items-center"
              >
                <LineChart className="w-6 h-6 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>Explore AI Analysis</span>
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="text-sm text-gray-600">↓ See what&apos;s included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="ai-analysis" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B6FEE]">What Our AI Analysis Reveals</h2>
              <p className="text-gray-600 text-lg">Comprehensive insights for policyholders and advisors</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Protection Assessment",
                  description:
                    "Clear understanding of how coverage aligns with financial protection needs and visibility into the policy's true protection capabilities",
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Premium Optimization",
                  description:
                    "Analysis of premium structure efficiency and strategies for maintaining coverage effectively over time",
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Growth Potential",
                  description:
                    "Detailed insights into the policy's accumulation potential and options for accessing available benefits",
                },
                {
                  icon: <Lock className="h-8 w-8" />,
                  title: "Policy Longevity",
                  description:
                    "Evaluation of policy guarantees and recommendations for ensuring strong, sustainable coverage for the long term",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-full bg-blue-50">
                      <div className="text-[#4B6FEE]">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col items-center mt-12 space-y-2">
              <Button
                onClick={() => scrollToSection("sample-reports")}
                className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold group transition-all duration-300 hover:transform hover:scale-105 flex items-center"
              >
                <FileText className="w-6 h-6 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>Sample Reports</span>
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="text-sm text-gray-600">↓ View example analyses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Combined Sample Reports and CTA Section */}
      <div id="sample-reports" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Sample Reports */}
            <div>
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4B6FEE]">AI Analysis Package</h2>
                <p className="text-gray-600 text-lg">Comprehensive insights tailored to policy needs</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Policy Snapshot",
                    features: [
                      "Policy Overview & Structure",
                      "Protection Features & Benefits",
                      "Key Policy Metrics",
                      "Perfect for initial assessment",
                      "Core Policy Highlights",
                    ],
                    sample: "sample_reports/SAMPLE_CLIENT_SUMMARY.pdf",
                  },
                  {
                    title: "Policy Analysis Report",
                    features: [
                      "In-depth Feature Assessment",
                      "Hidden Gems & Blind Spots",
                      "Performance Trajectory Analysis",
                      "Risk Mitigation Strategies",
                      "Ideal for advisor consultations",
                    ],
                    sample: "sample_reports/SAMPLE_POLICY_REVIEW.pdf",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group transition-all duration-300 hover:shadow-xl bg-white hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-lg" />
                    <CardHeader className="relative pb-0">
                      <div className="flex items-center justify-center mb-6">
                        <div className="rounded-full bg-blue-50 p-3">
                          <FileText className="h-6 w-6 text-[#4B6FEE]" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-center text-gray-900">{item.title}</h3>
                    </CardHeader>
                    <CardContent className="relative pt-6">
                      <ul className="space-y-4">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 group/item">
                            <div className="flex-shrink-0 rounded-full p-1 transition-colors duration-300 group-hover/item:bg-green-50">
                              <CheckCircle className="text-green-500 h-5 w-5" />
                            </div>
                            <span className="text-gray-600 transition-colors duration-300 group-hover/item:text-gray-900">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={() => handleViewSample(item.sample)}
                        className="w-full mt-8 bg-[#4B6FEE] hover:bg-blue-600 text-white transition-all duration-300 group-hover:transform group-hover:scale-102"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        View Sample
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="border-2 border-blue-100 bg-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white p-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="rounded-full bg-white/10 p-2 transition-transform duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Get an Insurance Planner AI Analysis Now</h2>
                </div>
                <p className="text-xl text-blue-100">From Policy Confusion to Peace of Mind in Minutes</p>
              </CardHeader>
              <CardContent className="flex justify-center p-8 bg-gradient-to-b from-white to-blue-50/30">
                <Button
                  onClick={() => router.push("/upload")}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white"
                >
                  <span className="flex items-center gap-2">
                    Analyze My Policy
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

