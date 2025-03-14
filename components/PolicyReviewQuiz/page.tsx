"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const PolicyReviewQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: [],
    question4: "",
  })
  const [result, setResult] = useState("")

  const handleSingleAnswer = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value })
  }

  const handleMultipleAnswer = (value: string) => {
    const currentAnswers = [...(answers.question3 as string[])]
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
                    checked={(answers.question3 as string[]).includes(option)}
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
                disabled={(answers.question3 as string[]).length === 0}
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
  )
}

export default PolicyReviewQuiz

