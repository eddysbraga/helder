import { Award, GraduationCap, HeartPulse, Target } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    title: 'Formação Avançada',
    desc: 'Especialização em ciências do exercício e reabilitação.',
  },
  {
    icon: Award,
    title: 'Certificações',
    desc: 'Credenciais internacionais em treino de performance.',
  },
  {
    icon: HeartPulse,
    title: 'Avaliação Física',
    desc: 'Análise completa de movimento e condição física.',
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    desc: 'Planos individualizados com metas mensuráveis.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Sobre
          </p>
          <h2 className="font-display text-4xl font-black uppercase italic leading-tight text-white lg:text-5xl">
            Hélder <br />
            <span className="text-brand">Rodrigues</span>
          </h2>
          <p className="text-base leading-relaxed text-[#8b8b9a] lg:text-lg">
            Personal trainer e especialista em treinamento individualizado com mais de uma década de experiência. Combino ciência do movimento, monitoramento através de tecnologia baseado em dados reais e acompanhamento próximo para transformar objetivos em resultados concretos — seja performance esportiva, reabilitação ou bem-estar geral.
          </p>
          <p className="text-base leading-relaxed text-[#8b8b9a]">
            Cada programa é construído à medida, com avaliações periódicas e
            ajustes contínuos para garantir progresso sustentável e seguro.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="w-full text-xs font-medium uppercase tracking-widest text-[#8b8b9a]">Instituições parceiras</p>
            <span className="rounded-full border border-[#343a3e] bg-[#111418] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              IFSO
            </span>
            <span className="rounded-full border border-[#343a3e] bg-[#111418] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              IFSOLAC
            </span>
            <span className="rounded-full border border-[#343a3e] bg-[#111418] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              SBCBM
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6 transition hover:border-brand/30 hover:bg-[#16161f]"
            >
              <item.icon className="mb-4 text-brand" size={28} strokeWidth={1.5} />
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#8b8b9a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
