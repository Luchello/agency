import useReveal from '../hooks/useReveal'

const stats = [
  { value: '20', label: '년 임상 경력' },
  { value: '5만+', label: '누적 내원 환자' },
  { value: '4.9', label: '평균 만족도' },
]

function Hero() {
  const revealRef = useReveal()

  return (
    <section className="hero" id="top">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-dental.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="hero-overlay" />
      <div ref={revealRef} className="container hero-content reveal-up">
        <p className="eyebrow">강남역 3번 출구 · 20년 경력 의료진</p>
        <h1>편안한 미소, 정확한 진료</h1>
        <p className="hero-desc">
          미소플러스 치과는 불필요한 치료를 줄이고, 꼭 필요한 진료를 정확하게 안내해 드립니다.
          첫 상담부터 사후 관리까지 안정적인 의료 경험을 제공합니다.
        </p>
        <div className="hero-cta">
          <a href="#appointment" className="btn btn-primary">크몽 메시지로 문의하기</a>
          <a href="#services" className="btn btn-secondary">진료 안내</a>
        </div>
      </div>
      <div className="container hero-stats" aria-label="핵심 지표">
        {stats.map((item) => (
          <div key={item.label} className="stat-badge">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
