const clients = [
  {
    name: 'Atletas & Público Geral',
    label: 'Performance específica aos seus objetivos, preparação para testes de aptidão física (TAF) e prevenção de lesões',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
  {
    name: 'Populações especiais',
    label: 'Treinamento direcionado, respeitando suas limitações. Seja patologias, lesões ou falta de condicionamento',
    image:
      '/images/populacoes-especiais.jpg',
  },
  {
    name: 'Terceira idade & Qualidade de Vida',
    label: 'Longevidade, força funcional e recuperação de lesão com segurança.',
    image:
      'https://plus.unsplash.com/premium_photo-1661284839497-394d5a44f31f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Results() {
  return (
    <section id="resultados" className="section-border px-5 py-20 lg:px-8 lg:py-28 bg-[#111118]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Resultados
          </p>
          <h2 className="font-display text-3xl font-black uppercase italic leading-tight text-white sm:text-4xl lg:text-5xl">
            Resultados reais para necessidades reais
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="group overflow-hidden rounded-2xl border border-[#1e1e2a] bg-[#111118]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={client.image}
                  alt={`${client.name} com treino personalizado e acompanhamento especializado`}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xl font-bold uppercase italic text-white">
                    {client.name}
                  </p>
                  <p className="mt-3 max-h-full overflow-visible text-sm leading-relaxed text-[#8b8b9a] opacity-100 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:ease-out md:group-hover:max-h-28 md:group-hover:opacity-100">
                    {client.label}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
