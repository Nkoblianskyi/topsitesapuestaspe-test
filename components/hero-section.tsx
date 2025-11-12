import { Star, Clock } from "lucide-react"
import Image from "next/image"


export function HeroSection() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("es-PE", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-gradient-to-br from-red-50 via-white to-yellow-50 rounded-lg overflow-hidden shadow-xl border-2 border-red-600 h-[225px] md:h-[350px] relative"
          style={{
            backgroundImage: "url(/peru-sports-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="px-4 py-4 md:px-8 md:py-6 max-w-3xl text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-gray-900">
                Los Mejores <span className="text-red-600">Sitios de Apuestas Deportivas</span> en Perú
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                Descubre las mejores casas de apuestas deportivas en Perú. Rankings actualizados, bonos exclusivos y
                análisis detallados para apostar de forma segura y responsable.
              </p>

              {/* Security Indicators */}
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <div className="flex items-center space-x-1 md:space-x-2 text-red-600">
                  <Image src="/flag.png" alt="Logo" width={32} height={24} />
                  <span className="text-xs md:text-sm font-semibold">Sitios Verificados</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 text-yellow-600">
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm font-semibold">Análisis Profesionales</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2 text-gray-800">
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
