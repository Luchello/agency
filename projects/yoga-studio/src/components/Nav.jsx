import { useEffect, useState } from 'react'

const linkBase =
  'min-h-[44px] inline-flex items-center text-sm text-white/75 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black'

const links = [
  { href: '#classes', label: '클래스' },
  { href: '#instructors', label: '강사' },
  { href: '#schedule', label: '시간표/가격' },
  { href: '#location', label: '위치' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-[1160px] items-center justify-between gap-2 px-4 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="min-h-[44px] inline-flex items-center gap-2 rounded-full bg-black/35 px-4 ring-1 ring-white/15 backdrop-blur-md"
          aria-label="세레니티 요가 홈"
          onClick={() => setOpen(false)}
        >
          <span className="font-[Playfair_Display] text-lg tracking-tight text-white">세레니티</span>
          <span className="text-xs tracking-wide text-white/70">요가</span>
        </a>

        <nav className="hidden items-center gap-6 rounded-full bg-black/35 px-5 py-2 ring-1 ring-white/15 backdrop-blur-md md:flex">
          {links.map((l) => (
            <a key={l.href} className={linkBase} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#location"
            className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-[color:var(--lavender)] px-5 text-sm font-medium text-[color:var(--ink)] shadow-[0_16px_55px_rgba(196,181,253,.18)] transition hover:translate-y-[-1px]"
            onClick={() => setOpen(false)}
          >
            크몽에서 상담하기
          </a>

          <button
            type="button"
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-black/35 ring-1 ring-white/15 backdrop-blur-md"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-5 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto md:hidden">
          <div className="mx-auto max-w-[1160px] px-4 pb-4">
            <div className="grid gap-2 rounded-2xl bg-black/40 p-2 ring-1 ring-white/15 backdrop-blur-md">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] flex items-center justify-between rounded-xl px-4 text-base text-white/90"
                >
                  {l.label}
                  <span aria-hidden className="text-white/70">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
