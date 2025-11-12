"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

  const rejectCookies = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 border-t border-red-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra{" "}
            <Link href="/politica-cookies" className="text-yellow-400 hover:text-yellow-300 underline">
              política de cookies
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <Button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-semibold shadow-lg shadow-yellow-500/20"
            >
              Aceptar
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="border-red-800 text-gray-300 hover:bg-slate-800 bg-transparent"
            >
              Rechazar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
