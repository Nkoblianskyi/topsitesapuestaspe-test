"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-blue-500/30 p-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestra{" "}
            <a href="/politica-cookies" className="text-blue-400 hover:underline">
              política de cookies
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={acceptCookies} className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Aceptar Cookies
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
