import Reveal from './Reveal'

const reviews = [
  {
    text: '사워도우 하나로 아침이 완전 달라졌어요. 바삭한 크러스트에 쫄깃한 속, 이건 진짜 빵이에요.',
    name: '김지수',
    tag: '단골 3년차',
  },
  {
    text: '생일 케이크를 주문했는데 기대 이상이었어요. 너무 달지 않고 재료 맛이 살아있어서 온 가족이 좋아했습니다.',
    name: '이도윤',
    tag: '케이크 주문',
  },
  {
    text: '성수동에서 제일 좋아하는 공간. 빵 냄새 맡으며 커피 마시는 아침이 최고의 루틴이 됐어요.',
    name: '박서연',
    tag: '브런치 애호가',
  },
]

export default function Reviews() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--bb-primary)]">Reviews</span>
            <h2 className="mt-3 font-serifDisplay text-4xl font-light md:text-5xl">
              손님들의 이야기
            </h2>
          </div>
        </Reveal>

        {/* Horizontal scroll on mobile, 3-col on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {reviews.map((r, i) => (
            <Reveal key={r.name} className="min-w-[80vw] snap-center md:min-w-0">
              <article className="flex h-full flex-col justify-between rounded-sm border border-[color-mix(in_oklab,var(--bb-text),transparent_88%)] p-8 md:p-10">
                {/* Big quotation mark */}
                <div>
                  <span className="font-serifDisplay text-5xl leading-none text-[color-mix(in_oklab,var(--bb-primary),transparent_55%)]">"</span>
                  <p className="mt-2 text-base leading-relaxed md:text-lg">{r.text}</p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {/* Avatar placeholder circle */}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--bb-primary),transparent_80%)] text-xs font-medium text-[var(--bb-primary)]">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-[color-mix(in_oklab,var(--bb-text),transparent_50%)]">{r.tag}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
