export function GuideSection() {
  return (
    <section id="guia" className="py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 md:p-12 border border-red-600/30 shadow-lg">
          <h2 className="md:text-4xl font-bold text-center text-slate-900 mb-8 text-2xl">
            Descubriendo las Mejores Casas de Apuestas de Perú
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 rounded-lg p-6 border border-red-300">
              <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seguridad Garantizada</h3>
              <p className="text-slate-700">
                Todas las casas de apuestas están reguladas por MINCETUR y cumplen con las normativas peruanas de
                protección al consumidor.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-300">
              <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-600 mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mejores Bonos</h3>
              <p className="text-slate-700">
                Comparamos los bonos y cuotas para garantizar que obtengas el mejor valor en tus apuestas deportivas y
                maximices tus ganancias.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-300">
              <div className="h-1 w-16 bg-gradient-to-r from-slate-500 to-slate-600 mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Análisis Detallados</h3>
              <p className="text-slate-700">
                Reviews completos con pruebas reales de cada plataforma de apuestas deportivas durante semanas de
                evaluación.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6 text-base">
              Perú tiene un mercado regulado de apuestas deportivas supervisado por MINCETUR (Ministerio de Comercio
              Exterior y Turismo). Esto significa que puedes apostar con confianza, sabiendo que tus datos y fondos
              están protegidos por la ley peruana.
            </p>

            <p className="text-slate-700 leading-relaxed text-base">
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
