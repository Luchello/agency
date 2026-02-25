import { useEffect, useState } from 'react'

const navItems = ['Story', 'Menu', 'Gallery', 'Visit']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const onNavClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[var(--bb-bg)]/92 backdrop-blur-md shadow-[0_1px_0_color-mix(in_oklab,var(--bb-text),transparent_90%)]'
          : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-12 md:py-4">
        <a
          href="#"
          className="min-h-[44px] inline-flex items-center font-serifDisplay text-lg tracking-wide"
          aria-label="Bloom Bakery Home"
        >
          Bloom
        </a>

        <ul className="hidden items-center gap-8 text-xs tracking-[0.15em] uppercase md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="min-h-[44px] inline-flex items-center px-2 text-[color-mix(in_oklab,var(--bb-text),transparent_30%)] transition-colors hover:text-[var(--bb-primary)]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://kmong.com/" target="_blank" rel="noreferrer"
            className="min-h-[44px] inline-flex items-center rounded-full px-3 text-[13px] tracking-wide text-[var(--bb-primary)] transition-colors hover:text-[var(--bb-accent)]"
          >
            크몽 상담
          </a>

          <button
            type="button"
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--bb-text),transparent_82%)] bg-white/40 backdrop-blur-sm"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-[var(--bb-text)] transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-[var(--bb-text)] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-5 bg-[var(--bb-text)] transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4">
            <ul className="grid gap-2 rounded-2xl border border-[color-mix(in_oklab,var(--bb-text),transparent_86%)] bg-white/60 p-2 backdrop-blur">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={onNavClick}
                    className="min-h-[44px] flex items-center justify-between rounded-xl px-4 text-sm font-medium text-[color-mix(in_oklab,var(--bb-text),transparent_18%)]"
                  >
                    {item}
                    <span aria-hidden className="text-[var(--bb-primary)]">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
