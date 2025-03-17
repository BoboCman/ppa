"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  ArrowRight,
  ArrowLeft,
  Zap,
  Shield,
  Clock,
  Copy,
  Check,
  ChevronUp,
  ChevronDown,
  Eye,
  FileText,
  CheckSquare,
  CheckCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react"

interface Step {
  title: string
  description: string | string[]
  script?: boolean
}

interface IllustrationContent {
  title: string
  description: string
  items: string[]
  script: string
  contextBar: string
  introCards: {
    preview: string
    script: string
    action: string
  }
}

interface IllustrationResults {
  [key: string]: IllustrationContent
}

function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center mb-12">
      {[1, 2, 3].map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step <= currentStep ? "bg-[#4B6FEE] text-white" : "bg-gray-200 text-gray-600"
            } shadow-md transition-all duration-300`}
          >
            {step}
          </div>
          {index < 2 && <div className={`h-0.5 w-16 ${step < currentStep ? "bg-[#4B6FEE]" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )
}

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function OptionCard({ icon, title, description, onClick }: OptionCardProps) {
  return (
    <Card className="flex flex-col p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 hover:-translate-y-1 bg-white">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#4B6FEE]">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-[#4B6FEE]">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <Button
        onClick={onClick}
        className="mt-auto flex items-center justify-between bg-[#4B6FEE] hover:bg-blue-700 text-white px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 group"
      >
        <span className="flex items-center gap-2">
          Select
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
    </Card>
  )
}

