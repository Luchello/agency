/**
 * SVG feTurbulence 기반 Film Grain 텍스처 오버레이
 * Hero, About 등 다크 섹션에 고급스러운 질감 부여
 */
export default function FilmGrain({ opacity = 0.045, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${className}`}
      style={{ opacity, mixBlendMode: 'multiply' }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        style={{ animation: 'grain 8s steps(10) infinite' }}
      >
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>
    </div>
  )
}
