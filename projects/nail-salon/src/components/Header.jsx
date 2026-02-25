export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[color-mix(in_oklab,var(--lamure-bg),white_30%)]/90 backdrop-blur">
      <div className="section-wrap flex items-center justify-between py-3">
        <a href="#home" className="touch-target inline-flex items-center font-serifDisplay text-lg tracking-[0.06em]">
          LA MURE
        </a>
        <nav className="hidden gap-6 text-sm text-[var(--lamure-text2)] md:flex">
          <a href="#about" className="touch-target inline-flex items-center">브랜드</a>
          <a href="#services" className="touch-target inline-flex items-center">서비스</a>
          <a href="#gallery" className="touch-target inline-flex items-center">갤러리</a>
          <a href="#booking" className="touch-target inline-flex items-center">크몽 상담</a>
        </nav>
        <a
          href="#booking"
          className="touch-target inline-flex items-center rounded-full border border-[var(--lamure-accent)] px-4 text-sm font-medium text-[var(--lamure-text)] transition hover:bg-[var(--lamure-accent)]/20"
        >
          크몽에서 상담하기
        </a>
      </div>
    </header>
  )
}
