import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-6">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/casino-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Política de Cookies
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-300 mb-4">
                Las cookies son pequeños archivos de texto que se colocan en su computadora o dispositivo móvil cuando
                visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de
                manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cómo utilizamos las cookies</h2>
              <p className="text-gray-300 mb-4">Utilizamos cookies para:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Mejorar la funcionalidad de nuestro sitio web</li>
                <li>Analizar cómo los visitantes utilizan nuestro sitio</li>
                <li>Personalizar su experiencia</li>
                <li>Recordar sus preferencias</li>
                <li>Proporcionar contenido relevante</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Tipos de cookies que utilizamos</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies Esenciales</h3>
                <p className="text-gray-300">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies de Análisis</h3>
                <p className="text-gray-300">
                  Nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio web, proporcionando
                  información sobre las páginas visitadas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies de Funcionalidad</h3>
                <p className="text-gray-300">
                  Permiten que el sitio web recuerde las elecciones que hace y proporcione funcionalidades mejoradas y
                  personalizadas.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Gestión de cookies</h2>
              <p className="text-gray-300 mb-4">
                Puede controlar y/o eliminar cookies como desee. Puede eliminar todas las cookies que ya están en su
                computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.
              </p>
              <p className="text-gray-300">
                Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que
                visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-gray-300">
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos a través de nuestro sitio web.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-yellow-500/20">
              <p>Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long" })}</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
