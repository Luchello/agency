import { Check, X } from 'lucide-react'
import { COMPARISON_DATA } from '../constants'
import useReveal from '../hooks/useReveal'

export default function Comparison() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="comparison" className="py-24 px-6 bg-cream/40">
      <div className="max-w-4xl mx-auto">

        {/* 섹션 헤더 */}
        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            Why NexusPoint
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            기존 외주와 비교하면
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-xl mx-auto">
            AI 기반 워크플로우로 속도와 비용, 퀄리티 세 가지를 모두 잡습니다.
          </p>
        </div>

        {/* 비교 테이블 */}
        <div
          className={`rounded-2xl overflow-hidden border border-cream-dark/40 shadow-sm
            ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* 테이블 헤더 */}
          <div className="grid grid-cols-3 bg-warm-white border-b border-cream-dark/40">
            <div className="py-4 px-6 text-sm font-medium text-charcoal-light">항목</div>
            <div className="py-4 px-6 text-sm font-medium text-charcoal-light text-center border-l border-cream-dark/40">
              기존 외주
            </div>
            <div className="py-4 px-6 text-sm font-semibold text-coral text-center
              bg-coral/5 border-l border-coral/20">
              NexusPoint
            </div>
          </div>

          {/* 비교 행 */}
          {COMPARISON_DATA.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-cream-dark/30 last:border-b-0
                ${i % 2 === 0 ? 'bg-warm-white' : 'bg-cream/20'}`}
            >
              {/* 항목명 */}
              <div className="py-4 px-6 text-sm font-medium text-charcoal">
                {row.label}
              </div>

              {/* 기존 외주 */}
              <div className="py-4 px-6 flex items-center justify-center gap-2
                border-l border-cream-dark/30">
                <X className="w-4 h-4 text-charcoal-light/50 flex-shrink-0" />
                <span className="text-sm text-charcoal-light text-center">{row.traditional}</span>
              </div>

              {/* NexusPoint */}
              <div className="py-4 px-6 flex items-center justify-center gap-2
                bg-coral/5 border-l border-coral/20">
                <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                <span className="text-sm font-medium text-charcoal text-center">{row.nexus}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
