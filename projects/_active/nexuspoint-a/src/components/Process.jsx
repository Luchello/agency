import { MessageCircle, FileText, Shield, Zap, CheckSquare, Rocket, LifeBuoy } from 'lucide-react'
import { PROCESS_STEPS } from '../constants'
import useReveal from '../hooks/useReveal'

const ICON_MAP = { MessageCircle, FileText, Shield, Zap, CheckSquare, Rocket, LifeBuoy }

export default function Process() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="process" className="py-24 px-6 bg-warm-white relative overflow-hidden">
      {/* 배경 이미지 + 오버레이 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: 'url(/images/process-bg.webp)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            이렇게 진행됩니다
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-xl mx-auto">
            접수부터 납품, 후속 관리까지 7단계 체계적 프로세스로 진행합니다.
          </p>
        </div>

        {/* 데스크탑: 가로 타임라인 */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-2">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || Zap
            return (
              <div
                key={step.step}
                className={`relative flex flex-col items-center text-center
                  ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                style={{ transitionDelay: `${i * 80 + 150}ms` }}
              >
                {/* 연결선 */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+20px)] right-[-50%]
                    h-px bg-cream-dark/60 z-0" aria-hidden="true" />
                )}

                {/* 아이콘 원형 */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-cream border-2 border-cream-dark/40
                  flex items-center justify-center mb-3 shadow-sm">
                  <Icon className="w-5 h-5 text-coral" />
                </div>

                {/* 단계 번호 */}
                <span className="font-label text-xs text-coral font-semibold tracking-wider mb-1">
                  {step.step}
                </span>
                <h3 className="font-semibold text-charcoal text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* 모바일/태블릿: 세로 타임라인 */}
        <div className="lg:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || Zap
            return (
              <div
                key={step.step}
                className={`relative flex gap-5 pb-8 last:pb-0
                  ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                style={{ transitionDelay: `${i * 60 + 150}ms` }}
              >
                {/* 세로 연결선 */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-cream-dark/50"
                    aria-hidden="true" />
                )}

                {/* 아이콘 */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-cream border-2 border-cream-dark/40
                  flex items-center justify-center shadow-sm z-10">
                  <Icon className="w-5 h-5 text-coral" />
                </div>

                {/* 텍스트 */}
                <div className="pt-1.5">
                  <span className="font-label text-xs text-coral font-semibold tracking-wider">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-charcoal mt-0.5">{step.title}</h3>
                  <p className="text-sm text-charcoal-light mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
