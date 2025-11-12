import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Información que recopilamos</h2>
              <p className="text-gray-300 mb-4">
                Recopilamos información que nos proporciona directamente, como cuando se registra en nuestro sitio, se
                suscribe a nuestro boletín o nos contacta.
              </p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Nombre y dirección de correo electrónico</li>
                <li>Información de contacto</li>
                <li>Preferencias de comunicación</li>
                <li>Datos de uso del sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cómo utilizamos su información</h2>
              <p className="text-gray-300 mb-4">Utilizamos la información recopilada para:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre actualizaciones y ofertas</li>
                <li>Personalizar su experiencia</li>
                <li>Analizar y mejorar nuestro sitio web</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Compartir información</h2>
              <p className="text-gray-300 mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales,
                excepto como se describe en esta política.
              </p>
              <p className="text-gray-300">
                Podemos compartir información con socios de confianza que nos ayudan a operar nuestro sitio web y
                proporcionar servicios, siempre que acepten mantener esta información confidencial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Seguridad de los datos</h2>
              <p className="text-gray-300 mb-4">
                Implementamos medidas de seguridad adecuadas para proteger su información personal contra acceso no
                autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Sus derechos</h2>
              <p className="text-gray-300 mb-4">Tiene derecho a:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Acceder a su información personal</li>
                <li>Corregir información incorrecta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Juego responsable</h2>
              <p className="text-gray-300 mb-4">
                Promovemos el juego responsable y proporcionamos información sobre recursos de ayuda para problemas
                relacionados con el juego. Si tiene problemas con el juego, busque ayuda profesional.
              </p>
              <p className="text-gray-300">
                Este sitio está destinado solo para mayores de 18 años y residentes en Perú donde el juego en línea es
                legal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-gray-300">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo tratamos sus datos personales, puede
                contactarnos a través de nuestro sitio web.
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
