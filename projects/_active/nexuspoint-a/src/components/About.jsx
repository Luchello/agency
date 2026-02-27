import { ShieldCheck, Lock, ReceiptText, Bot } from 'lucide-react'
import { STATS } from '../constants'
import useReveal from '../hooks/useReveal'
import FilmGrain from './FilmGrain'

const POLICIES = [
  {
    icon: ShieldCheck,
    title: '크몽 정책 100% 준수',
    desc: '외부 연락처, 외부 결제, 개인정보 수집 폼을 일절 운영하지 않습니다.',
  },
  {
    icon: Lock,
    title: '개인정보 최소 수집',
    desc: '사이트 방문만으로는 어떤 개인정보도 수집되지 않습니다.',
  },
  {
    icon: ReceiptText,
    title: '투명한 작업 기준',
    desc: '크몽 상품 설명에 명시된 범위 내에서만 작업을 진행합니다.',
  },
]

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal()
  const { ref: aiRef, isVisible: aiVisible } = useReveal({ rootMargin: '0px 0px -40px 0px' })
  const { ref: statsRef, isVisible: statsVisible } = useReveal({ rootMargin: '0px 0px -40px 0px' })
  const { ref: policyRef, isVisible: policyVisible } = useReveal({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--color-dark-bg)' }}
    >
      <FilmGrain opacity={0.05} />

      <div className="relative z-20 max-w-5xl mx-auto">

        {/* 섹션 헤더 */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p className="font-label text-xs tracking-[0.25em] uppercase text-coral mb-3">
            About & Trust
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-text">
            AI 팀이 만듭니다, 당당하게
          </h2>
          <p className="mt-4 leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--color-dark-muted)' }}>
            저희는 AI 활용을 숨기지 않습니다. 오히려 그것이 빠른 납기와 합리적 가격의 비결입니다.
          </p>
        </div>

        {/* AI 투명 정책 */}
        <div
          ref={aiRef}
          className={`rounded-2xl p-8 mb-10 border border-white/10
            ${aiVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ background: 'var(--color-dark-surface)' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-coral" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-dark-text mb-2">
                "AI 팀이 개발합니다"
              </h3>
              <p style={{ color: 'var(--color-dark-muted)' }} className="leading-relaxed text-sm">
                Builder AI가 초안을 생성하고, QA AI가 코드를 검증하며, 전문가가 최종 승인합니다.
                이 프로세스 덕분에 기존 외주 대비 50~70% 저렴한 가격에 3~7일 납품이 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 실적 수치 4개 */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-14
            ${statsVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6 text-center border border-white/8"
              style={{
                background: 'var(--color-dark-surface)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <p className="font-serif text-3xl font-bold text-coral">{stat.value}</p>
              <p className="text-sm font-medium text-dark-text mt-1">{stat.label}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-dark-muted)' }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* 정책 보증 3개 */}
        <div
          ref={policyRef}
          className={`grid md:grid-cols-3 gap-5 ${policyVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {POLICIES.map((policy, i) => {
            const Icon = policy.icon
            return (
              <div
                key={policy.title}
                className="rounded-2xl p-6 border border-white/8"
                style={{
                  background: 'var(--color-dark-surface)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-coral" />
                </div>
                <h3 className="font-semibold text-dark-text mb-2">{policy.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-dark-muted)' }}>
                  {policy.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
