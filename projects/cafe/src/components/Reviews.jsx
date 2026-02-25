import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/cn'

const reviews = [
  {
    source: '네이버',
    rating: '4.9',
    text: '드립커피 향이 정말 선명하고, 공간이 조용해서 오래 머물기 좋았어요. 직원 추천도 정확했습니다.',
    author: '김*린',
  },
  {
    source: '카카오',
    rating: '5.0',
    text: '라떼 밸런스가 좋아요. 달지 않은 디저트와 잘 맞고, 음악 볼륨도 적당해서 대화하기 편했습니다.',
    author: '이*준',
  },
  {
    source: '네이버',
    rating: '4.8',
    text: '성수에서 가장 안정적인 한 잔. 산미 설명을 잘해줘서 원두 선택이 쉬웠고 재방문 의사 있습니다.',
    author: '박*은',
  },
]

export default function Reviews() {
  const r = useReveal()

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div ref={r} className="ondo-reveal">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-label text-[11px] text-[var(--ondo-text2)]">Reviews</p>
            <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em] sm:text-[38px]">머문 사람들의 기록</h2>
          </div>
          <p className="hidden sm:block text-[13px] text-[var(--ondo-text2)]">실제 방문 리뷰 발췌</p>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto ondo-no-scrollbar ondo-snap-x pb-2">
          {reviews.map((rv, i) => (
            <article
              key={rv.author}
              className={cn(
                'ondo-snap-item shrink-0',
                'w-[88%] sm:w-[66%] md:w-[47%] lg:w-[34%]',
                'rounded-[var(--ondo-radius-lg)] border border-[var(--ondo-border)] bg-white p-6',
                'shadow-[0_18px_50px_rgba(44,36,32,0.08)]',
              )}
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-[var(--ondo-text2)]">{rv.source}</p>
                <p className="text-[13px] text-[var(--ondo-text)]">★ {rv.rating}</p>
              </div>

              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--ondo-text)]">{rv.text}</p>

              <div className="mt-7 flex items-center gap-3">
                <div className={cn('h-9 w-9 rounded-full bg-gradient-to-br', i % 2 ? 'from-[#C5956B]/30 via-[#FAF8F5] to-white' : 'from-[#E8E2DA] via-white to-[#FAF8F5]')} />
                <p className="text-[13px] text-[var(--ondo-text2)]">{rv.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
