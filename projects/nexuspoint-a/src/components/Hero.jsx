import useScrollAnimation from '../hooks/useScrollAnimation'
import { KMONG_URL } from '../constants'

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/85 via-warm-white/70 to-cream/90" />
      </div>
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-coral font-medium text-sm tracking-widest uppercase mb-4">AI-Powered Web Agency</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-charcoal leading-tight mb-6">
          당신의 비즈니스에<br />
          <span className="text-coral">딱 맞는 웹사이트</span>를 만들어요
        </h1>
        <p className="text-charcoal-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          신뢰할 수 있는 프로세스로 정확하게, 실행은 빠르게, 결과는 프리미엄으로.<br className="hidden md:block" />
          소상공인부터 1인 사업자까지 비즈니스에 맞춘 전환형 웹사이트를 만듭니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={KMONG_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-coral text-white rounded-full text-lg font-medium hover:bg-coral-light transition-colors shadow-lg shadow-coral/20">
            크몽에서 맞춤 상담 시작하기
          </a>
          <a href="#portfolio" className="px-8 py-3.5 border-2 border-coral/30 text-coral rounded-full text-lg font-medium hover:bg-coral/5 transition-colors">
            실제 제작 사례 확인하기
          </a>
        </div>
      </div>
    </section>
  )
}
