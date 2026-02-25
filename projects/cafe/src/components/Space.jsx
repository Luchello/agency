import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/cn'

const slides = [
  { title: '빛이 머무는 바', desc: '오전의 자연광과 추출 동선이 겹치는 자리.', image: '/images/space-1.webp', alt: '창가 바 좌석과 추출 공간' },
  { title: '긴 테이블', desc: '혼자와 여럿이 자연스럽게 섞이는 높이.', image: '/images/space-2.webp', alt: '여럿이 앉을 수 있는 긴 테이블' },
  { title: '로스터리 코너', desc: '원두의 향이 가장 먼저 닿는 곳.', image: '/images/space-3.webp', alt: '로스팅 장비가 있는 로스터리 코너' },
  { title: '창가 스툴', desc: '성수의 흐름을 보며 천천히 마시는 시간.', image: '/images/space-4.webp', alt: '창가 스툴 좌석 전경' },
]

export default function Space() {
  const r = useReveal()

  return (
    <section id="space" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={r} className="ondo-reveal">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-label text-[11px] text-[var(--ondo-text2)]">Space</p>
              <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em] sm:text-[38px]">공간의 온도</h2>
            </div>
            <p className="hidden sm:block text-[13px] text-[var(--ondo-text2)]">좌우로 스크롤해 둘러보세요.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div
          className={cn(
            'flex gap-4 overflow-x-auto px-4 sm:px-6',
            'ondo-no-scrollbar ondo-snap-x',
          )}
        >
          {slides.map((s) => (
            <figure
              key={s.title}
              className={cn(
                'ondo-snap-item relative shrink-0',
                'w-[82vw] sm:w-[66vw] md:w-[46vw] lg:w-[38vw]',
                'overflow-hidden rounded-[var(--ondo-radius-lg)] border border-[var(--ondo-border)] bg-white',
                'shadow-[0_24px_70px_rgba(44,36,32,0.10)]',
              )}
            >
              <div className="relative aspect-[4/3]">
                <img src={s.image} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/35 bg-[rgba(44,36,32,0.55)] px-4 py-3 backdrop-blur">
                  <p className="text-[13px] font-medium text-white">{s.title}</p>
                  <p className="mt-1 text-[12px] leading-[1.6] text-white/85">{s.desc}</p>
                </figcaption>
              </div>
            </figure>
          ))}

          <div className="shrink-0 w-4" />
        </div>
      </div>
    </section>
  )
}
