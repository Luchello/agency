import { useReveal } from '../hooks/useReveal'

const classes = [
  {
    name: '하타',
    vibe: '정렬 · 기초 · 깊은 유지',
    desc: '기본을 단단히. 자세를 오래 유지하며 정렬 감각을 쌓는 수업입니다. 처음 시작하는 분께 특히 추천합니다.',
    img: '/images/class-hatha.webp',
    tag: '기초 추천',
  },
  {
    name: '빈야사',
    vibe: '호흡 기반 플로우 · 리듬',
    desc: '호흡에 맞춰 부드럽게 이어집니다. 흐름 속에서 집중이 깊어지는 ‘움직이는 명상’을 경험해보세요.',
    img: '/images/class-vinyasa.webp',
    tag: '저녁 인기',
  },
  {
    name: '아쉬탕가',
    vibe: '구조 · 집중 · 점진',
    desc: '정해진 시퀀스를 가이드로 진행합니다. 옵션을 제공해 무리하지 않고, 꾸준히 성장할 수 있게 돕습니다.',
    img: '/images/class-ashtanga.webp',
    tag: '루틴 만들기',
  },
  {
    name: '핫요가',
    vibe: '따뜻한 열 · 리셋',
    desc: '과하지 않은 온기로 몸을 부드럽게 풀어줍니다. 땀보다 ‘긴 호흡’이 남는 수업을 지향합니다.',
    img: '/images/class-hot.webp',
    tag: '리셋',
  },
]

function ClassCard({ name, vibe, desc, img, tag }) {
  const r = useReveal({ rootMargin: '0px 0px -12% 0px', threshold: 0.12 })

  return (
    <article
      ref={r}
      className="reveal snap-center overflow-hidden rounded-[34px] bg-white ring-1 ring-black/5 shadow-[0_28px_110px_rgba(16,10,24,.10)]"
    >
      <div className="grid md:grid-cols-[1.1fr_.9fr]">
        <div className="p-7 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-[Playfair_Display] text-3xl tracking-tight text-[color:var(--ink)]">{name}</h3>
            <span className="rounded-full bg-[color-mix(in_oklab,var(--lavender)_30%,white)] px-3 py-1 text-xs font-medium text-[color:var(--ink)] ring-1 ring-black/5">
              {tag}
            </span>
          </div>
          <p className="mt-2 text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_60%,transparent)]">{vibe}</p>
          <p className="mt-5 text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_74%,transparent)]">{desc}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['소수 정원', '레벨 옵션 제공', '매트/소도구 구비'].map((x) => (
              <span
                key={x}
                className="rounded-full bg-[color:var(--cream)] px-3 py-1 text-xs text-[color:color-mix(in_oklab,var(--ink)_70%,transparent)] ring-1 ring-black/5"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[220px] md:min-h-[340px]">
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.00)_0%,rgba(255,255,255,.12)_40%,rgba(255,255,255,.42)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,.00)_0%,rgba(0,0,0,.12)_42%,rgba(0,0,0,.36)_100%)]" />
        </div>
      </div>
    </article>
  )
}

export default function Classes() {
  const r = useReveal()

  return (
    <section id="classes" className="bg-white">
      <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div ref={r} className="reveal">
            <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">클래스</p>
            <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-[color:var(--ink)] md:text-5xl">
              오늘의 몸에 맞는
              <span className="block">네 가지 리듬</span>
            </h2>
          </div>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:justify-self-end md:text-[16px]">
            고요하게 정렬하는 하타부터, 호흡으로 흐르는 빈야사, 구조적인 아쉬탕가,
            그리고 따뜻한 열로 리셋하는 핫요가까지. 컨디션에 따라 선택해보세요.
          </p>
        </div>
      </div>

      {/* Full-width horizontal snap carousel */}
      <div className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1160px] px-4 md:px-8">
          <div className="-mx-4 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-8 md:px-8">
            <div className="flex snap-x snap-mandatory gap-6">
              {classes.map((c) => (
                <div key={c.name} className="w-[86vw] min-w-[320px] max-w-[860px] snap-center md:w-[860px]">
                  <ClassCard {...c} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
