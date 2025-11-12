import {  Star, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("es-PE", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-red-950/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-gradient-to-br from-slate-900 via-red-950/20 to-slate-800 rounded-lg overflow-hidden shadow-2xl border border-red-900/40 h-[225px] md:h-[350px] relative"
          style={{
            backgroundImage: "url(/casino-hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-900/70" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="px-4 py-4 md:px-8 md:py-6 max-w-3xl text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-white">
                Los Mejores <span className="text-red-500">Sitios de Apuestas</span> en Perú
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">
                Descubre las mejores casas de apuestas deportivas en Perú. Rankings actualizados, bonos exclusivos y
                análisis detallados para apostar de forma segura y responsable.
              </p>

              {/* Security Indicators */}
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <div className="flex items-center space-x-1 md:space-x-2 text-red-400">
                  <Image src="/flag.png" alt="Logo" width={32} height={24} />
                  <span className="text-xs md:text-sm font-semibold">Sitios Verificados</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 text-yellow-400">
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm font-semibold">Análisis Profesionales</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 text-white">
                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm font-semibold">Actualizado {currentMonth}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
