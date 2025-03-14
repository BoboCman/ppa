"use client"

import type { FC } from "react"
import Link from "next/link"
import { Zap, FileText, ArrowRight, CheckCircle, Users, LineChart, Heart, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CTACard from "@/components/CTACard"

const ServicesPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-blue-100/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#4B6FEE] mb-6 leading-tight">
              Our Services: AI Analysis + Human Expertise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Technology-powered insights combined with independent expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B6FEE] mb-12">
              Choose Your Path to Policy Clarity
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free AI Assessment */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <Zap className="w-8 h-8 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Free AI Assessment</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Basic policy information extraction",
                      "Summary of potential issues",
                      "High-level recommendations",
                      "No obligation",
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
                  <Button asChild className="w-full bg-[#4B6FEE] hover:bg-blue-700 text-white">
                    <Link href="/upload">Start Free Analysis</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Comprehensive Review Package */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102 border-2 border-blue-200">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <FileText className="w-8 h-8 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Comprehensive Review Package ($250)</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Detailed AI-powered policy analysis report",
                      "Hidden gem and blind spot identification",
                      "One-hour consultation with independent expert",
                      "Personalized recommendations",
                      "Written summary of findings",
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
                  <Button asChild className="w-full bg-[#4B6FEE] hover:bg-blue-700 text-white">
                    <Link href="/upload?package=comprehensive">Get Complete Analysis</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Implementation Support */}
              <Card className="group transition-all duration-300 hover:shadow-lg bg-white transform hover:scale-102">
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full bg-blue-50 p-3 mb-4 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                    <ArrowRight className="w-8 h-8 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B6FEE]">Implementation Support</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Carrier shopping with open-architecture approach",
                      "Policy application assistance",
                      "Ongoing policy management",
                      "Transparent commission disclosure",
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
                  <Button asChild className="w-full bg-[#4B6FEE] hover:bg-blue-700 text-white">
                    <Link href="/carriers">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Human Element Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-6">Why Human Expertise Matters</h2>
            <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
              While AI excels at data analysis, life insurance decisions aren't purely mathematical. Your consultation
              with an independent expert ensures you get both technical insights and personalized guidance.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    text: "Context is critical - your financial picture extends beyond a single policy",
                  },
                  {
                    icon: LineChart,
                    text: "Risk tolerance varies - what's right for one person may be wrong for another",
                  },
                  {
                    icon: Heart,
                    text: "Family dynamics matter - protection needs are deeply personal",
                  },
                  {
                    icon: Scale,
                    text: "Tax implications require expertise - avoiding unintended consequences",
                  },
                ].map((item, index) => (
                  <Card key={index} className="group transition-all duration-300 hover:shadow-md bg-white">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-full bg-blue-50 p-2 group-hover:bg-[#4B6FEE] transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-[#4B6FEE] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-200 rounded-lg shadow-md w-full max-w-md h-[300px] flex items-center justify-center text-gray-500">
                  Consultation Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How accurate is the AI analysis?",
                  answer:
                    "Our AI has been trained on thousands of insurance policies and can extract key information with high accuracy. However, we always pair AI insights with human expertise to ensure the most accurate and personalized recommendations.",
                },
                {
                  question: "Why do I need a human consultation after the AI review?",
                  answer:
                    "While AI excels at data analysis, human experts provide context, understand your unique situation, and can explain complex concepts in simple terms. The combination delivers both efficiency and personalization.",
                },
                {
                  question: "What makes your service different from my agent's review?",
                  answer:
                    "We offer independent analysis without ties to specific carriers, use advanced AI to identify issues traditional reviews might miss, and provide clear, transparent recommendations without sales pressure.",
                },
                {
                  question: "Why should I pay for a review when agents offer them for free?",
                  answer:
                    "Free reviews from agents often come with inherent conflicts of interest. Our paid service ensures you receive truly independent advice focused on your best interests, not commission opportunities.",
                },
                {
                  question: "How do you get paid if I don't buy a new policy?",
                  answer:
                    "Our business model is built around transparent fees for our analysis services. While we can help implement recommendations if desired, our primary revenue comes from providing objective analysis, not from selling new policies.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CTACard
              title="Ready to get started?"
              description="Begin with a free AI analysis and see the difference our approach makes."
              buttonText="Start My Free AI Analysis"
              buttonLink="/upload"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

