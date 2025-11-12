export function GuideSection() {
  return (
    <section id="guia" className="py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-red-900/40 shadow-lg">
          <h2 className="md:text-4xl font-bold text-center text-white mb-8 text-2xl">
            Descubriendo las Mejores Casas de Apuestas de Perú
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-red-800/30">
              <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-300">
                Todas las casas de apuestas están reguladas por MINCETUR y cumplen con las normativas peruanas de
                protección al consumidor.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 border border-yellow-800/30">
              <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-600 mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3">Mejores Bonos</h3>
              <p className="text-gray-300">
                Comparamos los bonos y cuotas para garantizar que obtengas el mejor valor en tus apuestas deportivas y
                maximices tus ganancias.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 border border-white/20">
              <div className="h-1 w-16 bg-gradient-to-r from-white/70 to-white/50 mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3">Análisis Detallados</h3>
              <p className="text-gray-300">
                Reviews completos con pruebas reales de cada plataforma de apuestas deportivas durante semanas de
                evaluación.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              Perú tiene un mercado regulado de apuestas deportivas supervisado por MINCETUR (Ministerio de Comercio
              Exterior y Turismo). Esto significa que puedes apostar con confianza, sabiendo que tus datos y fondos
              están protegidos por la ley peruana.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              Nuestros especialistas prueban cada casa de apuestas durante semanas, evaluando todo desde la velocidad de
              los pagos hasta la calidad de las cuotas y el soporte al cliente. Solo recomendamos sitios que pasan
              nuestras rigurosas pruebas de seguridad y calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
