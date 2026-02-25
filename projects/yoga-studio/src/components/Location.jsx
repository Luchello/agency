import { useReveal } from '../hooks/useReveal'

function Info({ label, value }) {
  return (
    <div className="rounded-[22px] bg-[color:var(--cream)] px-5 py-4 ring-1 ring-black/5">
      <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">{label}</p>
      <p className="mt-1 text-sm font-medium text-[color:var(--ink)]">{value}</p>
    </div>
  )
}

export default function Location() {
  const r = useReveal()

  return (
    <section id="location" className="bg-white">
      <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[34px] ring-1 ring-black/5 shadow-[0_30px_120px_rgba(16,10,24,.10)]">
              <img
                src="/images/map-placeholder.webp"
                alt="세레니티 요가 위치 지도"
                className="h-[360px] w-full object-cover sm:h-[460px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <div ref={r} className="reveal">
              <p className="text-xs tracking-wide text-[color:color-mix(in_oklab,var(--ink)_55%,transparent)]">위치</p>
              <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-[color:var(--ink)] md:text-5xl">
                스튜디오에
                <span className="block">오시는 길</span>
              </h2>
              <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[color:color-mix(in_oklab,var(--ink)_72%,transparent)] md:text-[16px]">
                강남구 신사동, 메인 거리에서 가까우면서도 조용한 골목에 있습니다.
                수업 전 10분 정도 여유 있게 도착하시면 좋습니다.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Info label="주소" value="서울시 강남구 신사동" />
              <Info label="상담" value="크몽 메시지 전용" />
              <Info label="운영시간" value="06:00–22:00 (일 09:00–18:00)" />
              <Info label="정책" value="외부 연락처 공유 없음" />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-7 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(16,10,24,.18)] transition hover:translate-y-[-1px]"
                href="#schedule"
              >
                크몽에서 상담하기
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--cream)] px-7 py-3 text-sm font-medium text-[color:var(--ink)] ring-1 ring-black/5 transition hover:bg-white"
                href="https://kmong.com/" target="_blank" rel="noreferrer"
              >
                크몽 메시지로 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
