import Reveal from './Reveal'

const images = [
  { src: '/images/gallery-1.webp', alt: '갓 구운 사워도우', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-2.webp', alt: '크루아상 클로즈업', span: '' },
  { src: '/images/gallery-3.webp', alt: '매장 내부 풍경', span: '' },
  { src: '/images/gallery-4.webp', alt: '커피와 빵', span: 'md:col-span-2' },
  { src: '/images/gallery-5.webp', alt: '케이크 데코레이션', span: '' },
  { src: '/images/gallery-6.webp', alt: '빵 진열대', span: '' },
]

export default function Gallery() {
  return (
    <section className="bg-[var(--bb-text)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <Reveal>
          <div className="mb-14 flex flex-col items-start gap-2 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--bb-primary)]">Gallery</span>
            <h2 className="font-serifDisplay text-4xl font-light text-[var(--bb-bg)] md:text-5xl">
              블룸의 하루
            </h2>
          </div>
        </Reveal>

        {/* Masonry-like CSS grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:gap-5">
          {images.map((img, i) => (
            <Reveal key={img.src} className={`overflow-hidden rounded-sm ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover aspect-square transition-transform duration-700 hover:scale-[1.03]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
