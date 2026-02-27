import useReveal from '../hooks/useReveal'

const credentials = [
  '서울대학교 치의학대학원 석사',
  '보건복지부 인증 통합치의학 전문의',
  '대한심미치과학회 정회원',
  '강남 지역 임플란트 임상 20년',
]

function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <div className="about-image reveal-up" ref={revealRef}>
          <img
            src="/images/about-doctor.webp"
            alt="미소플러스 치과 박준서 원장 프로필 사진"
            className="w-full h-full object-cover rounded-[20px] border border-[var(--border)]"
            loading="lazy"
          />
        </div>
        <div className="about-content reveal-up is-visible">
          <p className="eyebrow">의료진 소개</p>
          <h2>박준서 원장</h2>
          <p className="about-quote">환자 한 분 한 분에게 최선의 진료를 제공하는 것이 미소플러스의 원칙입니다.</p>
          <ul className="credential-list">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="logo-row" aria-label="학회 및 인증 로고 영역">
            <span>대한치과의사협회</span>
            <span>KSO</span>
            <span>ISO 9001</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
