export function SecuritySection() {
  return (
    <section id="seguridad" className="bg-slate-900/50 py-3">
      <div className="max-w-6xl mx-auto px-1">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-red-900/40 shadow-lg px-1 py-2.5">
          <h2 className="md:text-4xl font-bold text-center text-white mb-12 text-2xl">Seguridad y Juego Responsable</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-4">Protección de Datos</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Encriptación SSL de 128 bits en todas las transacciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Verificación de identidad según normativas MINCETUR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Protección de información personal bajo ley peruana</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Servidores seguros con monitoreo 24/7</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Licencias y Regulación</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Supervisión de MINCETUR Perú</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Cumplimiento de regulaciones internacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Auditorías periódicas de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Transparencia en términos y condiciones</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 rounded-lg p-8 border border-red-800/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Compromiso con el Juego Responsable</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">+18</div>
                <p className="text-gray-300 text-sm">Solo mayores de edad pueden apostar</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Límites</div>
                <p className="text-gray-300 text-sm">Establece límites de depósito y tiempo</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Ayuda</div>
                <p className="text-gray-300 text-sm">Acceso a recursos de apoyo profesional</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-center mb-4">
                Las apuestas deben ser una forma de entretenimiento, no una fuente de ingresos. Si crees que puedes
                tener un problema con el juego, busca ayuda profesional.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  GamCare
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  BeGambleAware
                </a>
                <span className="text-gray-600">•</span>
                <a href="/juego-responsable" className="text-blue-400 hover:text-blue-300 underline">
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
