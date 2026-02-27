import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { KMONG_URL, NAV_LINKS } from '../constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-[calc(100%-2rem)]">
      <div
        className={`rounded-full backdrop-blur-xl px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/95 shadow-xl border border-cream-dark/50'
            : 'bg-warm-white/60 border border-cream-dark/30'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-serif text-xl font-bold text-charcoal tracking-tight">
          Nexus<span className="text-coral">Point</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-7">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-charcoal-light hover:text-coral transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={KMONG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full bg-coral text-white text-sm px-5 py-2 hover:bg-coral-light transition-colors"
        >
          크몽 상담하기
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-warm-white/98 backdrop-blur-xl shadow-2xl border border-cream-dark/30 px-6 py-5 md:hidden">
          <div className="space-y-3">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block text-charcoal-light hover:text-coral transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={KMONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center rounded-full bg-coral text-white px-5 py-2.5 font-medium hover:bg-coral-light transition-colors"
          >
            크몽 상담하기
          </a>
        </div>
      )}
    </nav>
  )
}
