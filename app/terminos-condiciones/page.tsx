import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Términos y Condiciones</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aceptación de términos</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Al acceder y utilizar topsitesapuestaspe.com, aceptas estar sujeto a estos términos y condiciones. Si no
                estás de acuerdo con alguna parte de estos términos, no debes usar nuestro sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Uso del sitio</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Este sitio web proporciona información sobre casas de apuestas deportivas en Perú. El contenido es solo
                para fines informativos y educativos.
              </p>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Debes ser mayor de 18 años para usar este sitio</li>
                <li>Las apuestas deben ser legales en tu jurisdicción</li>
                <li>No garantizamos resultados o ganancias</li>
                <li>Eres responsable de verificar la legalidad de las apuestas en tu área</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enlaces de afiliados</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Este sitio contiene enlaces de afiliados a sitios de apuestas. Podemos recibir una comisión si te
                registras a través de nuestros enlaces. Esto no afecta nuestras evaluaciones ni recomendaciones, que se
                basan en análisis objetivos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitación de responsabilidad</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                No somos responsables de pérdidas o daños derivados del uso de la información en este sitio. Las
                apuestas conllevan riesgos financieros y debes apostar de manera responsable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Juego responsable</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Promovemos el juego responsable. Si crees que tienes un problema con el juego, busca ayuda de
                organizaciones especializadas como GamCare o GambleAware.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Recuerda: Las apuestas deben ser una forma de entretenimiento, no una manera de ganar dinero.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambios en los términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                vigor inmediatamente después de su publicación en el sitio.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
              <p>Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long" })}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
