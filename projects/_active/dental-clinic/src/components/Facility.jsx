import useReveal from '../hooks/useReveal'

const spaces = [
  { name: '프리미엄 대기 라운지', image: '/images/facility-1.webp', alt: '편안한 대기 라운지 공간' },
  { name: '1인 진료실', image: '/images/facility-2.webp', alt: '프라이버시가 보장된 1인 진료실' },
  { name: '디지털 CT 장비실', image: '/images/facility-3.webp', alt: '정밀 진단을 위한 디지털 CT 장비실' },
  { name: '멸균 시스템 존', image: '/images/facility-4.webp', alt: '위생 관리를 위한 멸균 시스템 존' },
]

function Facility() {
  const revealRef = useReveal()

  return (
    <section className="section section-facility">
      <div className="container">
        <div ref={revealRef} className="section-heading reveal-up">
          <p className="eyebrow">시설 안내</p>
          <h2>청결하고 편안한 진료 환경</h2>
        </div>
      </div>
      <div className="facility-strip" aria-label="시설 갤러리">
        {spaces.map((space) => (
          <figure key={space.name} className="facility-card snap-item">
            <img src={space.image} alt={space.alt} className="w-full h-full object-cover rounded-[20px] border border-[var(--border)]" loading="lazy" />
            <figcaption>{space.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Facility
