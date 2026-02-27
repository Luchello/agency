import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/cn'

export default function Hero() {
  const r1 = useReveal()
  const r2 = useReveal({ margin: '-5% 0px -10% 0px' })

  return (
    <section id="top" className="relative min-h-[100svh]">
      <div className="absolute inset-0">
        <div
          className={cn('h-full w-full bg-cover bg-center')}
          style={{ backgroundImage: "url('/images/hero-cafe.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,36,32,0.78)] via-[rgba(44,36,32,0.20)] to-transparent" />
        <div className="absolute inset-0 ondo-grain" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
        <div ref={r1} className="ondo-reveal">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] text-white/85 backdrop-blur">
            <span className="font-label">Since 2019</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="font-label">Seoul Seongsu</span>
          </div>

          <h1 className="mt-5 font-serifDisplay text-[42px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[58px]">
            적정 온도의
            <br />
            커피와 시간
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-white/80 sm:text-[18px]">
            슬로우 로스팅과 싱글 오리진, 핸드드립으로 완성되는 한 잔.
            온도는 빠르게 소비되는 하루 사이에, 잠시 멈출 수 있는 밀도를 만듭니다.
          </p>
        </div>

        <div ref={r2} className="ondo-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#menu"
            className={cn(
              'min-h-11 inline-flex items-center justify-center rounded-full px-5',
              'bg-[var(--ondo-bg)] text-[var(--ondo-text)]',
              'shadow-[0_14px_50px_rgba(0,0,0,0.22)]',
              'hover:bg-white transition-colors',
            )}
          >
            메뉴 보기
          </a>
          <a
            href="#visit"
            className={cn(
              'min-h-11 inline-flex items-center justify-center rounded-full px-5',
              'border border-white/30 bg-white/10 text-white backdrop-blur',
              'hover:bg-white/15 transition-colors',
            )}
          >
            크몽 메시지로 문의하기
          </a>

          <div className="mt-6 sm:mt-0 sm:ml-auto flex items-center gap-3">
            <div className="h-px w-10 bg-white/25" />
            <p className="text-[12px] text-white/70">
              매일 09:00–22:00 · 성수동
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
