export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bloom-bakery.webp"
          alt="갓 구운 빵이 가득한 블룸 베이커리"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bb-bg)] via-[var(--bb-bg)]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pb-16 md:px-12 md:pb-24 lg:px-20">
        <p className="mb-4 text-sm tracking-[0.3em] uppercase text-[var(--bb-accent)]">
          Seoul Seongsu-dong, Since 2020
        </p>
        <h1 className="font-serifDisplay text-4xl leading-[1.12] font-light tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          매일 아침,<br />
          <span className="font-medium text-[var(--bb-primary)]">정성</span>을 굽습니다
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[color-mix(in_oklab,var(--bb-text),transparent_25%)] md:text-lg">
          좋은 재료와 느린 발효로 빚어낸 빵 한 조각이<br className="hidden md:inline" />
          당신의 하루를 따뜻하게 만들어 줄 거예요.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex min-h-[44px] items-center gap-3 rounded-full border border-[color-mix(in_oklab,var(--bb-primary),transparent_55%)] bg-white/40 px-5 text-sm font-medium tracking-wide text-[var(--bb-primary)] backdrop-blur transition-colors hover:text-[var(--bb-accent)]"
        >
          오늘의 메뉴 보기
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[color-mix(in_oklab,var(--bb-text),transparent_50%)]">
          <span>Scroll</span>
          <span className="block h-8 w-px animate-pulse bg-[var(--bb-accent)]" />
        </div>
      </div>
    </section>
  )
}