export default function IllustrationHelper() {
  const [step, setStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string>("current_review")
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)
  const router = useRouter()

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const results: IllustrationResults = {
    current_review: {
      title: "See how a policy is performing",
      description: "Get a complete picture of a policy's health and future",
      contextBar:
        "You selected 'See how a policy is performing.' This illustration will show a complete picture of the policy's health and future. Follow the steps below to get the illustration.",
      items: [
        "Coverage amount and type (Level or Increasing)",
        "Year-by-year projected cash value growth",
        "Current premium and payment schedule",
        "Current interest rates and growth assumptions",
        "Guaranteed and potential future values",
        "Policy loan details (if applicable)",
        "All policy costs and charges",
      ],
      script:
        "I am requesting a current in-force illustration for this policy. Please include:\n\n• Policy performance based on the current annual premium\n• Both guaranteed and non-guaranteed values\n• Cash value projections\n• Death benefit projections\n• All policy expenses and fees\n• Current interest rate assumptions\n• Projections to age 100\n• Impact of any existing policy loans\n\nPlease make sure all values and projections match the current premium payment schedule.",
      introCards: {
        preview:
          "First, preview what will be received. The illustration will show a complete picture of the policy's performance. Here's what will be included:",
        script:
          "Next, get the request script. We've prepared everything needed to say. Just copy this text and share it with the insurance company to get the illustration.",
        action:
          "Finally, take these simple steps. Here's exactly what to do to get the illustration. Click each step for more details.",
      },
    },
    lower_premium: {
      title: "Find ways to lower payments",
      description: "Discover ways to make payments more affordable",
      contextBar:
        "You selected 'Find ways to lower payments.' This illustration will show options to make payments more affordable. Follow the steps below to get the illustration.",
      items: [
        "Lowest possible premium to keep coverage",
        "How payments could change year by year",
        "What happens to the policy's cash value",
        "How the coverage amount may change",
        "All costs and fees at lower funding",
        "Important considerations and trade-offs",
      ],
      script:
        "I am requesting a minimum premium in-force illustration for this policy. Please include:\n\n• The lowest premium amount needed to maintain the current death benefit\n• Year-by-year minimum premium requirements\n• Impact on cash value at minimum funding\n• Both guaranteed and non-guaranteed values\n• All policy expenses and fees\n• Current interest rate assumptions\n• Projections to age 100\n• Any years requiring premium adjustments\n\nPlease note all assumptions used in these calculations.",
      introCards: {
        preview:
          "First, preview what will be received. The illustration will show payment options and their impacts. Here's what will be included:",
        script:
          "Next, get the request script. We've prepared everything needed to say. Just copy this text and share it with the insurance company to get the illustration.",
        action:
          "Finally, take these simple steps. Here's exactly what to do to get the illustration. Click each step for more details.",
      },
    },
    stop_paying: {
      title: "See what happens if payments stop",
      description: "Learn what happens to coverage if payments stop",
      contextBar:
        "You selected 'See what happens if payments stop.' This illustration will show how stopping payments affects coverage. Follow the steps below to get the illustration.",
      items: [
        "How the policy performs without future payments",
        "Year-by-year changes to the policy's cash value",
        "When coverage might end (if it does)",
        "How long the death benefit lasts",
        "Changes to the policy's extra benefits",
        "Cash value needed to keep coverage going",
      ],
      script:
        "I am requesting a zero-premium in-force illustration for this policy. Please show what happens if all premium payments stop now. Please include:\n\n• How long the current death benefit can continue\n• Year-by-year changes to the cash value\n• When the policy would end without more payments\n• Both guaranteed and non-guaranteed projections\n• Effects on any policy benefits or riders\n• All policy expenses and fees\n• Current interest rate assumptions\n\nPlease run this to age 100 or until the policy ends, whichever comes first.",
      introCards: {
        preview:
          "First, preview what will be received. The illustration will show the effects of stopping payments. Here's what will be included:",
        script:
          "Next, get the request script. We've prepared everything needed to say. Just copy this text and share it with the insurance company to get the illustration.",
        action:
          "Finally, take these simple steps. Here's exactly what to do to get the illustration. Click each step for more details.",
      },
    },
  }

  const options = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "See how a policy is performing",
      description: "Get a complete picture of a policy's health and future",
      value: "current_review",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Find ways to lower payments",
      description: "Discover ways to make payments more affordable",
      value: "lower_premium",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "See what happens if payments stop",
      description: "Learn what happens to coverage if payments stop",
      value: "stop_paying",
    },
  ]

  const steps: Step[] = [
    {
      title: "Find the Policy Number",
      description: "Look for this on the policy statement or online account",
    },
    {
      title: "Contact the Insurance Company",
      description: [
        "Call: Use the phone number on the policy or statement",
        "Email: Contact the agent or the service department",
        "Online: Log into the insurance company's website",
      ],
    },
    {
      title: "Request the Illustration",
      description: "Use this script when contacting the insurance company:",
      script: true,
    },
    {
      title: "What to expect",
      description: [
        "Expect the illustration within 3-5 business days",
        "It will arrive by email or mail",
        "Once received, return to the website and upload the illustration",
      ],
    },
  ]

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setStep(3)
  }

  if (step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ProgressSteps currentStep={1} />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B6FEE] tracking-tight">
              Need help getting an illustration?
            </h1>
            <p className="text-xl text-gray-600 mb-4 font-light">
              Get the illustration needed in just a few simple steps
            </p>
            <p className="text-gray-600">Takes about 2-3 minutes</p>
          </div>

          <Card className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-blue-100 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="rounded-full bg-blue-50 p-3">
                  <FileText className="w-8 h-8 text-[#4B6FEE]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#4B6FEE] text-center">
                  Why an Illustration Is Needed
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center">
                  An illustration shows exactly how a policy is performing and what to expect in the future. It's the
                  key document needed for a thorough policy review.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                  <Button
                    onClick={() => setStep(2)}
                    className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4B6FEE] text-[#4B6FEE] px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
                    onClick={() => router.push("/")}
                  >
                    <span className="flex items-center gap-2">
                      Return to Home
                      <Home className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ProgressSteps currentStep={2} />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B6FEE] tracking-tight">
              Which type of illustration is needed?
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Select what information is needed about the policy. Choose an illustration type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {options.map((option) => (
              <OptionCard
                key={option.value}
                icon={option.icon}
                title={option.title}
                description={option.description}
                onClick={() => handleOptionSelect(option.value)}
              />
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              className="border-[#4B6FEE] text-[#4B6FEE] px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
              onClick={() => setStep(1)}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </span>
            </Button>
            <Button
              variant="outline"
              className="border-[#4B6FEE] text-[#4B6FEE] px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
              onClick={() => router.push("/")}
            >
              <span className="flex items-center gap-2">
                Return to Home <Home className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: The detailed illustration helper UI
  const content = results[selectedOption]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ProgressSteps currentStep={3} />

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B6FEE] tracking-tight">{content.title}</h1>
          <p className="text-xl text-gray-600 font-light">{content.description}</p>
        </div>

        <Card className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-blue-100 mb-8">
          <CardContent className="p-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-8 text-[#4B6FEE] font-medium">
              <p>{content.contextBar}</p>
            </div>

            <Tabs defaultValue="what-youll-see" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 h-12 items-center bg-gray-100 p-1 rounded-lg">
                <TabsTrigger
                  value="what-youll-see"
                  className="rounded-full h-10 data-[state=active]:bg-[#4B6FEE] data-[state=active]:text-white data-[state=active]:shadow-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Eye className="h-4 w-4" />
                  First, Preview Content
                </TabsTrigger>
                <TabsTrigger
                  value="request-script"
                  className="rounded-full h-10 data-[state=active]:bg-[#4B6FEE] data-[state=active]:text-white data-[state=active]:shadow-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FileText className="h-4 w-4" />
                  Next, Get Script
                </TabsTrigger>
                <TabsTrigger
                  value="next-steps"
                  className="rounded-full h-10 data-[state=active]:bg-[#4B6FEE] data-[state=active]:text-white data-[state=active]:shadow-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <CheckSquare className="h-4 w-4" />
                  Finally, Take Action
                </TabsTrigger>
              </TabsList>

              <TabsContent value="what-youll-see" className="mt-0">
                <Card className="mb-6 p-6 bg-blue-50 border-blue-100">
                  <h3 className="text-lg font-medium text-[#4B6FEE] mb-2">{content.introCards.preview}</h3>
                </Card>
                <ul className="space-y-4" role="list">
                  {content.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="request-script" className="mt-0">
                <Card className="mb-6 p-6 bg-blue-50 border-blue-100">
                  <h3 className="text-lg font-medium text-[#4B6FEE] mb-2">{content.introCards.script}</h3>
                </Card>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 text-gray-700 border border-gray-200">
                    <p className="whitespace-pre-line">{content.script}</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button
                      variant="outline"
                      className={cn(
                        "gap-2 transition-all duration-300 px-6 py-3 rounded-full border-[#4B6FEE] text-[#4B6FEE] hover:scale-105",
                        copySuccess && "bg-[#4B6FEE] text-white hover:bg-[#4B6FEE]/90",
                      )}
                      onClick={() => handleCopyClick(content.script)}
                    >
                      <span className="flex items-center gap-2">
                        {copySuccess ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copySuccess ? "Copied!" : "Copy Script"}
                      </span>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="next-steps" className="mt-0">
                <Card className="mb-6 p-6 bg-blue-50 border-blue-100">
                  <h3 className="text-lg font-medium text-[#4B6FEE] mb-2">{content.introCards.action}</h3>
                </Card>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <Card
                      key={index}
                      className="border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                    >
                      <button
                        className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                        onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4B6FEE] text-white">
                          {index + 1}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-[#4B6FEE]">{step.title}</div>
                        </div>
                        {expandedStep === index ? (
                          <ChevronUp className="h-5 w-5 text-[#4B6FEE]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#4B6FEE]" />
                        )}
                      </button>
                      {expandedStep === index && (
                        <div className="px-4 pb-4 pl-16 text-gray-600">
                          {step.script ? (
                            <>
                              <p className="mb-2">{step.description}</p>
                              <div className="bg-gray-50 rounded-lg p-4 text-gray-700 border border-gray-200">
                                <p className="whitespace-pre-line">{content.script}</p>
                              </div>
                              <div className="flex items-center justify-end mt-2">
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "gap-2 transition-all duration-300 px-4 py-2 rounded-full border-[#4B6FEE] text-[#4B6FEE] hover:scale-105",
                                    copySuccess && "bg-[#4B6FEE] text-white hover:bg-[#4B6FEE]/90",
                                  )}
                                  onClick={() => handleCopyClick(content.script)}
                                >
                                  <span className="flex items-center gap-2">
                                    {copySuccess ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    {copySuccess ? "Copied!" : "Copy"}
                                  </span>
                                </Button>
                              </div>
                            </>
                          ) : Array.isArray(step.description) ? (
                            <ul className="space-y-2">
                              {step.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>{step.description}</p>
                          )}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <Button
            variant="outline"
            className="border-[#4B6FEE] text-[#4B6FEE] px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
            onClick={() => setStep(2)}
          >
            <span className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Options
            </span>
          </Button>
          <Button
            className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 group"
            onClick={() => router.push("/upload")}
          >
            <span className="flex items-center gap-2">
              Already Have an Illustration?
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

