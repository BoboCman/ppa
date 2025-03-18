import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, CheckCircle, X, Zap, Shield, Users, FileText, Sparkles, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4B6FEE] tracking-tight">
              Choose Your Insurance Policy Review Option
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Our AI transforms complex insurance illustrations into clear insights.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Tier */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full z-0"></div>
              <CardHeader className="pb-0 relative z-10">
                <div className="rounded-full bg-blue-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-[#4B6FEE]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Policy QuickScan</h2>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#4B6FEE]">FREE</span>
                </div>
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="text-gray-600 font-medium mb-4">
                  Basic policy overview that&apos;s perfect for an initial assessment
                </p>
              </CardHeader>
              <CardContent className="flex-grow pt-6 pb-8 px-6">
                <ul className="space-y-4">
                  {[
                    "Email summary highlights",
                    "Policy basics & structure",
                    "Death benefit summary",
                    "Key considerations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 rounded-full p-1 bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button
                  asChild
                  className="w-full bg-[#4B6FEE] hover:bg-blue-700 text-white rounded-full py-5 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Link href="/upload">Get Free QuickScan</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Tier */}
            <Card className="shadow-xl border-[#4B6FEE] hover:-translate-y-2 transition-all duration-300 bg-white relative flex flex-col z-10 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#4B6FEE] rounded-t-lg"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/70 rounded-bl-full z-0"></div>
              <CardHeader className="pb-0 pt-6 relative z-10">
                <div className="rounded-full bg-blue-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-[#4B6FEE]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Full Policy Review</h2>
                <div className="mb-2 flex items-baseline">
                  <span className="text-3xl font-bold text-[#4B6FEE]">$0</span>
                  <span className="text-gray-600 ml-1">per policy</span>
                </div>
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="text-gray-600 font-medium">Comprehensive analysis with</p>
                <p className="text-gray-600 font-medium mb-4">detailed recommendations</p>
              </CardHeader>
              <CardContent className="flex-grow pt-6 pb-8 px-6">
                <ul className="space-y-4">
                  {[
                    "Email summary highlights",
                    "Detailed PDF report",
                    "Protection & premium analysis",
                    "Cash value & rider evaluation",
                    "Policy strategies & recommendations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 rounded-full p-1 bg-green-50 transition-colors duration-300 group-hover:bg-green-100">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-5 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Link href="/upload">Analyze My Policy Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Tier */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full z-0"></div>
              <CardHeader className="pb-0 relative z-10">
                <div className="rounded-full bg-blue-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#4B6FEE]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Policy Pro Dashboard</h2>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#4B6FEE]">Custom</span>
                </div>
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="text-gray-600 font-medium mb-4">
                  All-in-one policy review platform for financial advisors
                </p>
              </CardHeader>
              <CardContent className="flex-grow pt-6 pb-8 px-6">
                <ul className="space-y-4">
                  {[
                    "AI-powered analysis dashboard",
                    "Client-ready visual interface",
                    "Interactive policy assistant",
                    "One-click client reporting",
                    "Unlimited reviews (30 days)",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 rounded-full p-1 bg-green-50 transition-colors duration-300 group-hover:bg-green-100">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button
                  asChild
                  className="w-full bg-[#4B6FEE] hover:bg-blue-700 text-white rounded-full py-5 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Link href="mailto:enterprise@financialplanner-ai.com">Contact Our Team</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Feature Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#4B6FEE] mb-8 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl shadow-md">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#4B6FEE]/20">
                    <th className="py-5 px-6 text-left text-gray-700 font-bold border-b border-blue-100 min-w-[200px] text-lg">
                      Feature
                    </th>
                    <th className="py-5 px-6 text-center text-gray-700 font-bold border-b border-blue-100 min-w-[150px] text-lg">
                      QuickScan
                      <div className="text-sm font-medium text-gray-500">(Free)</div>
                    </th>
                    <th className="py-5 px-6 text-center text-gray-700 font-bold border-b border-blue-100 min-w-[150px] text-lg">
                      Full Policy Review
                      <div className="text-sm font-medium text-gray-500">($0)</div>
                    </th>
                    <th className="py-5 px-6 text-center text-gray-700 font-bold border-b border-blue-100 min-w-[150px] text-lg">
                      Policy Pro Dashboard
                      <div className="text-sm font-medium text-gray-500">(Custom)</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Policy Analysis */}
                  <tr className="bg-[#4B6FEE]/10">
                    <td colSpan={4} className="py-4 px-6 font-bold text-[#4B6FEE] text-lg border-t border-blue-100">
                      Policy Analysis
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Policy Overview</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        Basic
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Comprehensive
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Comprehensive
                      </span>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Death Benefit Analysis</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        Basic
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Detailed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Detailed
                      </span>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Premium Structure</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        Summary
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Full Analysis
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Full Analysis
                      </span>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Policy Mechanics</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Detailed Insights */}
                  <tr className="bg-[#4B6FEE]/10">
                    <td colSpan={4} className="py-4 px-6 font-bold text-[#4B6FEE] text-lg border-t border-blue-100">
                      Detailed Insights
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Protection Strategy</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Premium Optimization</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Cash Value Growth</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Rider Benefits</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Deliverables */}
                  <tr className="bg-[#4B6FEE]/10">
                    <td colSpan={4} className="py-4 px-6 font-bold text-[#4B6FEE] text-lg border-t border-blue-100">
                      Deliverables
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Email Summary</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        Basic
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Comprehensive
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Comprehensive
                      </span>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">PDF Report</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Complete
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#4B6FEE] text-sm font-medium">
                        Complete
                      </span>
                    </td>
                  </tr>

                  {/* Enterprise Dashboard */}
                  <tr className="bg-[#4B6FEE]/10">
                    <td colSpan={4} className="py-4 px-6 font-bold text-[#4B6FEE] text-lg border-t border-blue-100">
                      Pro Dashboard Features
                    </td>
                  </tr>
                  {[
                    "Quick Look (Policy Summary)",
                    "Policy Mechanics Section",
                    "Policy Features Analysis",
                    "Smart Policy Care Guidance",
                    "Client Talking Points",
                    "Action Planning Tools",
                    "Interactive AI Assistant",
                    "Voice/Text Interaction",
                    "One-Click Client Reporting",
                    "Direct Client Email Sharing",
                  ].map((feature, index) => (
                    <tr
                      key={feature}
                      className={`${index % 2 === 0 ? "bg-gray-50" : ""} hover:bg-blue-50/30 transition-colors duration-150`}
                    >
                      <td className="py-4 px-6 border-t border-gray-200 font-medium pl-8">
                        <div className="flex items-center">
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center border-t border-gray-200">
                        <div className="flex justify-center">
                          <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                            <X className="h-5 w-5 text-red-400" />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center border-t border-gray-200">
                        <div className="flex justify-center">
                          <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                            <X className="h-5 w-5 text-red-400" />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center border-t border-gray-200">
                        <div className="flex justify-center">
                          <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Support & Access */}
                  <tr className="bg-[#4B6FEE]/10">
                    <td colSpan={4} className="py-4 px-6 font-bold text-[#4B6FEE] text-lg border-t border-blue-100">
                      Support & Access
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Email Assistance</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Dedicated Account Manager</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Multiple Advisor Accounts</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">30-Day Unlimited Reviews</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 border-t border-gray-200 font-medium">Priority Response</td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-red-50 p-1 w-8 h-8 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center border-t border-gray-200">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-green-50 p-1 w-8 h-8 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Supporting Content */}
          <div className="bg-white rounded-xl shadow-lg p-12 border border-blue-100 mb-16">
            <h2 className="text-3xl font-bold text-[#4B6FEE] mb-6 text-center">
              The Future of Life Insurance Policy Reviews Is Here
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              AI-Powered Insights, Human-Guided Decisions
            </h3>

            <blockquote className="border-l-4 border-[#4B6FEE] pl-6 py-4 italic text-gray-700 my-8 bg-blue-50/30 rounded-r-lg pr-6">
              &quot;Smart technology doing the heavy lifting. Smart humans making the decisions.&quot;
            </blockquote>

            <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-center">
              At Insurance Planner AI, we&apos;ve revolutionized how life insurance policies are analyzed and
              understood. Our digital-first approach combines cutting-edge artificial intelligence with intuitive design
              to deliver clarity where complexity once reigned.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Insurance Planner AI Is Different</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#4B6FEE]" />
                  </div>
                  <h4 className="font-bold text-[#4B6FEE] text-lg mb-3">Speed Without Sacrifice</h4>
                  <p className="text-gray-600">
                    What once took days or weeks now happens in minutes. Our AI analyzes complex policy documents
                    instantly, without sacrificing depth or accuracy.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#4B6FEE]" />
                  </div>
                  <h4 className="font-bold text-[#4B6FEE] text-lg mb-3">Clarity Through Technology</h4>
                  <p className="text-gray-600">
                    We translate insurance jargon into straightforward insights that empower policyholders and advisors
                    to make informed decisions with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-[#4B6FEE]" />
                  </div>
                  <h4 className="font-bold text-[#4B6FEE] text-lg mb-3">Complete Flexibility</h4>
                  <p className="text-gray-600">
                    Whether you&apos;re reviewing a single policy or managing hundreds of clients, our platform scales
                    to your needs with options for individuals and financial professionals alike.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="h-px w-full bg-gray-200 my-8"></div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                The Perfect Balance of Technology and Human Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                Our platform doesn&apos;t replace human judgment—it enhances it. By automating the complex work of
                policy analysis, we free you to focus on what matters most: making smart decisions about your financial
                future or providing valuable guidance to your clients.
              </p>
              <p className="text-gray-600">
                Experience the difference that AI-powered policy analysis can make. Upload your first policy today and
                see how clear insurance can be.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md group"
              >
                <Link href="/upload" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

