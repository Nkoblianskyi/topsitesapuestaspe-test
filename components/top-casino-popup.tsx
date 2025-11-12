"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Star, X } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white border-2 border-red-600 max-w-md shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full bg-red-600 p-2 text-white hover:bg-red-700 transition-colors z-50"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative">
          <a
            href={topCasino.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-6 hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="flex justify-center mb-4 bg-gray-100 border border-gray-300 rounded-lg p-4">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="h-16 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Oferta Especial!</h3>
            <h4 className="text-xl font-bold text-red-600 mb-4">{topCasino.name}</h4>

            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="text-lg font-bold text-yellow-600 ml-2">{topCasino.rating}</span>
            </div>

            <p className="text-lg text-gray-800 mb-6 font-semibold">{topCasino.bonus}</p>

            <div className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-lg shadow-lg shadow-yellow-500/30 px-6 py-3 rounded-md">
              OBTENER BONO AHORA
            </div>

            <p className="text-xs text-gray-600 mt-4">Oferta limitada. Aplican términos y condiciones.</p>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
