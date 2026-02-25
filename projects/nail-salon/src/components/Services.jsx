import { useReveal } from '../hooks/useReveal'

const services = [
  {
    name: '젤네일',
    desc: '기본 원컬러부터 프렌치/아트까지 손톱 컨디션에 맞춘 디자인을 제안합니다.',
    price: '기본 59,000원 · 아트 79,000원~',
    icon: '◼',
  },
  {
    name: '패디큐어',
    desc: '각질 케어와 컬러 밸런스를 함께 진행해 깔끔하고 정돈된 발끝 라인을 완성합니다.',
    price: '49,000원~',
    icon: '▲',
  },
  {
    name: '네일케어',
    desc: '큐티클 정리와 영양 케어 중심으로 건강한 손톱 컨디션을 유지합니다.',
    price: '39,000원~',
    icon: '●',
  },
]

export default function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="py-20 md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal">
        <div className="mb-8 md:mb-10">
          <p className="text-sm tracking-[0.15em] text-[var(--lamure-text2)]">SERVICES</p>
          <h2 className="mt-3 font-serifDisplay text-3xl md:text-4xl">시그니처 서비스</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.name} className="rounded-[var(--radius-md)] border border-[var(--lamure-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--lamure-accent)]/20 text-[var(--lamure-gold)]">
                {item.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-[15px] text-[var(--lamure-text2)]">{item.desc}</p>
              <p className="mt-5 text-sm font-semibold text-[var(--lamure-gold)]">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
