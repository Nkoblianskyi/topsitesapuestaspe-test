"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
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

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer,sponsored")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-red-900/40 max-w-md shadow-2xl shadow-red-900/20">
        <div className="relative">
          <div
            className="text-center p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            onClick={handleModalClick}
          >
            <div className="flex justify-center mb-4 bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="h-16 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">¡Oferta Especial!</h3>
            <h4 className="text-xl font-bold text-yellow-400 mb-4">{topCasino.name}</h4>

            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-bold text-yellow-400 ml-2">{topCasino.rating}</span>
            </div>

            <p className="text-lg text-white mb-6">{topCasino.bonus}</p>

            <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold text-lg shadow-lg shadow-yellow-500/30">
              OBTENER BONO AHORA
            </Button>

            <p className="text-xs text-gray-400 mt-4">Oferta limitada. Aplican términos y condiciones.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
