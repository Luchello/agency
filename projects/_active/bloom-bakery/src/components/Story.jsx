import Reveal from './Reveal'

export default function Story() {
  return (
    <section className="py-16 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        {/* Asymmetric 2-col: 7/5 ratio */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-center">
          {/* Image side — spans 7 cols */}
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/images/story-interior.webp"
                alt="블룸 베이커리 인테리어"
                className="h-full w-full object-cover"
              />
              {/* Floating caption */}
              <div className="absolute bottom-0 right-0 bg-[var(--bb-bg)]/90 backdrop-blur-sm px-4 py-3">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--bb-accent)]">Est. 2020</p>
              </div>
            </div>
          </Reveal>

          {/* Text side — spans 5 cols */}
          <Reveal className="md:col-span-5 flex flex-col gap-8">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--bb-primary)]">Our Story</span>

            <h2 className="font-serifDisplay text-3xl leading-snug font-light md:text-4xl">
              성수동 골목 끝,<br />
              작은 오븐 하나로<br />
              시작했습니다
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--bb-text),transparent_20%)] md:text-base">
              <p>
                2020년 여름, 성수동의 한 골목에서 블룸 베이커리가 문을 열었습니다.
                처음에는 오븐 하나, 밀가루 한 포대로 시작한 작은 공간이었지만,
                매일 새벽 4시에 반죽을 시작하는 정성만큼은 누구보다 컸습니다.
              </p>
              <p>
                "블룸"이라는 이름처럼, 좋은 빵은 천천히 피어나는 것이라 믿습니다.
                자연 발효종으로 12시간 이상 숙성시킨 반죽이 오븐 속에서
                부풀어 오르는 그 순간 --- 우리는 그것을 "bloom"이라 부릅니다.
              </p>
            </div>

            {/* Pull-quote line accent */}
            <blockquote className="border-l-2 border-[var(--bb-primary)] pl-5 italic">
              <p className="font-serifDisplay text-lg text-[var(--bb-accent)]">
                "좋은 빵은 시간이 만듭니다."
              </p>
            </blockquote>

            {/* Stats row */}
            <div className="mt-4 flex gap-10">
              {[
                { num: '5+', label: '년의 경험' },
                { num: '40+', label: '종의 메뉴' },
                { num: '12h', label: '자연 발효' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-serifDisplay text-2xl font-medium text-[var(--bb-primary)]">{num}</p>
                  <p className="mt-1 text-xs tracking-wide text-[color-mix(in_oklab,var(--bb-text),transparent_40%)]">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
