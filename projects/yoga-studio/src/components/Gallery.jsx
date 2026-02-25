import { useReveal } from '../hooks/useReveal'

function Tile({ src, className }) {
  const r = useReveal({ rootMargin: '0px 0px -10% 0px', threshold: 0.12 })

  return (
    <figure
      ref={r}
      className={
        'reveal group relative overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5 shadow-[0_24px_90px_rgba(16,10,24,.10)] ' +
        className
      }
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </figure>
  )
}

export default function Gallery() {
  const r = useReveal()

  return (
    <section className="bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div ref={r} className="reveal">
            <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">갤러리</p>
            <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-[color:var(--ink)] md:text-5xl">
              빛, 질감,
              <span className="block">그리고 여백</span>
            </h2>
          </div>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:justify-self-end md:text-[16px]">
            따뜻한 우드 톤과 부드러운 조명, 그리고 넉넉한 공간. 과하게 꾸미지 않고
            ‘집중이 남는’ 환경을 설계했습니다.
          </p>
        </div>

        {/* Bento / masonry-like grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-12 md:grid-rows-6">
          <Tile src="/images/gallery-1.webp" className="md:col-span-7 md:row-span-3" />
          <Tile src="/images/gallery-2.webp" className="md:col-span-5 md:row-span-2" />
          <Tile src="/images/gallery-3.webp" className="md:col-span-5 md:row-span-4" />
          <Tile src="/images/gallery-4.webp" className="md:col-span-7 md:row-span-3" />
        </div>

        <div className="mt-10 grid gap-4 rounded-[30px] bg-white p-7 ring-1 ring-black/5 md:grid-cols-3 md:items-center">
          <div className="md:col-span-1">
            <p className="font-[Playfair_Display] text-2xl tracking-tight text-[color:var(--ink)]">시설</p>
            <p className="mt-2 text-sm text-[color:color-mix(in_oklab,var(--ink)_70%,transparent)]">
              프리미엄 매트 · 정수된 물 · 샤워룸 · 티 코너
            </p>
          </div>
          <p className="text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:col-span-2">
            필요한 것은 충분히, 불필요한 것은 최소로. 수업 전후의 시간도 편안히 머물 수 있도록
            동선을 단순하게 구성했습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
