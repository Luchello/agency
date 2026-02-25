import { useReveal } from '../hooks/useReveal'

const reviews = [
  {
    source: '네이버 리뷰',
    text: '컬러 추천이 정말 세심해서 손이 훨씬 깨끗해 보였어요. 유지력도 좋아서 만족했습니다.',
    author: '김OO 고객',
  },
  {
    source: '플랫폼 리뷰',
    text: '웨딩 촬영 네일로 방문했는데, 드레스 톤과 딱 맞게 조율해 주셔서 사진이 훨씬 예쁘게 나왔어요.',
    author: '박OO 고객',
  },
  {
    source: '네이버 리뷰',
    text: '케어가 꼼꼼하고 아픈 부분 없이 진행되어서 재방문 의사가 확실합니다. 공간도 조용해요.',
    author: '이OO 고객',
  },
]

export default function Reviews() {
  const revealRef = useReveal()

  return (
    <section className="bg-[color-mix(in_oklab,var(--lamure-bg),white_40%)] py-20 md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal">
        <p className="text-sm tracking-[0.15em] text-[var(--lamure-text2)]">REVIEWS</p>
        <h2 className="mt-3 font-serifDisplay text-3xl md:text-4xl">고객 후기</h2>

        <div className="lamure-no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2">
          {reviews.map((review) => (
            <article key={review.text} className="min-w-[85%] rounded-[var(--radius-md)] border border-[var(--lamure-border)] bg-white p-6 md:min-w-[32%]">
              <p className="text-sm text-[var(--lamure-gold)]">★★★★★ · {review.source}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--lamure-text2)]">{review.text}</p>
              <p className="mt-6 text-sm font-medium">{review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
