import { ArrowRight, Shield, Clock, CreditCard } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { KMONG_URL } from '../constants'
import FilmGrain from './FilmGrain'

export default function Hero() {
  const { ref, isVisible } = useReveal()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/90 via-warm-white/75 to-cream/85" />
      </div>

      <FilmGrain opacity={0.04} />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-20 max-w-4xl mx-auto text-center px-5 sm:px-6 py-20"
      >
        {/* Promo badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral/10 border border-coral/25 text-coral text-sm font-medium mb-5 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span aria-hidden="true">🎉</span>
          선착순 5건 · 30만원부터
        </div>

        {/* Eyebrow */}
        <p
          className={`font-label text-xs tracking-[0.25em] uppercase text-charcoal-light mb-4 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '100ms' }}
        >
          AI-Powered Web Agency
        </p>

        {/* H1 */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-5 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '200ms' }}
        >
          사장님과 고객님의
          <br />
          <span className="text-coral">연결지점</span>을 만듭니다
        </h1>

        {/* Subtext */}
        <p
          className={`text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-8 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '300ms' }}
        >
          보기 좋은 홈페이지가 아닌, 실제 문의와 매출로 이어지는 전환형 웹사이트를 만듭니다.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href={KMONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral text-white px-8 py-4 font-semibold shadow-lg shadow-coral/25 hover:bg-coral-light hover:-translate-y-0.5 transition-all"
          >
            크몽에서 맞춤 상담 시작하기
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/20 text-charcoal px-8 py-4 font-medium hover:border-coral hover:text-coral transition-all"
          >
            포트폴리오 먼저 보기
          </a>
        </div>

        {/* Trust badges */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <span className="text-xs text-charcoal-light flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            크몽 안전결제
          </span>
          <span className="text-xs text-charcoal-light flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            평균 3~7일 납품
          </span>
          <span className="text-xs text-charcoal-light flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5" />
            30만원부터 시작
          </span>
        </div>
      </div>
    </section>
  )
}
