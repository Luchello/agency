import { useReveal } from '../hooks/useReveal'

function ValueCard({ title, desc, img }) {
  const r = useReveal({ rootMargin: '0px 0px -12% 0px', threshold: 0.12 })

  return (
    <article ref={r} className="reveal group overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5">
      <div className="grid grid-cols-[120px_1fr] gap-5 p-5 sm:grid-cols-[140px_1fr] sm:p-6">
        <div className="overflow-hidden rounded-[18px] ring-1 ring-black/5">
          <img
            src={img}
            alt=""
            className="h-[120px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[140px]"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-[Playfair_Display] text-2xl tracking-tight text-[color:var(--ink)]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_70%,transparent)]">
            {desc}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Philosophy() {
  const r = useReveal()

  const values = [
    {
      title: '균형',
      desc: '힘과 이완을 같은 비중으로. 억지로 밀어붙이지 않고, 안정감을 차근히 쌓습니다.',
      img: '/images/philosophy-balance.webp',
    },
    {
      title: '호흡',
      desc: '느린 리듬이 마음을 맑게 합니다. 모든 수업에 호흡을 중심으로 한 안내가 흐릅니다.',
      img: '/images/philosophy-breath.webp',
    },
    {
      title: '성장',
      desc: '조용하지만 분명한 변화. 강도보다 꾸준함을, 결과보다 과정을 신뢰합니다.',
      img: '/images/philosophy-growth.webp',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[color:var(--cream)]">
      <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[.95fr_1.05fr] md:items-start">
          {/* Left: text */}
          <div ref={r} className="reveal">
            <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">철학</p>
            <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-[color:var(--ink)] md:text-5xl">
              단순하게,
              <span className="block">더 깊게.</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:text-[16px]">
              세레니티 요가는 자극을 줄이고 감각을 키웁니다. 과한 장식 대신 빛과 공간,
              그리고 정확한 큐잉으로 ‘내 페이스’에 머물 수 있도록 돕습니다.
            </p>

            <div className="mt-10 rounded-[22px] bg-white/70 p-5 ring-1 ring-black/5">
              <p className="text-sm font-medium text-[color:var(--ink)]">초보도, 꾸준한 사람도 환영합니다.</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_70%,transparent)]">
                레벨별 옵션을 제공해 부담 없이 시작할 수 있고, 숙련자에게는 더 섬세한 정렬과 호흡의 깊이를 제안합니다.
              </p>
            </div>
          </div>

          {/* Right: vertical cards */}
          <div className="grid gap-5">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="blob absolute -bottom-28 right-[-120px] h-[420px] w-[420px] bg-[color-mix(in_oklab,var(--lavender)_18%,transparent)] opacity-55"
      />
    </section>
  )
}
