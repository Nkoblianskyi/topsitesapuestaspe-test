import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-1">
      <div className="max-w-6xl mx-auto px-0">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border-2 border-red-200 px-2 py-2.5 shadow-lg">
          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.rank} casino={casino} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
