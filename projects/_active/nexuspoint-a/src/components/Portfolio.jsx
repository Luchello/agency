import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO_ITEMS } from '../constants'
import useReveal from '../hooks/useReveal'

function PortfolioCard({ item, delay = 0 }) {
  const { ref, isVisible } = useReveal({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden border border-cream-dark/30
        hover:shadow-xl hover:-translate-y-1 transition-all duration-500
        ${item.colSpan}
        ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`${item.name} 사이트 보기 (새 창)`}
      >
        {/* 그라데이션 플레이스홀더 */}
        <div className={`w-full bg-gradient-to-br ${item.gradient} aspect-[4/3] relative overflow-hidden`}>
          <div
            className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-40 blur-2xl"
            style={{ background: item.accentColor }}
          />
          <div
            className="absolute bottom-4 left-6 w-24 h-24 rounded-full opacity-20 blur-xl"
            style={{ background: item.accentColor }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-7xl font-serif font-bold opacity-[0.12] select-none"
              style={{ color: item.accentColor }}
            >
              {item.name.slice(0, 1)}
            </span>
          </div>
          {/* 호버 시 외부 링크 아이콘 */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm
            flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
            shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-charcoal" />
          </div>
        </div>

        {/* 카드 텍스트 */}
        <div className="p-5 bg-warm-white">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="inline-block text-xs font-label uppercase tracking-wider
                text-coral bg-coral/8 px-2.5 py-1 rounded-full mb-2">
                {item.type}
              </span>
              <h3 className="font-serif text-lg font-semibold text-charcoal">{item.name}</h3>
              <p className="text-sm text-charcoal-light mt-1 leading-relaxed">{item.desc}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-charcoal-light group-hover:text-coral
              transition-colors flex-shrink-0 mt-1" />
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Portfolio() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="portfolio" className="py-24 px-6 bg-warm-white">
      <div className="max-w-6xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            직접 만든 사이트들
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-xl mx-auto">
            모두 실제 Vercel에 배포된 라이브 사이트입니다. 클릭해서 직접 확인해보세요.
          </p>
        </div>

        {/* 벤토 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <PortfolioCard key={item.name} item={item} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  )
}
