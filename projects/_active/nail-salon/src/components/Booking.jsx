import { useReveal } from '../hooks/useReveal'

export default function Booking() {
  const revealRef = useReveal()

  return (
    <section id="booking" className="bg-[var(--lamure-dark)] py-20 text-white md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <div>
          <p className="text-sm tracking-[0.15em] text-white/65">BOOKING</p>
          <h2 className="mt-3 font-serifDisplay text-4xl leading-tight md:text-5xl">크몽에서 상담하세요</h2>
          <p className="mt-4 max-w-xl text-base text-white/75">
            라뮤르의 시그니처 네일을 가장 편한 시간에 경험해 보세요. 크몽 메시지로 상담 후 진행 방향을 안내해 드립니다.
          </p>
          <a
            href="https://kmong.com/"
            target="_blank"
            rel="noreferrer"
            className="touch-target mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--lamure-accent)] px-6 py-4 text-lg font-semibold text-[var(--lamure-text)] sm:w-auto"
          >
            크몽 메시지로 문의하기
          </a>
        </div>

        <div className="rounded-[var(--radius-md)] border border-white/20 bg-white/5 p-6">
          <p className="text-sm text-white/70">서울 강남구 압구정로 00길 00</p>
          <p className="mt-3 text-lg font-semibold">크몽 메시지 전용</p>
          <p className="mt-1 text-sm text-white/70">화-일 11:00–21:00 · 월요일 휴무</p>
          <p className="mt-4 text-sm text-white/70">외부 연락처 공유 없음</p>
        </div>
      </div>
    </section>
  )
}
