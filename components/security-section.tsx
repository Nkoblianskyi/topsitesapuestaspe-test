export function SecuritySection() {
  return (
    <section id="seguridad" className="bg-amber-50/30 py-3">
      <div className="max-w-6xl mx-auto px-1">
        <div className="bg-white rounded-lg p-8 md:p-12 border border-red-600/30 shadow-lg px-1 py-2.5">
          <h2 className="md:text-4xl font-bold text-center text-slate-900 mb-12 text-2xl">
            Seguridad y Juego Responsable
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-4">Protección de Datos</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Encriptación SSL de 128 bits en todas las transacciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Verificación de identidad según normativas MINCETUR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Protección de información personal bajo ley peruana</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Servidores seguros con monitoreo 24/7</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Licencias y Regulación</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Supervisión de MINCETUR Perú</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Cumplimiento de regulaciones internacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Auditorías periódicas de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Transparencia en términos y condiciones</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg p-8 border border-red-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Compromiso con el Juego Responsable</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">+18</div>
                <p className="text-slate-700 text-sm">Solo mayores de edad pueden apostar</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Límites</div>
                <p className="text-slate-700 text-sm">Establece límites de depósito y tiempo</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">Ayuda</div>
                <p className="text-slate-700 text-sm">Acceso a recursos de apoyo profesional</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-slate-700 text-center mb-4">
                Las apuestas deben ser una forma de entretenimiento, no una fuente de ingresos. Si crees que puedes
                tener un problema con el juego, busca ayuda profesional.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  GamCare
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  BeGambleAware
                </a>
                <span className="text-slate-400">•</span>
                <a href="/juego-responsable" className="text-blue-600 hover:text-blue-700 underline">
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
