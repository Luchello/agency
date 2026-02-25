import { useReveal } from '../hooks/useReveal'

const stats = [
  { n: '3', label: '산지 국가' },
  { n: '3', label: '주간 로스팅' },
  { n: '12', label: '블렌드 & 싱글' },
]

export default function Origin() {
  const r = useReveal()

  return (
    <section id="origin" className="bg-[var(--ondo-dark)] py-22 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={r} className="ondo-reveal">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="font-label text-[11px] text-[color-mix(in_oklab,white,transparent_35%)]">Origin Story</p>
              <h2 className="mt-3 font-serifDisplay text-[30px] leading-[1.15] tracking-[-0.02em] text-[var(--ondo-bg)] sm:text-[40px]">
                에티오피아 예가체프에서
                <br />
                콜롬비아 우일라까지
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-[color-mix(in_oklab,white,transparent_25%)]">
                온도는 산지의 개성을 가리는 블렌딩보다, 생두가 가진 시간의 흔적을 존중합니다.
                시즌에 따라 달라지는 향미를 기록하고, 배전 프로파일을 미세하게 조정해 오늘의 균형을 제안합니다.
              </p>

              <div className="mt-8 h-[220px] overflow-hidden rounded-[var(--ondo-radius-lg)] border border-white/12 bg-[radial-gradient(circle_at_20%_35%,rgba(197,149,107,0.35),transparent_55%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-[var(--ondo-radius-md)] border border-white/12 bg-white/[0.03] px-5 py-5">
                    <p className="font-serifDisplay text-[42px] leading-none text-[var(--ondo-bg)]">{s.n}</p>
                    <p className="mt-2 text-[13px] text-[color-mix(in_oklab,white,transparent_35%)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
