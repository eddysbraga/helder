import { Helmet } from 'react-helmet-async'

/* O endereço real do site. O canonical apontava para helderrodrigues.com — sem o .br —
   que é um site de terceiros, e isso diz ao Google que a versão oficial deste conteúdo
   mora em outro domínio. Fica aqui em uma constante para não voltar a divergir. */
const SITE = 'https://helderrodrigues.com.br'

export default function SEO({
  title = 'Hélder Rodrigues | Treino Personalizado e Performance',
  description = 'Treino personalizado com base científica para performance, força, emagrecimento e qualidade de vida. Descubra um plano estratégico e acompanhado por um especialista.',
  keywords = 'treino personalizado, performance, treino funcional, treino para atletas, treino para emagrecer, Hélder Rodrigues',
  image = '/hero-img.webp',
}) {
  const fullTitle = title.includes('Hélder Rodrigues') ? title : `${title} | Hélder Rodrigues`
  /* og:image precisa ser absoluta: WhatsApp, LinkedIn e Facebook não resolvem caminho
     relativo, e a prévia do link sai sem imagem. */
  const fullImage = image.startsWith('http') ? image : `${SITE}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <link rel="canonical" href={`${SITE}/`} />
    </Helmet>
  )
}
