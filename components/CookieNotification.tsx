"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

const CookieNotification: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShowNotification(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowNotification(false)
  }

  if (!showNotification) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm mr-4">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <a href="/cookie-policy" className="underline hover:text-blue-300">
            Learn more
          </a>
        </p>
        <Button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-600 text-white">
          Accept
        </Button>
      </div>
    </div>
  )
}

export default CookieNotification

