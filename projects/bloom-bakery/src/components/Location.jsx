import Reveal from './Reveal'

export default function Location() {
  return (
    <section className="bg-[color-mix(in_oklab,var(--bb-bg),var(--bb-text)_4%)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: Info */}
          <Reveal className="flex flex-col justify-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--bb-primary)]">Visit Us</span>
            <h2 className="mt-3 font-serifDisplay text-4xl font-light md:text-5xl">
              찾아오시는 길
            </h2>

            <dl className="mt-10 space-y-6 text-sm md:text-base">
              {[
                { dt: '주소', dd: '서울 성동구 성수이로 12길 34, 1층' },
                { dt: '영업시간', dd: '08:00 ~ 21:00 (월요일 휴무)' },
                { dt: '상담', dd: '크몽 메시지 전용' },
                { dt: '정책', dd: '외부 연락처 공유 없음' },
              ].map(({ dt, dd }) => (
                <div key={dt} className="flex gap-6">
                  <dt className="w-20 shrink-0 font-medium text-[var(--bb-accent)]">{dt}</dt>
                  <dd className="text-[color-mix(in_oklab,var(--bb-text),transparent_15%)]">{dd}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://kmong.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-2 border border-[var(--bb-primary)] px-6 py-3 text-sm font-medium text-[var(--bb-primary)] transition-colors hover:bg-[var(--bb-primary)] hover:text-[var(--bb-bg)]"
            >
              크몽에서 상담하기
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </Reveal>

          {/* Right: Map placeholder */}
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-sm bg-[color-mix(in_oklab,var(--bb-text),transparent_90%)]">
              <img
                src="/images/map-placeholder.webp"
                alt="블룸 베이커리 위치 지도"
                className="h-full w-full object-cover"
              />
              {/* Corner badge */}
              <div className="absolute left-4 top-4 rounded-sm bg-[var(--bb-bg)]/90 px-4 py-2 backdrop-blur-sm">
                <p className="font-serifDisplay text-sm font-medium text-[var(--bb-text)]">Bloom Bakery</p>
                <p className="text-[10px] text-[color-mix(in_oklab,var(--bb-text),transparent_40%)]">성수동</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
