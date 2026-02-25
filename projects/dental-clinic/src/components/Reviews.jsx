import useReveal from '../hooks/useReveal'

const reviews = [
  {
    name: '김민지',
    type: '임플란트',
    content: '상담 과정이 매우 체계적이고 치료 계획이 명확해서 안심하고 진행할 수 있었습니다.',
  },
  {
    name: '이도현',
    type: '치아교정',
    content: '기간별 변화 설명이 자세해 신뢰가 갔고, 불편함 없이 교정을 마칠 수 있었습니다.',
  },
  {
    name: '박서연',
    type: '심미보철',
    content: '자연스러운 결과가 가장 만족스러웠고 사후 관리 안내도 꼼꼼했습니다.',
  },
]

function Reviews() {
  const revealRef = useReveal()

  return (
    <section className="section section-reviews">
      <div className="container">
        <div ref={revealRef} className="section-heading reveal-up">
          <p className="eyebrow">환자 후기</p>
          <h2>미소플러스를 선택한 이유</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.name} className="review-card">
              <div className="review-meta">
                <strong>{review.name}</strong>
                <span className="rating">평점 4.9</span>
              </div>
              <p>{review.content}</p>
              <span className="tag">{review.type}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
