import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Política de Privacidad</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información que recopilamos</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Recopilamos información que nos proporcionas directamente, como cuando te registras en nuestro sitio, te
                suscribes a nuestro boletín o nos contactas.
              </p>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Nombre y dirección de correo electrónico</li>
                <li>Información de contacto</li>
                <li>Preferencias de comunicación</li>
                <li>Datos de uso del sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo utilizamos tu información</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Utilizamos la información recopilada para:</p>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos contigo sobre actualizaciones y ofertas</li>
                <li>Personalizar tu experiencia</li>
                <li>Analizar y mejorar nuestro sitio web</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protección de datos</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Implementamos medidas de seguridad adecuadas para proteger tu información personal conforme a la Ley de
                Protección de Datos Personales del Perú (Ley N° 29733).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tus derechos</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Tienes derecho a:</p>
              <ul className="text-gray-700 mb-4 list-disc pl-6 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir información incorrecta</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Portabilidad de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Juego responsable</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Promovemos el juego responsable y proporcionamos información sobre recursos de ayuda para problemas
                relacionados con las apuestas. Si tienes problemas con el juego, busca ayuda profesional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este sitio está destinado únicamente a mayores de 18 años y residentes en Perú donde las apuestas en
                línea son legales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos personales, puedes
                contactarnos a través de nuestro sitio web.
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
