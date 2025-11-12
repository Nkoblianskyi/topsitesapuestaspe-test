import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { GuideSection } from "@/components/guide-section"
import { SecuritySection } from "@/components/security-section"
import { TopChoiceSection } from "@/components/top-choice-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopCasinoPopup } from "@/components/top-casino-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      <Header />
      <HeroSection />
      <div id="rankings">
        <RankingsSection />
      </div>
      <div id="guia">
        <GuideSection />
      </div>
      <SecuritySection />
      <TopChoiceSection />
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />

      {/* Interactive Elements */}
      <CookieBanner />
      <TopCasinoPopup />
    </div>
  )
}
