"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const AboutPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: [] as string[], // Explicitly type as string[] to fix the error
    question4: "",
  })
  const [result, setResult] = useState("")

  const handleSingleAnswer = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value })
  }

  const handleMultipleAnswer = (value: string) => {
    const currentAnswers = [...answers.question3]
    const index = currentAnswers.indexOf(value)

    if (index > -1) {
      currentAnswers.splice(index, 1)
    } else {
      currentAnswers.push(value)
    }

    setAnswers({ ...answers, question3: currentAnswers })
  }

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Simple risk assessment logic
    let riskLevel = "Medium"

    // Question 1: Last review time
    if (answers.question1 === "Over 5 years ago" || answers.question1 === "Never / I don't know") {
      riskLevel = "High"
    }

    // Question 2: Failed projections
    if (answers.question2 === "Yes") {
      riskLevel = "High"
    }

    // Question 4: Policy confidence
    if (answers.question4 === "No, I'm concerned" || answers.question4 === "I have no idea") {
      riskLevel = riskLevel === "High" ? "High" : "Medium"
    } else if (answers.question4 === "Yes, I'm confident") {
      riskLevel = riskLevel === "High" ? "Medium" : "Low"
    }

    setResult(riskLevel)
    setCurrentStep(5)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-100 to-blue-100/50 py-20 md:py-32 lg:py-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4B6FEE] mb-6 leading-tight">
              The Hidden Crisis in Life Insurance
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Permanent life insurance policies often face critical issues without regular review
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Policy Review Quiz Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B6FEE] mb-12">
              Is Your Policy at Risk?
            </h2>
            <Card className="bg-white shadow-md border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#4B6FEE] mb-4 text-center">Quick Policy Checkup</h3>
                <p className="text-gray-600 mb-6 text-center">Answer these questions to see if you need a policy review.</p>

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900 mb-4">1. When was your last policy review?</p>
                    <RadioGroup
                      value={answers.question1}
                      onValueChange={(value) => handleSingleAnswer("question1", value)}
                      className="space-y-2"
                    >
                      {[
                        "Within the last year",
                        "1-3 years ago",
                        "4-5 years ago",
                        "Over 5 years ago",
                        "Never / I don't know",
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`q1-${option}`} />
                          <Label htmlFor={`q1-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="flex justify-end mt-6">
                      <Button onClick={handleNext} disabled={!answers.question1} className="bg-[#4B6FEE] hover:bg-blue-700">
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900 mb-4">2. Has your policy ever failed to meet projected values?</p>
                    <RadioGroup
                      value={answers.question2}
                      onValueChange={(value) => handleSingleAnswer("question2", value)}
                      className="space-y-2"
                    >
                      {["Yes", "No", "I don't know"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`q2-${option}`} />
                          <Label htmlFor={`q2-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleNext} disabled={!answers.question2} className="bg-[#4B6FEE] hover:bg-blue-700">
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900 mb-4">
                      3. Have you experienced any of these life changes since purchasing your policy?
                    </p>
                    <div className="space-y-2">
                      {[
                        "Marriage/Divorce",
                        "Children/Grandchildren",
                        "Business changes",
                        "Retirement",
                        "Health changes",
                        "None of these",
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`q3-${option}`}
                            checked={answers.question3.includes(option)}
                            onCheckedChange={() => handleMultipleAnswer(option)}
                          />
                          <Label htmlFor={`q3-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={answers.question3.length === 0}
                        className="bg-[#4B6FEE] hover:bg-blue-700"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <p className="font-medium text-gray-900 mb-4">
                      4. Do you know if your policy is on track to provide the benefits you expect?
                    </p>
                    <RadioGroup
                      value={answers.question4}
                      onValueChange={(value) => handleSingleAnswer("question4", value)}
                      className="space-y-2"
                    >
                      {["Yes, I'm confident", "I'm somewhat uncertain", "No, I'm concerned", "I have no idea"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`q4-${option}`} />
                          <Label htmlFor={`q4-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={!answers.question4} className="bg-[#4B6FEE] hover:bg-blue-700">
                        Submit
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Based on your answers, your policy risk level is:
                      </h4>
                      <p
                        className={`text-2xl font-bold ${
                          result === "High" ? "text-red-500" : result === "Medium" ? "text-amber-500" : "text-green-500"
                        }`}
                      >
                        {result}
                      </p>
                    </div>
                    <p className="text-gray-600 text-center">
                      {result === "High"
                        ? "Your policy may need immediate attention. We recommend a comprehensive review as soon as possible."
                        : result === "Medium"
                          ? "There are some potential concerns with your policy. A review would be beneficial to ensure it's still meeting your needs."
                          : "Your policy appears to be in good standing, but a regular review is still recommended to ensure optimal performance."}
                    </p>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => (window.location.href = "/upload")}
                    >
                      Start My Free AI Analysis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#4B6FEE] mb-12">
              Why Policy Reviews Matter
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B6FEE] mb-4">Common Policy Issues</h3>
                  <ul className="space-y-3">
                    {[
                      "Underperforming cash value growth",
                      "Expiring guarantees",
                      "Rising cost of insurance",
                      "Outdated beneficiary designations",
                      "Misaligned coverage with current needs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#4B6FEE] mb-4">Our Review Process</h3>
                  <ul className="space-y-3">
                    {[
                      "AI-powered policy analysis",
                      "Comprehensive feature evaluation",
                      "Performance projection assessment",
                      "Independent expert consultation",
                      "Clear action recommendations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button 
                className="bg-[#4B6FEE] hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg"
                onClick={() => window.location.href = "/upload"}
              >
                Upload Your Policy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
