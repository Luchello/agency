const tiers = [
  {
    name: 'Basic',
    price: '30만원',
    desc: '심플한 원페이지로 시작하세요',
    features: ['원페이지 랜딩', '모바일 반응형', '1회 수정 포함', '제작 기간 3일'],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '60만원',
    desc: '가장 인기 있는 플랜',
    features: ['다중 섹션 구성', '크몽 상담 동선 연결', 'SEO 최적화', '3회 수정 포함', '제작 기간 5일'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '100만원',
    desc: '완벽한 맞춤 제작',
    features: ['풀 커스텀 디자인', '관리자 기능', '무제한 수정', '유지보수 1개월', '제작 기간 7일'],
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-coral font-medium mb-3 text-sm tracking-wide">SERVICES & PRICING</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">합리적인 가격, 확실한 결과</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 flex flex-col ${
                t.highlight
                  ? 'bg-coral text-white shadow-xl shadow-coral/20 scale-[1.02]'
                  : 'bg-warm-white border border-peach/40 shadow-sm'
              }`}
            >
              <p className={`text-sm font-medium mb-1 ${t.highlight ? 'text-white/80' : 'text-coral'}`}>{t.name}</p>
              <p className={`font-serif text-4xl font-bold mb-2 ${t.highlight ? 'text-white' : 'text-charcoal'}`}>{t.price}</p>
              <p className={`text-sm mb-6 ${t.highlight ? 'text-white/70' : 'text-charcoal-light'}`}>{t.desc}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={t.highlight ? 'text-white' : 'text-coral'}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 rounded-full font-medium transition-colors ${
                  t.highlight
                    ? 'bg-white text-coral hover:bg-cream'
                    : 'bg-coral text-white hover:bg-coral-light'
                }`}
              >
                상담 신청
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
