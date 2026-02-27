import { MARQUEE_KEYWORDS } from '../constants'

export default function Marquee() {
  const doubled = [...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS]

  return (
    <div
      className="bg-charcoal py-5 overflow-hidden relative"
      aria-hidden="true"
    >
      {/* 양쪽 끝 페이드 그라데이션 */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10
        bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10
        bg-gradient-to-l from-charcoal to-transparent" />

      <div className="animate-marquee">
        {doubled.map((keyword, i) => (
          <span
            key={i}
            className="flex-shrink-0 inline-flex items-center gap-5 px-5"
          >
            <span className="text-warm-white/75 font-label text-sm tracking-widest uppercase whitespace-nowrap">
              {keyword}
            </span>
            <span className="text-coral text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
