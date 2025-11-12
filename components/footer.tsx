import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-red-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">
                <span className="text-white">TopSites</span>
                <span className="text-yellow-500">Apuestas</span>
                <span className="text-red-500">PE</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-xs">
              Tu guía confiable para las mejores casas de apuestas deportivas en Perú. Análisis imparciales, bonos
              exclusivos e información actualizada para una experiencia de apuestas segura.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mt-2 font-semibold">Juega con responsabilidad. +18 años.</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/#rankings" className="hover:text-yellow-400 transition-colors">
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/#guia" className="hover:text-yellow-400 transition-colors">
                  Guía
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/politica-privacidad" className="hover:text-yellow-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link href="/juego-responsable" className="hover:text-yellow-400 transition-colors">
                  Juego Responsable
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/20 mt-8 pt-8">
          <div className="mb-6">
            <h5 className="text-white font-semibold mb-4 text-center">Juego Responsable y Regulación</h5>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Link
                href="https://www.gob.pe/mincetur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white p-2 rounded"
              >
                <Image src="/mincetur.svg" alt="Mincetur" width={100} height={100} />
              </Link>
              <Link
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white p-2 rounded"
              >
                <Image src="/gamecare.svg" alt="Gamcare" width={100} height={100} />
              </Link>
              <Link
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity bg-white p-2 rounded"
              >
                <Image src="/gamble.webp" alt="Begambleaware" width={100} height={100} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8">
          <p className="mb-4 text-xs">
            Este sitio contiene enlaces de afiliados. Podemos recibir comisiones cuando haces clic en estos enlaces.
            Esto no afecta nuestros análisis o rankings.
          </p>
          <p>© 2025 topsitesapuestaspe.com - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
