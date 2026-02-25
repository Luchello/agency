import { useReveal } from '../hooks/useReveal'

const slots = [
  { name: '프렌치', image: '/images/gallery-french.webp', alt: '클래식 프렌치 네일 디자인' },
  { name: '아트', image: '/images/gallery-art.webp', alt: '핸드페인팅 네일 아트 디자인' },
  { name: '웨딩', image: '/images/gallery-wedding.webp', alt: '웨딩을 위한 화이트 네일 디자인' },
  { name: '시즌', image: '/images/gallery-seasonal.webp', alt: '계절 무드의 트렌디 네일 디자인' },
  { name: '미니멀', image: '/images/gallery-minimal.webp', alt: '미니멀 누드톤 네일 디자인' },
  { name: '그라디언트', image: '/images/gallery-gradient.webp', alt: '그라디언트 컬러 네일 디자인' },
]

export default function Gallery() {
  const revealRef = useReveal()

  return (
    <section id="gallery" className="py-20 md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal">
        <p className="text-sm tracking-[0.15em] text-[var(--lamure-text2)]">GALLERY</p>
        <h2 className="mt-3 font-serifDisplay text-3xl md:text-4xl">아트워크 컬렉션</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {slots.map((slot, i) => (
            <article
              key={slot.name}
              className={`group relative overflow-hidden rounded-[20px] border border-[var(--lamure-border)] transition duration-300 hover:scale-[1.01] ${
                i === 0 ? 'col-span-2 row-span-2 min-h-[280px]' : i === 2 ? 'row-span-2 min-h-[220px]' : 'min-h-[140px]'
              }`}
            >
              <img src={slot.image} alt={slot.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(45,32,36,.42)_100%)]" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs text-[var(--lamure-text)]">
                {slot.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
