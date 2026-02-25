import useReveal from '../hooks/useReveal'

const services = [
  { icon: 'IM', title: '임플란트', desc: '3D 진단 기반의 정밀 식립 시스템' },
  { icon: 'OR', title: '치아교정', desc: '개인 맞춤형 장치로 균형 잡힌 치열 개선' },
  { icon: 'PR', title: '심미보철', desc: '자연스러운 색감과 교합을 고려한 보철' },
  { icon: 'CV', title: '충치치료', desc: '미세 현미경 진료로 손상 최소화' },
  { icon: 'SC', title: '스케일링', desc: '잇몸 건강을 위한 정기 구강 관리' },
  { icon: 'WH', title: '치아미백', desc: '법랑질 보호를 고려한 안전한 미백' },
]

function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="section section-services">
      <div className="container">
        <div ref={revealRef} className="section-heading reveal-up">
          <p className="eyebrow">진료 과목</p>
          <h2>상태에 맞춘 전문 진료 솔루션</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
