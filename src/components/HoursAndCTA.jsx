import { ArrowRight, Clock } from 'lucide-react'

export default function HoursAndCTA() {
  return (
    <section id="contacto" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-16">
        <div>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-brand">
            Horário
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-[#1e1e2a] bg-[#111118] px-8 py-10">
              <Clock className="text-brand" size={32} strokeWidth={1.5} />
              <div className="text-center">
                <p className="text-sm text-[#8b8b9a]">Segunda a Sexta</p>
                <p className="font-display text-4xl font-black text-white">07H — 23H</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-[#1e1e2a] bg-[#111118] px-8 py-10">
              <Clock className="text-brand" size={32} strokeWidth={1.5} />
              <div className="text-center">
                <p className="text-sm text-[#8b8b9a]">Sábado</p>
                <p className="font-display text-4xl font-black text-white">07H — 13H</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/20 via-[#111118] to-[#0a0a0f] px-8 py-16 text-center lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/20 blur-3xl" />

          <h2 className="relative mb-4 font-display text-4xl font-black uppercase italic text-white sm:text-5xl lg:text-6xl">
            Você merece o <span className="text-brand">melhor</span>
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-base text-[#8b8b9a] lg:text-lg">
            Dê o primeiro passo rumo à sua melhor versão. Agende sua avaliação gratuita e descubra como a ciência do movimento pode transformar sua saúde e qualidade de vida.
          </p>
          <a
            href="https://wa.me/5551997316338?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o!"
            className="relative inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(0,123,255,0.45)] transition hover:bg-[#0056b3]"
          >
            Agendar avaliação gratuita
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
