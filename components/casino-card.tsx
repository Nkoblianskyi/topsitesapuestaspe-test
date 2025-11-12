"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

const badges = ["MEJOR OPCIÓN", "RECOMENDADO", "POPULAR", "CONFIABLE", "VERIFICADO"]

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = rating % 2 !== 0

    return (
      <div className="flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? "fill-yellow-500 text-yellow-500"
                : i === fullStars && hasHalfStar
                  ? "fill-yellow-500/50 text-yellow-500"
                  : "text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <Badge
        variant="secondary"
        className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 bg-red-600 text-white border-red-700 shadow-lg"
      >
        #{casino.rank} {badges[index]}
      </Badge>

      <Link
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer hover:scale-[1.01] transition-all duration-300"
      >
        <div
          className={`bg-gradient-to-br from-white via-red-50/20 to-yellow-50/30 backdrop-blur-sm rounded-lg p-4 md:p-6 relative overflow-hidden ${
            casino.rank === 1
              ? "border-2 border-red-600 shadow-xl shadow-red-600/20"
              : "border-2 border-red-200 hover:border-red-400"
          }`}
        >
          {/* Background Pattern */}

          <div className="relative z-10">
            {/* Row 1: Logo and Bonus (Mobile) */}
            <div className="flex items-center justify-between gap-4 mb-4 md:hidden">
              {/* Logo */}
              <div className="w-24 h-16 flex items-center justify-center bg-black rounded-lg p-2 flex-shrink-0 border border-gray-200">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bonus */}
              <div className="flex-1">
                <p className="text-red-600 text-xs font-medium mb-1 text-center">OFERTA</p>
                <p className="text-base font-bold text-yellow-600 text-center">{casino.bonus}</p>
              </div>
            </div>

            {/* Row 2: Rating, Rank, Button (Mobile) */}
            <div className="flex items-center justify-between gap-3 mb-3 md:hidden">
              {/* Rating */}
              <div className="flex flex-col items-center space-y-1 flex-1">
                <span className="text-yellow-600 font-bold text-base">{casino.rating}</span>
                {renderStars(casino.rating)}
              </div>

              {/* Button */}
              <div className="flex-1">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold text-sm shadow-lg shadow-yellow-500/30">
                  OBTENER BONO
                </Button>
              </div>
            </div>

            {/* Row 3: Terms (Mobile) */}
            <p className="text-xs text-gray-600 text-center md:hidden">18+ • Juego Seguro • Aplican T&C</p>

            {/* Desktop Layout */}
            <div className="hidden md:flex md:items-center md:justify-between gap-4">
              {/* Casino Logo and Name */}
              <div className="flex flex-col items-center lg:items-start space-y-2 lg:flex-shrink-0">
                <div className="w-36 h-24 flex items-center justify-center bg-black rounded-lg p-2 border border-gray-200">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center lg:text-left">{casino.name}</h3>
              </div>

              {/* Bonus */}
              <div className="lg:flex-1 lg:text-center ml-4">
                <p className="text-red-600 text-sm font-medium mb-2">OFERTA DE BIENVENIDA</p>
                <p className="text-xl font-bold text-yellow-600">{casino.bonus}</p>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-center space-y-1 lg:flex-shrink-0">
                <span className="text-yellow-600 font-bold text-lg">{casino.rating}</span>
                {renderStars(casino.rating)}
                <p className="text-sm text-gray-600">{Math.floor(Math.random() * 3000) + 2000} evaluaciones</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 lg:flex-shrink-0 lg:w-48">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold shadow-lg shadow-yellow-500/30">
                  OBTENER BONO
                </Button>
                <p className="text-xs text-gray-600 text-center">18+ • Juego Seguro</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
