import { Mail } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2a] px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#inicio" className="shrink-0">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e1e2a] text-[#8b8b9a] transition hover:border-brand/50 hover:text-brand"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/h%C3%A9lder-rodrigues/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e1e2a] text-[#8b8b9a] transition hover:border-brand/50 hover:text-brand"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="mailto:contacto@helder.pt"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e1e2a] text-[#8b8b9a] transition hover:border-brand/50 hover:text-brand"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+351900000000"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1e1e2a] text-[#8b8b9a] transition hover:border-brand/50 hover:text-brand"
            aria-label="Telefone"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-4 text-xs text-[#8b8b9a] sm:flex-row sm:text-left">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Helder Rodrigues. Todos os direitos reservados.
        </p>
        <p className="text-center sm:text-left">
          Made by <a href="https://www.linkedin.com/in/eduardo-braga-38a814148/" target="_blank" rel="noopener noreferrer" className="text-[#8b8b9a] hover:underline">
            eb.co
          </a>
        </p>
      </div>
    </footer>
  )
}
