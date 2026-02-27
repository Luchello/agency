import { Check, Zap } from 'lucide-react'
import { KMONG_URL, PRICING_PLANS, EXPRESS_ADDON, ADDON_PRICING } from '../constants'
import useReveal from '../hooks/useReveal'

export default function Pricing() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="pricing" className="py-24 px-6 bg-cream/40">
      <div className="max-w-5xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-14 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            Services & Pricing
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            투명한 가격 체계
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-xl mx-auto">
            숨겨진 비용 없이 처음부터 명확하게. 모든 상담과 결제는 크몽을 통해 진행됩니다.
          </p>
        </div>

        {/* 3개 가격 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${isVisible ? 'reveal-visible' : 'reveal-hidden'}
                ${plan.highlight
                  ? 'bg-coral text-white shadow-xl shadow-coral/25 ring-2 ring-coral'
                  : 'bg-warm-white border border-cream-dark/40'
                }`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-charcoal text-warm-white text-xs font-label px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className={`font-label text-sm uppercase tracking-widest mb-1
                  ${plan.highlight ? 'text-white/70' : 'text-charcoal-light'}`}>
                  {plan.name}
                </h3>
                <p className={`font-serif text-3xl font-bold
                  ${plan.highlight ? 'text-white' : 'text-charcoal'}`}>
                  {plan.price}
                </p>
                <p className={`text-sm mt-1
                  ${plan.highlight ? 'text-white/75' : 'text-charcoal-light'}`}>
                  {plan.duration}
                </p>
                <p className={`text-sm mt-2 font-medium
                  ${plan.highlight ? 'text-white/90' : 'text-charcoal'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5
                      ${plan.highlight ? 'text-white/80' : 'text-accent-green'}`} />
                    <span className={`text-sm
                      ${plan.highlight ? 'text-white/85' : 'text-charcoal-light'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={KMONG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-full py-3 text-sm font-semibold
                  transition-all hover:-translate-y-0.5
                  ${plan.highlight
                    ? 'bg-white text-coral hover:bg-cream shadow-md'
                    : 'bg-coral text-white hover:bg-coral-light shadow-sm shadow-coral/20'
                  }`}
              >
                크몽에서 상담하기
              </a>
            </div>
          ))}
        </div>

        {/* Express 옵션 */}
        <div
          className={`rounded-2xl border border-coral/25 bg-coral/5 p-6
            flex flex-col sm:flex-row items-center justify-between gap-4
            ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-coral" />
            </div>
            <div>
              <p className="font-semibold text-charcoal">
                {EXPRESS_ADDON.name} — {EXPRESS_ADDON.price}
              </p>
              <p className="text-sm text-charcoal-light mt-0.5">{EXPRESS_ADDON.desc}</p>
            </div>
          </div>
          <a
            href={KMONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-coral text-white text-sm px-5 py-2.5
              font-medium hover:bg-coral-light transition-colors"
          >
            급행 문의하기
          </a>
        </div>

        {/* 추가 기능 가격표 */}
        <div
          className={`mt-10 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <p className="text-center font-label text-xs uppercase tracking-[0.2em] text-charcoal-light mb-5">
            Add-on Options
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {ADDON_PRICING.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-4 py-3
                  rounded-xl bg-warm-white border border-cream-dark/40"
              >
                <span className="text-sm text-charcoal">{addon.name}</span>
                <span className="text-sm font-semibold text-coral ml-4 whitespace-nowrap">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
