import { ArrowRight, MessageSquare, FileCheck, Rocket } from 'lucide-react'
import { KMONG_URL } from '../constants'
import useReveal from '../hooks/useReveal'

const STEPS = [
  { icon: MessageSquare, label: '크몽 메시지 문의' },
  { icon: FileCheck, label: '견적 & 일정 확정' },
  { icon: Rocket, label: '제작 시작' },
]

export default function Contact() {
  const { ref, isVisible } = useReveal()

  return (
    <section id="contact" className="py-24 px-6 bg-warm-white">
      <div className="max-w-3xl mx-auto">

        <div
          ref={ref}
          className={`rounded-3xl overflow-hidden
            ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{
            background: 'linear-gradient(135deg, var(--color-coral) 0%, #C85D47 100%)',
          }}
        >
          <div className="px-8 py-14 md:px-14 text-center">

            {/* 프로모션 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-white/20 border border-white/30 text-white/90 text-sm font-medium mb-6">
              선착순 5건 · 30만원부터
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 max-w-md mx-auto">
              상담과 결제는 크몽 플랫폼을 통해서만 진행합니다.
              개인정보 수집 폼 없이 안전하게 거래할 수 있습니다.
            </p>

            {/* 3단계 프로세스 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full
                      bg-white/15 border border-white/25">
                      <Icon className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white font-medium whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/50 hidden sm:block" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* CTA 버튼 */}
            <a
              href={KMONG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full
                bg-white text-coral font-semibold px-8 py-4
                hover:bg-cream hover:-translate-y-0.5 transition-all duration-300
                shadow-xl shadow-black/20"
            >
              크몽에서 맞춤 상담 시작하기
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-white/55 text-xs mt-6">
              외부 연락처 · 외부 결제 · 개인정보 수집 없음
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
