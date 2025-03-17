"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, TrendingUp, AlertTriangle, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

const PolicyReviewQuiz = () => {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      text: "When was the last time this policy was reviewed?",
      icon: Calendar,
      category: "Timing",
    },
    {
      text: "Have there been significant life changes since the policy was purchased?",
      icon: TrendingUp,
      category: "Life Changes",
    },
    {
      text: "Are there any concerns about the policy's performance or structure?",
      icon: AlertTriangle,
      category: "Policy Performance",
    },
    {
      text: "Are you interested in exploring new coverage features or benefits?",
      icon: Shield,
      category: "Coverage Evolution",
    },
  ]

  const options = [
    ["Within the last year", "1-2 years ago", "3-5 years ago", "Over 5 years ago or never"],
    [
      "No significant changes",
      "Minor changes (new home, small salary adjustment)",
      "Moderate changes (marriage, new child, job change)",
      "Major changes (retirement, business sale, significant inheritance)",
    ],
    [
      "No concerns, policy seems fine",
      "Some questions about premium increases",
      "Concerned about market impacts or guarantees",
      "Multiple concerns about performance and structure",
    ],
    [
      "Current coverage seems adequate",
      "Interested in learning about new features",
      "Actively seeking enhanced benefits",
      "Need to explore tax optimization strategies",
    ],
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const getRecommendation = () => {
    // Calculate score - higher index = higher need for review
    const score = answers.reduce((total, answer) => {
      return total + answer
    }, 0)

    // Maximum possible score is 12 (3 points per question × 4 questions)
    if (score >= 9) {
      return {
        title: "Immediate Policy Review Recommended",
        description:
          "Based on your responses, a comprehensive policy analysis is strongly recommended. Several factors indicate potential opportunities for optimization or areas that need attention.",
        buttonText: "Start AI Analysis Now",
        buttonAction: () => router.push("/upload"),
        urgency: "high",
      }
    } else if (score >= 5) {
      return {
        title: "Policy Review Recommended",
        description:
          "Based on your responses, a policy review would be beneficial. Our AI can quickly analyze policy details and identify potential opportunities for improvement.",
        buttonText: "Get a Free Policy Snapshot",
        buttonAction: () => router.push("/upload"),
        urgency: "medium",
      }
    } else {
      return {
        title: "Policy May Be on Track",
        description:
          "Based on your responses, your policy may be performing as expected. However, a quick review can still identify optimization opportunities you might not be aware of.",
        buttonText: "Learn More About Reviews",
        buttonAction: () => router.push("/how-it-works"),
        urgency: "low",
      }
    }
  }

  return (
    <Card className="shadow-lg border-blue-100 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#4B6FEE] to-blue-500 text-white p-6">
        <CardTitle className="text-xl md:text-2xl font-semibold text-center">
          {showResults ? "Policy Review Assessment" : "Quick Policy Review Quiz"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {!showResults ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-2">
                \
                {questions[currentQuestion].icon &&
                  <questions[currentQuestion].icon className="w-4 h-4 text-[#4B6FEE]" />}
                <span>{questions[currentQuestion].category}</span>
              </span>
              <span className="flex items-center gap-1">
                {Array(questions.length)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full mx-1 ${
                        i < currentQuestion ? "bg-green-500" : i === currentQuestion ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    />
                  ))}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-6">{questions[currentQuestion].text}</h3>

            <div className="flex flex-col gap-3">
              {options[currentQuestion].map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  variant={
                    index === 0 ? "outline" : index === options[currentQuestion].length - 1 ? "default" : "outline"
                  }
                  className={`justify-start text-left py-4 ${
                    index === options[currentQuestion].length - 1
                      ? "bg-[#4B6FEE] hover:bg-blue-700 text-white"
                      : "border-[#4B6FEE] text-[#4B6FEE] hover:bg-blue-50"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {(() => {
              const recommendation = getRecommendation()
              return (
                <>
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`rounded-full p-3 ${
                        recommendation.urgency === "high"
                          ? "bg-red-50 text-red-500"
                          : recommendation.urgency === "medium"
                            ? "bg-blue-50 text-[#4B6FEE]"
                            : "bg-green-50 text-green-500"
                      }`}
                    >
                      {recommendation.urgency === "high" ? (
                        <AlertTriangle className="w-8 h-8" />
                      ) : recommendation.urgency === "medium" ? (
                        <TrendingUp className="w-8 h-8" />
                      ) : (
                        <CheckCircle className="w-8 h-8" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{recommendation.title}</h3>

                  <p className="text-gray-600 text-center mb-6">{recommendation.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={recommendation.buttonAction}
                      className={`flex-1 py-6 ${
                        recommendation.urgency === "high"
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-[#4B6FEE] hover:bg-blue-700"
                      } text-white`}
                    >
                      <span className="flex items-center gap-2">
                        {recommendation.buttonText}
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Button>
                    <Button
                      onClick={resetQuiz}
                      variant="outline"
                      className="flex-1 border-[#4B6FEE] text-[#4B6FEE] hover:bg-blue-50 py-6"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default PolicyReviewQuiz

