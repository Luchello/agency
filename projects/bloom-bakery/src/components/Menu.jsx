import Reveal from './Reveal'

const categories = [
  {
    title: 'Signature Bread',
    subtitle: '시그니처 빵',
    items: [
      { name: '블룸 사워도우', price: '8,000', desc: '12시간 자연 발효, 바삭한 크러스트', img: '/images/menu-sourdough.webp' },
      { name: '크루아상 클래식', price: '5,500', desc: '프랑스산 버터 36겹', img: '/images/menu-croissant.webp' },
      { name: '치아바타 올리브', price: '6,000', desc: '이탈리안 올리브 & 로즈마리', img: '/images/menu-ciabatta.webp' },
    ],
  },
  {
    title: 'Cake & Dessert',
    subtitle: '케이크 & 디저트',
    items: [
      { name: '레몬 파운드', price: '28,000', desc: '유기농 레몬 제스트, 홀 사이즈', img: '/images/menu-lemon.webp' },
      { name: '얼그레이 바스크 치즈케이크', price: '32,000', desc: '진한 얼그레이 풍미', img: '/images/menu-basque.webp' },
      { name: '당근 캐럿케이크', price: '7,500', desc: '크림치즈 프로스팅, 피스', img: '/images/menu-carrot.webp' },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center md:mb-24">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--bb-primary)]">Menu</span>
            <h2 className="mt-3 font-serifDisplay text-4xl font-light md:text-5xl">
              오늘의 라인업
            </h2>
            <p className="mt-4 max-w-md text-sm text-[color-mix(in_oklab,var(--bb-text),transparent_30%)]">
              매일 아침 구워내는 시그니처 빵과 계절 디저트
            </p>
          </div>
        </Reveal>

        {categories.map((cat, catIdx) => (
          <div key={cat.title} className={`${catIdx > 0 ? 'mt-20 md:mt-28' : ''}`}>
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4 border-b border-[color-mix(in_oklab,var(--bb-text),transparent_85%)] pb-3">
                <h3 className="font-serifDisplay text-xl font-medium md:text-2xl">{cat.title}</h3>
                <span className="text-xs text-[color-mix(in_oklab,var(--bb-text),transparent_50%)]">{cat.subtitle}</span>
              </div>
            </Reveal>

            {/* Alternating left/right layout per item — NOT repeated card grid */}
            <div className="space-y-12 md:space-y-0">
              {cat.items.map((item, i) => (
                <Reveal key={item.name}>
                  <div
                    className={`flex flex-col gap-6 py-6 md:flex-row md:items-center md:gap-12 ${
                      i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="shrink-0 overflow-hidden rounded-sm md:w-64 lg:w-80">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-serifDisplay text-lg font-medium md:text-xl">{item.name}</h4>
                        <span className="ml-4 shrink-0 text-sm font-medium text-[var(--bb-primary)]">{item.price}원</span>
                      </div>
                      <p className="text-sm leading-relaxed text-[color-mix(in_oklab,var(--bb-text),transparent_30%)]">
                        {item.desc}
                      </p>
                      {/* Decorative line */}
                      <span className="mt-3 block h-px w-16 bg-[color-mix(in_oklab,var(--bb-primary),transparent_60%)]" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
