import { useReveal } from '../hooks/useReveal'

export default function Visit() {
  const r = useReveal()

  return (
    <section id="visit" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div ref={r} className="ondo-reveal">
        <div className="overflow-hidden rounded-[var(--ondo-radius-lg)] border border-[var(--ondo-border)] bg-white shadow-[var(--ondo-shadow)]">
          <div className="grid md:grid-cols-12">
            <div className="relative md:col-span-7">
              <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-[#C5956B]/18 via-[#E8E2DA] to-[#FAF8F5]" />
              <div className="absolute inset-0 ondo-grain opacity-[0.3]" />
              <div className="absolute inset-5 rounded-2xl border border-white/50 bg-white/20 backdrop-blur-sm" />
              <div className="absolute bottom-5 left-5 rounded-full border border-[var(--ondo-border)] bg-white/85 px-4 py-2 text-[12px] text-[var(--ondo-text2)]">
                Naver Map Placeholder
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-8">
              <p className="font-label text-[11px] text-[var(--ondo-text2)]">Visit ONDO</p>
              <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em]">방문 안내</h2>

              <dl className="mt-7 space-y-4 text-[15px]">
                <div>
                  <dt className="text-[12px] text-[var(--ondo-text2)]">주소</dt>
                  <dd className="mt-1 text-[var(--ondo-text)]">서울 성동구 성수이로 00길 00</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-[var(--ondo-text2)]">영업시간</dt>
                  <dd className="mt-1 text-[var(--ondo-text)]">매일 09:00–22:00</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-[var(--ondo-text2)]">상담 채널</dt>
                  <dd className="mt-1 text-[var(--ondo-text)]">크몽 메시지 전용</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-[var(--ondo-text2)]">주차</dt>
                  <dd className="mt-1 text-[var(--ondo-text)]">인근 공영주차장 이용</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="min-h-11 inline-flex items-center justify-center rounded-full bg-[var(--ondo-text)] px-5 text-[var(--ondo-bg)] hover:bg-[color-mix(in_oklab,var(--ondo-text),black_10%)] transition-colors">
                  크몽에서 상담하기
                </a>
                <a href="#top" className="min-h-11 inline-flex items-center justify-center rounded-full border border-[var(--ondo-border)] px-5 text-[var(--ondo-text)] hover:bg-[var(--ondo-bg)] transition-colors">
                  맨 위로
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
