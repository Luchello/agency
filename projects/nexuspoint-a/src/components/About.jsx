import useScrollAnimation from '../hooks/useScrollAnimation'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-cream/40">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">About</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">왜 연결지점은 NexusPoint일까요?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: '/images/about-speed.webp', title: '빠른 제작', desc: 'AI 기술을 활용해 3~7일 안에 완성해요. 빠르다고 대충이 아니에요.' },
            { img: '/images/about-value.webp', title: '합리적 가격', desc: '기존 에이전시 대비 50~70% 저렴해요. AI가 효율을 만들어요.' },
            { img: '/images/about-quality.webp', title: '프리미엄 퀄리티', desc: '템플릿 복붙이 아닌 맞춤 디자인. 디테일까지 신경 써요.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl overflow-hidden border border-cream-dark/30 hover:shadow-lg transition-shadow">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 border border-cream-dark/30 text-center">
          <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold text-charcoal">NexusPoint</span>는 AI 기술을 투명하게 활용합니다.
            최신 AI로 효율을 높이고, 그 혜택을 가격으로 돌려드려요.
            기술은 도구일 뿐 — 결과물의 퀄리티가 전부입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
