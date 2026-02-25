import useReveal from '../hooks/useReveal'

function Appointment() {
  const revealRef = useReveal()

  return (
    <section id="appointment" className="section section-appointment">
      <div ref={revealRef} className="container appointment-box reveal-up">
        <p className="eyebrow">크몽 상담 안내</p>
        <h2>크몽에서 상담하세요</h2>
        <p className="hours">외부 연락 없이 크몽 메시지로만 상담합니다.</p>
        <div className="appointment-actions">
          <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="btn btn-light">크몽에서 상담하기</a>
          <a href="#services" className="btn btn-outline-light">진료 과목 보기</a>
        </div>
        <p className="hours">평일 09:30–18:30 · 토 09:30–14:00 · 일·공휴일 휴진</p>
      </div>
    </section>
  )
}

export default Appointment
