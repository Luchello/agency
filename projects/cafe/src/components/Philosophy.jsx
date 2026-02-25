import { useReveal } from '../hooks/useReveal'
import { cn } from '../lib/cn'

export default function Philosophy() {
  const r = useReveal()

  return (
    <section id="philosophy" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div ref={r} className="ondo-reveal">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <p className="font-label text-[11px] text-[var(--ondo-text2)]">Philosophy</p>
            <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em] sm:text-[38px]">
              한 잔의 커피가
              <br className="hidden sm:block" />
              완성되기까지
            </h2>

            <p className="mt-5 text-[16px] leading-[1.9] text-[var(--ondo-text2)]">
              온도는 과하지 않은 기술로 재료의 결을 살립니다. 원두는 주 3회 소량 로스팅으로
              신선도를 유지하고, 물 온도와 추출 시간을 정밀하게 조정해 한 잔의 균형을 만듭니다.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                { t: '슬로우 로스팅', d: '산지별 향미가 꺾이지 않도록, 열을 천천히 올립니다.' },
                { t: '싱글 오리진', d: '원두가 가진 단일한 스토리를 컵 안에서 선명하게.' },
                { t: '핸드드립', d: '손의 리듬과 레시피가 만나는 순간의 밀도.' },
              ].map((it) => (
                <div key={it.t} className="rounded-[var(--ondo-radius-md)] border border-[var(--ondo-border)] bg-white px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ondo-accent)]" />
                    <div>
                      <p className="text-[14px] font-medium text-[var(--ondo-text)]">{it.t}</p>
                      <p className="mt-1 text-[13px] leading-[1.7] text-[var(--ondo-text2)]">{it.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <div className={cn('relative overflow-hidden rounded-[var(--ondo-radius-lg)] border border-[var(--ondo-border)] bg-white', 'shadow-[var(--ondo-shadow)]')}>
              <div className="relative aspect-[4/5] md:aspect-[4/4]">
                <img
                  src="/images/philosophy-roasting.webp"
                  alt="로스팅 장비 앞에서 원두를 점검하는 모습"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[var(--ondo-border)] bg-white/75 px-4 py-3 backdrop-blur">
                  <p className="font-label text-[10px] text-[var(--ondo-text2)]">Roasting · Pour over</p>
                  <p className="mt-1 text-[13px] text-[var(--ondo-text)]">원두와 물, 그리고 시간의 온도를 맞춥니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
