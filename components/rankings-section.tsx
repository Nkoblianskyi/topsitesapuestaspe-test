import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="py-1">
      <div className="max-w-6xl mx-auto px-0">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-8 border border-red-900/30 px-2 py-2.5">
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
