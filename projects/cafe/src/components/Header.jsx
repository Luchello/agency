import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

const links = [
  { href: '#philosophy', label: '철학' },
  { href: '#menu', label: '메뉴' },
  { href: '#space', label: '공간' },
  { href: '#origin', label: '산지' },
  { href: '#reviews', label: '리뷰' },
  { href: '#visit', label: '방문' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'px-4 sm:px-6',
        'pt-[max(env(safe-area-inset-top),12px)]',
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl',
          'rounded-full border',
          scrolled ? 'border-[var(--ondo-border)] bg-white/70 shadow-[0_12px_40px_rgba(44,36,32,0.10)] backdrop-blur' : 'border-transparent bg-transparent',
        )}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="group inline-flex min-h-11 items-center gap-2">
            <span className="font-serifDisplay text-[18px] leading-none text-[var(--ondo-text)]">ONDO</span>
            <span className="hidden sm:inline text-[12px] text-[var(--ondo-text2)]">온도</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  'min-h-11 px-3 inline-flex items-center rounded-full text-[13px] text-[var(--ondo-text2)]',
                  'hover:text-[var(--ondo-text)] hover:bg-[color-mix(in_oklab,var(--ondo-accent),transparent_90%)]',
                  'transition-colors',
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#menu"
              className={cn(
                'min-h-11 px-4 inline-flex items-center justify-center rounded-full border border-[var(--ondo-border)]',
                'bg-white/60 hover:bg-white text-[13px] text-[var(--ondo-text)]',
                'transition-colors',
              )}
            >
              메뉴
            </a>
            <a
              href="#visit"
              className={cn(
                'min-h-11 px-4 inline-flex items-center justify-center rounded-full',
                'bg-[var(--ondo-text)] text-[var(--ondo-bg)] text-[13px]',
                'hover:bg-[color-mix(in_oklab,var(--ondo-text),black_10%)]',
                'transition-colors',
              )}
            >
              크몽 상담
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
