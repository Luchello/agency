import { useState } from 'react'
import { KMONG_URL } from '../constants'

const links = [
  ['포트폴리오', '#portfolio'],
  ['서비스', '#pricing'],
  ['정책 보증', '#policy'],
  ['프로세스', '#process'],
  ['소개', '#about'],
  ['FAQ', '#faq'],
  ['문의', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-warm-white/90 backdrop-blur-md z-50 border-b border-cream-dark/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold text-charcoal tracking-tight">
          Nexus<span className="text-coral">Point</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-charcoal-light hover:text-coral transition-colors">{label}</a>
          ))}
        </div>
        <a href={KMONG_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block px-5 py-2 bg-coral text-white rounded-full text-sm font-medium hover:bg-coral-light transition-colors">
          크몽에서 상담하기
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="메뉴">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-warm-white border-t border-cream-dark/50 px-6 py-4 space-y-3">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block text-charcoal-light hover:text-coral">{label}</a>
          ))}
          <a href={KMONG_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block mt-3 text-center px-5 py-2.5 bg-coral text-white rounded-full font-medium">크몽에서 상담하기</a>
        </div>
      )}
    </nav>
  )
}
