import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-yellow-50 pt-20">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-2 border-red-600">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Las cookies son pequeños archivos de texto que se colocan en su computadora o dispositivo móvil cuando
                visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de
                manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo utilizamos las cookies</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Utilizamos cookies para:</p>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Mejorar la funcionalidad de nuestro sitio web</li>
                <li>Analizar cómo los visitantes utilizan nuestro sitio</li>
                <li>Personalizar su experiencia</li>
                <li>Recordar sus preferencias</li>
                <li>Proporcionar contenido relevante</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de cookies que utilizamos</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">Cookies Esenciales</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">Cookies de Análisis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio web, proporcionando
                  información sobre las páginas visitadas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">Cookies de Funcionalidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Permiten que el sitio web recuerde las elecciones que hace y proporcione funcionalidades mejoradas y
                  personalizadas.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de cookies</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Puede controlar y/o eliminar cookies como desee. Puede eliminar todas las cookies que ya están en su
                computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que
                visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos a través de nuestro sitio web.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-red-200">
              <p>Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long" })}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
