"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Upload } from "lucide-react"
import { Logo } from "@/components/Logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // If the current path is /login, don't render anything
  if (pathname === "/login") return null

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Why Review?" },
    { href: "mailto:support@financialplanner-ai.com", label: "Contact" },
  ]

  const isActivePath = (path: string) => {
    if (path.startsWith("mailto:")) return false
    return pathname === path
  }

  return (
    <>
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-base transition-colors duration-200 
                    ${isActivePath(link.href) ? "text-[#4B6FEE] font-semibold" : "text-gray-600 hover:text-[#4B6FEE]"}
                    group
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#4B6FEE] transform origin-left transition-transform duration-200 
                      ${isActivePath(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              ))}

              {/* Upload Button */}
              <Link
                href="/upload"
                className="bg-[#4B6FEE] hover:bg-[#3B4FDE] text-white rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300"
              >
                <Upload size={18} />
                Upload Policy
              </Link>
            </div>
          </div>

          {/* Mobile Navigation - Modified for better visibility */}
          {isOpen && (
            <div className="md:hidden border-t border-border">
              <div className="px-4 py-2 space-y-1 bg-white shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-base transition-colors duration-200 rounded-md
                      ${
                        isActivePath(link.href)
                          ? "text-[#4B6FEE] font-semibold bg-blue-50"
                          : "text-gray-600 hover:text-[#4B6FEE] hover:bg-gray-50"
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Upload Button */}
                <Link
                  href="/upload"
                  className="block w-full bg-[#4B6FEE] hover:bg-[#3B4FDE] text-white rounded-full px-6 py-2 flex items-center justify-center gap-2 my-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Upload size={18} />
                  Upload Policy
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

