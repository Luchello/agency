import useReveal from '../hooks/useReveal'

const cases = [
  { title: '앞니 심미보철', detail: '치아 형태와 색조를 조화롭게 재구성' },
  { title: '교정 후 교합 개선', detail: '비대칭 교합을 안정적으로 정렬' },
  { title: '임플란트 기능 회복', detail: '저작 기능과 심미성을 함께 회복' },
  { title: '미백 프로그램', detail: '톤 균일도를 높여 밝은 인상 완성' },
]

function BeforeAfter() {
  const revealRef = useReveal()

  return (
    <section id="before-after" className="section section-before-after">
      <div className="container">
        <div ref={revealRef} className="section-heading reveal-up">
          <p className="eyebrow">치료 사례</p>
          <h2>Before & After 포트폴리오</h2>
        </div>
      </div>
      <div className="snap-row" aria-label="치료 전후 사례 목록">
        {cases.map((item) => (
          <article key={item.title} className="case-card snap-item">
            <div className="ba-visual">
              <div className="ba-half before">Before</div>
              <div className="ba-half after">After</div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BeforeAfter
