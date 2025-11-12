import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Shield, AlertTriangle, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
          
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Juego Responsable</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apuesta de forma responsable</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Las apuestas deportivas deben ser una forma de entretenimiento, no una manera de ganar dinero o resolver
                problemas financieros. Es importante mantener el control y apostar de manera responsable.
              </p>
            </section>

            <section className="mb-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Señales de advertencia</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>Apostar más de lo que puedes permitirte perder</li>
                      <li>Perseguir las pérdidas con más apuestas</li>
                      <li>Mentir sobre cuánto apuestas</li>
                      <li>Descuidar responsabilidades por apostar</li>
                      <li>Pedir prestado dinero para apostar</li>
                      <li>Sentir ansiedad o depresión relacionada con las apuestas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos para el juego responsable</h2>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Establece un presupuesto y respétalo</li>
                <li>Nunca apuestes con dinero que necesites para gastos esenciales</li>
                <li>Establece límites de tiempo para apostar</li>
                <li>No apuestes bajo la influencia del alcohol o drogas</li>
                <li>Toma descansos regulares</li>
                <li>No persigas las pérdidas</li>
                <li>Mantén un registro de tus apuestas</li>
                <li>Busca ayuda si sientes que estás perdiendo el control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recursos de ayuda</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Si crees que tienes un problema con el juego, o conoces a alguien que lo tiene, hay organizaciones que
                pueden ayudar:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">GamCare</h3>
                      <p className="text-gray-700 mb-3">Organización líder en el apoyo al juego responsable</p>
                      <Link
                        href="https://www.gamcare.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Visitar sitio web
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start">
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">GambleAware</h3>
                      <p className="text-gray-700 mb-3">Recursos y apoyo para jugadores y sus familias</p>
                      <Link
                        href="https://www.begambleaware.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                      >
                        Visitar sitio web
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">MINCETUR Perú</h3>
                      <p className="text-gray-700 mb-3">
                        Ministerio de Comercio Exterior y Turismo - Regulación de juegos en Perú
                      </p>
                      <Link
                        href="https://www.gob.pe/mincetur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                      >
                        Visitar sitio web
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Autoexclusión</h2>
              <p className="text-gray-700 leading-relaxed">
                La mayoría de los sitios de apuestas ofrecen opciones de autoexclusión que te permiten bloquearte
                temporalmente o permanentemente. No dudes en utilizar estas herramientas si sientes que necesitas un
                descanso.
              </p>
            </section>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-8">
              <p className="text-gray-900 font-semibold text-center">
                Recuerda: El juego debe ser divertido. Si deja de serlo, es hora de parar.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
