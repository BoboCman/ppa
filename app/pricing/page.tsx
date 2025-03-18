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
              Choose Your Insurance Policy Analysis Option
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
                <p className="text-gray-600 font-medium">Basic policy overview</p>
              </CardHeader>
              <CardContent className="flex-grow pt-6 pb-8 px-6">
                <ul className="space-y-4">
                  {["Policy basics & structure", "Death benefit summary", "Key considerations"].map((feature) => (
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
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4B6FEE] text-white text-sm font-semibold py-1 px-4 rounded-full shadow-md">
                Most Popular
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/70 rounded-bl-full z-0"></div>
              <CardHeader className="pb-0 pt-8 relative z-10">
                <div className="rounded-full bg-blue-50 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-[#4B6FEE]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Policy Snapshot +</h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Analysis</h3>
                <div className="mb-2 flex items-baseline">
                  <span className="text-3xl font-bold text-[#4B6FEE]">$49</span>
                  <span className="text-gray-600 ml-1">per policy</span>
                </div>
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="text-gray-600 font-medium">Complete analysis with recommendations</p>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Policy</h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Intelligence</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#4B6FEE]">Custom</span>
                </div>
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="text-gray-600 font-medium">Professional dashboard for financial advisors</p>
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold border-b border-blue-100 min-w-[200px]">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b border-blue-100 min-w-[150px]">
                      QuickScan
                      <br />
                      (Free)
                    </th>
                    <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b border-blue-100 min-w-[150px]">
                      Snapshot + Analysis
                      <br />
                      ($49)
                    </th>
                    <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b border-blue-100 min-w-[150px]">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Policy Analysis */}
                  <tr className="bg-blue-50/50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-[#4B6FEE]">
                      Policy Analysis
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Policy Overview</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Basic</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Comprehensive</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Comprehensive</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Death Benefit Analysis</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Basic</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Detailed</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Detailed</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Premium Structure</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Summary</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Full Analysis</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Full Analysis</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Policy Mechanics</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>

                  {/* Detailed Insights */}
                  <tr className="bg-blue-50/50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-[#4B6FEE]">
                      Detailed Insights
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Protection Strategy</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Premium Optimization</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Cash Value Growth</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Rider Benefits</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>

                  {/* Deliverables */}
                  <tr className="bg-blue-50/50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-[#4B6FEE]">
                      Deliverables
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Email Summary</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Basic</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Comprehensive</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Comprehensive</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">PDF Report</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Complete</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">Complete</td>
                  </tr>

                  {/* Enterprise Dashboard */}
                  <tr className="bg-blue-50/50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-[#4B6FEE]">
                      Enterprise Dashboard
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
                    <tr key={feature} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-3 px-6 border-t border-gray-200">{feature}</td>
                      <td className="py-3 px-6 text-center border-t border-gray-200">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="py-3 px-6 text-center border-t border-gray-200">
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      </td>
                      <td className="py-3 px-6 text-center border-t border-gray-200">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}

                  {/* Support & Access */}
                  <tr className="bg-blue-50/50">
                    <td colSpan={4} className="py-3 px-6 font-semibold text-[#4B6FEE]">
                      Support & Access
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Email Assistance</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Dedicated Account Manager</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Multiple Advisor Accounts</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">30-Day Unlimited Reviews</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="py-3 px-6 border-t border-gray-200">Priority Response</td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-t border-gray-200">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
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

