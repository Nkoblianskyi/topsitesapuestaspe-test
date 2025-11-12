"use client"

import { CasinoCard } from "@/components/casino-card"
import { getTopCasino } from "@/lib/casinos"

export function TopChoiceSection() {
  const topCasino = getTopCasino()

  return (
    <section className="py-3">
      <div className="max-w-6xl mx-auto px-4">
        <CasinoCard casino={topCasino} />
      </div>
    </section>
  )
}
