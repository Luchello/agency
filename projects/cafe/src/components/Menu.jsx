import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/cn'

const items = [
  {
    name: '아메리카노',
    price: '5,500',
    desc: '카라멜과 다크 초콜릿의 균형. 깔끔한 피니시.',
    image: '/images/menu-americano.webp',
    alt: '아메리카노 한 잔',
    span: 'md:col-span-5 md:row-span-2',
  },
  {
    name: '라떼',
    price: '6,500',
    desc: '우유의 단맛과 견과류 향이 부드럽게 이어집니다.',
    image: '/images/menu-latte.webp',
    alt: '라떼 아트가 올려진 카페라떼',
    span: 'md:col-span-4',
  },
  {
    name: '드립커피',
    price: '7,000',
    desc: '싱글 오리진을 오늘의 레시피로. 산뜻한 산미.',
    image: '/images/menu-drip.webp',
    alt: '핸드드립으로 추출한 드립커피',
    span: 'md:col-span-3',
  },
  {
    name: '크로플',
    price: '6,000',
    desc: '바삭한 식감과 버터의 향. 커피와 잘 어울립니다.',
    image: '/images/menu-croffle.webp',
    alt: '크로플 디저트 플레이트',
    span: 'md:col-span-4 md:row-span-2',
  },
]

export default function Menu() {
  const r = useReveal()

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div ref={r} className="ondo-reveal">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-label text-[11px] text-[var(--ondo-text2)]">Menu highlights</p>
            <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em] sm:text-[38px]">시그니처를 고르는 방법</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-[var(--ondo-text2)]">
              산미·바디·단맛의 균형을 먼저 고르고, 온도에 맞는 텍스처를 더합니다. 오늘의 리듬에 맞는 한 잔을 추천해 드립니다.
            </p>
          </div>

          <div className="hidden sm:block text-right">
            <p className="text-[12px] text-[var(--ondo-text2)]">All prices (KRW)</p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:auto-rows-[140px]">
          {items.map((it) => (
            <article
              key={it.name}
              className={cn(
                'group relative overflow-hidden rounded-[var(--ondo-radius-lg)] border border-[var(--ondo-border)] bg-white',
                'shadow-[0_18px_60px_rgba(44,36,32,0.08)]',
                'transition-transform duration-300 hover:-translate-y-0.5',
                it.span,
              )}
            >
              <img src={it.image} alt={it.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,36,32,0.70)] via-[rgba(44,36,32,0.22)] to-transparent" />

              <div className="absolute inset-0 flex h-full flex-col p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[16px] font-medium">{it.name}</h3>
                  <p className="text-[13px] text-white/90">{it.price}</p>
                </div>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/85">{it.desc}</p>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-white/35" />
                  <p className="mt-3 text-[11px] text-white/80">
                    핸드드립/에스프레소 기반 · 원두는 시즌에 따라 변경됩니다.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
