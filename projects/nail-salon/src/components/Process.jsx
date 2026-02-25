import { useReveal } from '../hooks/useReveal'

const steps = [
  { title: '상담', desc: '원하는 분위기와 일정, 손톱 상태를 먼저 확인합니다.' },
  { title: '디자인 선택', desc: '컬러와 아트를 조합해 가장 어울리는 방향을 정합니다.' },
  { title: '시술', desc: '손톱 보호를 고려한 정교한 시술로 완성도를 높입니다.' },
  { title: '애프터케어', desc: '유지 기간과 홈케어 방법까지 안내해 드립니다.' },
]

export default function Process() {
  const revealRef = useReveal()

  return (
    <section className="py-20 md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal">
        <p className="text-sm tracking-[0.15em] text-[var(--lamure-text2)]">PROCESS</p>
        <h2 className="mt-3 font-serifDisplay text-3xl md:text-4xl">라뮤르 시술 프로세스</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[var(--radius-md)] border border-[var(--lamure-border)] bg-white p-5 md:min-h-[220px]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lamure-accent)]/20 text-sm font-semibold text-[var(--lamure-gold)]">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--lamure-text2)]">{step.desc}</p>
              {index < steps.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--lamure-border)] md:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
