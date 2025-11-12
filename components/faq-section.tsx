import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Son legales las apuestas deportivas en Perú?",
    answer:
      "Sí, las apuestas deportivas son legales en Perú. El sector está regulado por el Ministerio de Comercio Exterior y Turismo (MINCETUR). Es importante apostar solo en sitios autorizados y que cumplan con las regulaciones peruanas.",
  },
  {
    question: "¿Cómo puedo verificar si un sitio de apuestas es confiable?",
    answer:
      "Verifica que el sitio tenga licencia operativa, consulta las opiniones de otros usuarios, revisa sus métodos de pago y atención al cliente. Todos los sitios que recomendamos han sido evaluados por confiabilidad y seguridad.",
  },
  {
    question: "¿Qué métodos de pago puedo usar en Perú?",
    answer:
      "Los sitios de apuestas en Perú ofrecen varios métodos: tarjetas de crédito/débito, transferencias bancarias locales, billeteras digitales como Yape, Plin, y otros medios electrónicos. Los depósitos suelen ser instantáneos.",
  },
  {
    question: "¿Cuánto tiempo tardan los retiros?",
    answer:
      "Los tiempos varían según el método: billeteras digitales (0-24 horas), tarjetas (1-3 días), transferencias bancarias (1-5 días). Los sitios confiables procesan los retiros dentro de plazos razonables y transparentes.",
  },
  {
    question: "¿Puedo apostar desde mi celular?",
    answer:
      "Sí, todos los sitios modernos tienen versiones móviles optimizadas o aplicaciones dedicadas. Puedes apostar desde cualquier smartphone o tablet con conexión a internet de forma segura.",
  },
  {
    question: "¿Cómo funcionan los bonos de bienvenida?",
    answer:
      "Los bonos de bienvenida son ofertas para nuevos usuarios, generalmente matching del primer depósito. Siempre tienen requisitos de apuesta que debes cumplir antes de retirar las ganancias. Lee los términos y condiciones cuidadosamente.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-amber-50/30 py-3">
      <div className="max-w-4xl mx-auto px-3">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-red-600/30">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-red-200 bg-red-50/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-slate-900 hover:text-red-600 font-semibold text-xs">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
