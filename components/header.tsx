"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-950 via-red-950/20 to-slate-950 backdrop-blur-lg shadow-lg border-b border-red-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center md:justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-bold">
              <span className="text-white">TopSites</span>
              <span className="text-red-500">Apuestas</span>
              <span className="text-yellow-500">PE</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#rankings" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Rankings
            </Link>
            <Link href="/#guia" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Guía
            </Link>
            <Link href="/#faq" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
