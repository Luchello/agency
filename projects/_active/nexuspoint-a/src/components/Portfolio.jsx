import { Wheat, Heart, Coffee, Sparkles, Smile } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const portfolioItems = [
  { name: '블룸 베이커리', type: '베이커리', url: 'https://bloom-bakery.vercel.app', icon: Wheat, gradient: 'from-orange-100 to-amber-50', iconColor: 'text-orange-500', desc: '따뜻한 빵 향기가 느껴지는 감성 베이커리 사이트' },
  { name: '세레니티 요가', type: '요가 스튜디오', url: 'https://yoga-studio-swart.vercel.app', icon: Heart, gradient: 'from-purple-100 to-lavender-50', iconColor: 'text-purple-500', desc: '마음의 평화를 전하는 요가 스튜디오' },
  // removed: daesung-mortar-v2 (separate business site)
  { name: '카페 온도', type: '카페', url: 'https://cafe-taupe-ten.vercel.app', icon: Coffee, gradient: 'from-amber-100 to-orange-50', iconColor: 'text-amber-700', desc: '적정 온도의 커피와 공간을 소개하는 카페' },
  { name: '라뮤르 네일', type: '네일살롱', url: 'https://nail-salon-lake.vercel.app', icon: Sparkles, gradient: 'from-pink-100 to-rose-50', iconColor: 'text-pink-500', desc: '세련된 감각의 프리미엄 네일살롱' },
  { name: '미소플러스 치과', type: '치과', url: 'https://dental-clinic-beta-drab.vercel.app', icon: Smile, gradient: 'from-cyan-100 to-mint-50', iconColor: 'text-cyan-600', desc: '건강한 미소를 만드는 치과 클리닉' },
]

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="portfolio" className="py-20 md:py-28 px-6 bg-warm-white">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">이런 사이트를 만들었어요</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream/50 rounded-2xl p-6 border border-cream-dark/30 hover:shadow-xl hover:shadow-coral/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif text-xl font-semibold text-charcoal group-hover:text-coral transition-colors">{item.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-coral/10 text-coral rounded-full">{item.type}</span>
                </div>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-coral text-sm font-medium flex items-center gap-1">
                  사이트 보기
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
