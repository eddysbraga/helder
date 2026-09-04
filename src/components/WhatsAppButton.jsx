import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

/* O data-cta identifica a porta de entrada na medição: este botão não tem texto, só
   ícone, então sem ele o clique chega indistinguível do CTA do fim da página. */
export default function WhatsAppButton({ phone = '5511999999999', message = 'Olá! Gostaria de saber mais.' }) {
  const href = `https://wa.me/5551997316338?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o!`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      data-cta="whatsapp-flutuante"
      className="fixed right-6 bottom-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-105 transform transition-transform"
    >
      <FaWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  )
}
