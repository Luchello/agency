import Nav from './Nav'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const r = useReveal({ rootMargin: '0px 0px -15% 0px', threshold: 0.18 })

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-black">
      <Nav />

      {/* Full-bleed hero image */}
      <img
        src="/images/hero-yoga.webp"
        alt="세레니티 요가 스튜디오"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,14,20,.88)_0%,rgba(17,14,20,.62)_40%,rgba(17,14,20,.28)_72%,rgba(17,14,20,.08)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.30)_0%,rgba(0,0,0,.00)_45%,rgba(0,0,0,.55)_100%)]" />

      {/* Subtle decorative blob (only 1) */}
      <div
        aria-hidden
        className="blob absolute -left-28 top-24 hidden h-[360px] w-[360px] bg-[color-mix(in_oklab,var(--lavender)_22%,transparent)] opacity-60 blur-[1px] md:block"
        style={{ animation: 'floaty 10s ease-in-out infinite' }}
      />

      <div className="relative mx-auto grid max-w-[1160px] px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
        <div ref={r} className="reveal max-w-[720px]">
          <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs tracking-wide text-white/80 ring-1 ring-white/15 backdrop-blur-sm">
            강남 신사동 · 06:00–22:00
          </p>

          <h1 className="mt-7 font-[Playfair_Display] text-[clamp(38px,7vw,84px)] leading-[0.98] tracking-[-0.04em] text-white">
            호흡 사이,
            <span className="block">고요를 찾다</span>
          </h1>

          <p className="mt-7 max-w-[52ch] text-[16px] leading-relaxed text-white/78">
            세레니티 요가는 번잡함을 덜어낸 프리미엄 요가 스튜디오입니다. 넉넉한 공간, 부드러운 조명,
            그리고 오늘의 몸에 맞춘 수업으로 ‘조용히 좋아지는’ 경험을 제공합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#classes"
              className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[color:var(--ink)] shadow-[0_18px_60px_rgba(0,0,0,.35)] transition hover:translate-y-[-1px]"
            >
              클래스 보기
            </a>
            <a
              href="#schedule"
              className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/15"
            >
              가격/시간표
            </a>
          </div>

          <dl className="mt-12 grid max-w-[560px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              ['소수 정원', '8–12명'],
              ['차분한 환경', '부드러운 조명'],
              ['숙련 강사진', '500h+'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs tracking-wide text-white/65">{k}</dt>
                <dd className="mt-1 font-[Playfair_Display] text-lg tracking-tight text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 h-[120px] w-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.72))]" />
    </section>
  )
}
