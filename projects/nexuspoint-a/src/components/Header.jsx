import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['포트폴리오', '#portfolio'],
    ['서비스', '#services'],
    ['프로세스', '#process'],
    ['소개', '#about'],
    ['문의', '#contact'],
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-peach/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold text-coral">NexusPoint</a>
        
        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-charcoal-light hover:text-coral transition-colors text-sm font-medium">
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-coral text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-coral-light transition-colors">
          무료 상담
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-charcoal p-2" aria-label="메뉴">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-cream border-t border-peach/40 px-6 py-4 flex flex-col gap-4">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-charcoal-light hover:text-coral transition-colors font-medium">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-coral text-white px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-coral-light transition-colors">
            무료 상담
          </a>
        </nav>
      )}
    </header>
  )
}
