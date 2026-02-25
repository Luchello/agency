import { useReveal } from '../hooks/useReveal'

const people = [
  {
    name: '박지은',
    focus: '하타 · 모빌리티',
    bio: '정확하고 차분한 큐잉으로 안전한 기초를 만들어드립니다.',
    img: '/images/instructor-1.webp',
  },
  {
    name: '한민서',
    focus: '빈야사 · 호흡워크',
    bio: '호흡을 먼저, 움직임은 그다음. 매끄러운 플로우로 집중을 이끕니다.',
    img: '/images/instructor-2.webp',
  },
  {
    name: '김소라',
    focus: '아쉬탕가 · 스트렝스',
    bio: '구조 안에서 부드러움을. 꾸준히 성장하는 루틴을 설계합니다.',
    img: '/images/instructor-3.webp',
  },
]

function InstructorCard({ name, focus, bio, img }) {
  const r = useReveal({ rootMargin: '0px 0px -12% 0px', threshold: 0.12 })

  return (
    <article ref={r} className="reveal group relative overflow-hidden rounded-[34px] ring-1 ring-black/5">
      <div className="relative aspect-[4/5]">
        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.00)_0%,rgba(0,0,0,.20)_55%,rgba(0,0,0,.72)_100%)]"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs tracking-wide text-white/70">{focus}</p>
          <h3 className="mt-1 font-[Playfair_Display] text-3xl tracking-tight text-white">{name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/78">{bio}</p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-white/65">RYT · 500h+</span>
            <a
              href="#schedule"
              className="text-sm font-medium text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white/70"
            >
              수업 찾기
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_30%_25%,rgba(196,181,253,.18),transparent_60%)]" />
      </div>
    </article>
  )
}

export default function Instructors() {
  const r = useReveal()

  return (
    <section id="instructors" className="bg-[color-mix(in_oklab,var(--lavender)_18%,white)]">
      <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] md:items-end">
          <div ref={r} className="reveal">
            <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">강사진</p>
            <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-[color:var(--ink)] md:text-5xl">
              친절하고
              <span className="block">정확한 안내</span>
            </h2>
          </div>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:justify-self-end md:text-[16px]">
            과시보다 본질을. 손으로 억지 교정을 하기보다, 명료한 큐와 옵션으로
            스스로 안전하게 움직이도록 돕습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {people.map((p) => (
            <InstructorCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
