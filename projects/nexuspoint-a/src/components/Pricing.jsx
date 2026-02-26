import useScrollAnimation from '../hooks/useScrollAnimation'
import { KMONG_URL } from '../constants'

const pricingPlans = [
  {
    name: 'Basic',
    price: '30만원',
    desc: '심플하게 시작하기',
    features: ['원페이지 랜딩', '모바일 반응형', '기본 SEO', '1회 수정 포함', '3일 내 납품'],
    accent: false,
  },
  {
    name: 'Standard',
    price: '60만원',
    desc: '가장 인기 있는 선택',
    features: ['다중 섹션 구성', '크몽 상담 동선 연결', 'SEO 최적화', '3회 수정 포함', '5일 내 납품', '구글 애널리틱스'],
    accent: true,
  },
  {
    name: 'Premium',
    price: '100만원',
    desc: '비즈니스의 얼굴',
    features: ['풀 커스텀 디자인', '관리자 기능', '무제한 수정', '7일 내 납품', '유지보수 1개월', '성능 최적화'],
    accent: false,
  },
]

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-cream/40">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">합리적인 가격, 확실한 퀄리티</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.accent
                  ? 'bg-coral text-white shadow-xl shadow-coral/20 ring-2 ring-coral'
                  : 'bg-white border border-cream-dark/50 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`font-serif text-2xl font-bold ${plan.accent ? 'text-white' : 'text-charcoal'}`}>{plan.name}</h3>
                {plan.accent && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30">가장 많이 선택</span>
                )}
              </div>
              <p className={`text-sm mb-5 ${plan.accent ? 'text-white/80' : 'text-charcoal-light'}`}>{plan.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.accent ? 'text-white' : 'text-charcoal'}`}>{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.accent ? 'text-white/70' : 'text-charcoal-light'}`}>~</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.accent ? 'text-white' : 'text-coral'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.accent ? 'text-white/90' : 'text-charcoal-light'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={KMONG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-medium transition-colors ${
                  plan.accent
                    ? 'bg-white text-coral hover:bg-cream'
                    : 'bg-coral/10 text-coral hover:bg-coral hover:text-white'
                }`}
              >
                크몽에서 상담하기
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
