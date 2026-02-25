import { useMemo, useState } from 'react'
import Reveal from './components/Reveal'
import Lightbox from './components/Lightbox'
import { equipmentPhotos, photoCategories, portfolioPhotos } from './data/photos'

const COMPANY = {
  name: '대성몰탈',
  hours: '평일 08:00 ~ 18:00',
  regions: '충청권 · 경기도권',
}

function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 ${className}`.trim()}>{children}</div>
}

function Chip({ children }) {
  return (
    <span className="inline-flex min-h-[32px] items-center rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold text-offwhite/90">
      {children}
    </span>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-charcoal">
      <img
        src="/photos/crew-pouring.webp"
        alt="대성몰탈 바닥 미장 현장"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/42 to-charcoal/8" />

      <Container className="relative flex min-h-[92vh] flex-col justify-end py-10 sm:py-12">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <Chip>방통</Chip>
            <Chip>재물</Chip>
            <Chip>{COMPANY.regions}</Chip>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-offwhite sm:text-6xl">
            대성몰탈
            <span className="mt-1 block text-offwhite/90">바닥의 기준을 맞춥니다</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-offwhite/85 sm:text-lg">
            방통(몰탈 바닥 수평)과 재물(콘크리트 표면 마감)을 현장 조건에 맞춰 정확하게 시공합니다.
            일정·품질·마감까지 한 번에 정리해드립니다.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://kmong.com/" target="_blank" rel="noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-amber px-6 text-base font-bold text-charcoal transition hover:brightness-95"
            >
              크몽에서 상담하기
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 text-base font-semibold text-offwhite transition hover:bg-white/15"
            >
              시공사례 보기
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-black/15 p-4 backdrop-blur-sm">
              <p className="numeric text-2xl font-extrabold text-offwhite">10+년</p>
              <p className="mt-1 text-sm text-offwhite/80">현장 경력</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-black/15 p-4 backdrop-blur-sm">
              <p className="numeric text-2xl font-extrabold text-offwhite">500+현장</p>
              <p className="mt-1 text-sm text-offwhite/80">완료 기준</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-black/15 p-4 backdrop-blur-sm">
              <p className="text-2xl font-extrabold text-offwhite">무료견적</p>
              <p className="mt-1 text-sm text-offwhite/80">크몽 메시지 상담</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-sm text-offwhite/75">
          업무 시간 {COMPANY.hours}
        </div>
      </Container>
    </section>
  )
}

function Intro() {
  return (
    <section className="bg-offwhite py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-charcoal/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="/photos/hanok-trowel.webp"
                alt="대성몰탈 재물 마감 현장"
                className="h-[380px] w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal as="header">
              <p className="text-xs font-semibold tracking-[0.2em] text-charcoal/65">ABOUT</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                방통부터 재물까지, 공정의 핵심만 정확히
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                대성몰탈은 현장마다 다른 조건을 빠르게 파악하고, 레벨·동선·양생 타이밍을 기준으로
                안정적인 시공을 진행합니다.
              </p>
            </Reveal>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['정확한 수평', '레벨 체크 기반 진행'],
                ['공정 대응', '현장 일정 유연 조율'],
                ['책임 마감', '완료 후 최종 점검'],
              ].map(([title, desc]) => (
                <Reveal key={title} className="rounded-2xl border border-charcoal/12 bg-subtle p-4">
                  <p className="text-sm font-bold text-charcoal">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/70">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  const services = [
    {
      key: 'bangtong',
      title: '방통 (몰탈 바닥 수평)',
      desc: '바닥 레벨을 정확히 맞춰 후속 공정의 기준을 안정적으로 만듭니다.',
      points: ['현장 레벨 체크', '균일한 두께 관리', '양생 고려 시공'],
      img: '/photos/foundation-slab.webp',
    },
    {
      key: 'jaemul',
      title: '재물 (콘크리트 표면 마감)',
      desc: '마감 타이밍과 표면 정리를 정교하게 맞춰 품질을 끌어올립니다.',
      points: ['표면 강도 확보', '균열 최소화', '마감 품질 관리'],
      img: '/photos/slab-finish.webp',
    },
  ]

  return (
    <section className="bg-subtle py-16 sm:py-20" id="services">
      <Container>
        <Reveal as="header" className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal/65">SERVICE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            두 가지 핵심 시공, 현장 맞춤으로
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {services.map((item) => (
            <Reveal key={item.key}>
              <article className="group relative min-h-[380px] overflow-hidden rounded-3xl border border-charcoal/12 bg-charcoal shadow-[0_20px_55px_rgba(0,0,0,0.18)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-offwhite">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-offwhite/85">{item.desc}</p>
                  <ul className="mt-4 grid gap-1.5 text-sm text-offwhite/90">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = useMemo(() => {
    if (filter === 'all') return portfolioPhotos
    return portfolioPhotos.filter((p) => p.category === filter)
  }, [filter])

  const spans = [
    'col-span-6 row-span-3',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-4 row-span-3',
    'col-span-2 row-span-2',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-6 row-span-3',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-4 row-span-2',
    'col-span-2 row-span-2',
    'col-span-3 row-span-2',
    'col-span-3 row-span-2',
    'col-span-2 row-span-2',
    'col-span-4 row-span-3',
    'col-span-6 row-span-3',
  ]

  const [showAll, setShowAll] = useState(false)
  const INITIAL_COUNT = 9

  const open = (idx) => setLightboxIndex(idx)
  const close = () => setLightboxIndex(-1)
  const prev = () => setLightboxIndex((i) => (i <= 0 ? filtered.length - 1 : i - 1))
  const next = () => setLightboxIndex((i) => (i >= filtered.length - 1 ? 0 : i + 1))

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section className="bg-offwhite py-16 sm:py-20" id="portfolio">
      <Container>
        <Reveal as="header" className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-charcoal/65">PORTFOLIO</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">시공사례</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {photoCategories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => { setFilter(c.key); setShowAll(false) }}
                className={
                  filter === c.key
                    ? 'min-h-[44px] rounded-full border border-charcoal bg-charcoal px-5 text-sm font-semibold text-offwhite shadow-sm'
                    : 'min-h-[44px] rounded-full border border-charcoal/20 bg-white px-5 text-sm font-semibold text-charcoal transition hover:bg-subtle'
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {visible.map((p, idx) => (
            <button
              key={`${p.src}-${idx}`}
              type="button"
              className={`group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-subtle text-left shadow-sm transition hover:shadow-md ${idx === 0 ? 'col-span-2 sm:col-span-2' : ''}`}
              onClick={() => open(idx)}
            >
              <div className={idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-semibold text-offwhite/95">{p.note}</p>
                <p className="mt-0.5 text-xs text-offwhite/75">{p.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {!showAll && filtered.length > INITIAL_COUNT && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="min-h-[44px] rounded-full border border-charcoal/20 bg-white px-8 text-sm font-semibold text-charcoal transition hover:bg-charcoal hover:text-offwhite"
            >
              시공사례 더 보기 ({filtered.length - INITIAL_COUNT}장)
            </button>
          </div>
        )}

        {lightboxIndex >= 0 && (
          <Lightbox items={filtered} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
        )}
      </Container>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', '상담', '크몽 메시지로 공정과 일정을 접수합니다.'],
    ['02', '현장 확인', '현장 레벨·동선·면적을 확인해 시공 조건을 정리합니다.'],
    ['03', '견적 안내', '자재/인력/공정 기준으로 견적을 명확히 안내합니다.'],
    ['04', '시공 진행', '방통 또는 재물 공정을 계획대로 안전하게 진행합니다.'],
    ['05', '검수 완료', '마감 상태를 확인하고 현장 정리 후 마무리합니다.'],
  ]

  return (
    <section className="bg-subtle py-16 sm:py-20" id="process">
      <Container>
        <Reveal as="header" className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal/65">PROCESS</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">시공 프로세스</h2>
        </Reveal>

        <div className="mt-8 rounded-3xl border border-charcoal/12 bg-offwhite p-4 sm:p-6">
          <div className="relative pl-5 sm:pl-8">
            <div className="absolute bottom-0 left-2 top-0 w-px bg-charcoal/20 sm:left-3" />
            <div className="grid gap-4">
              {steps.map(([num, title, desc]) => (
                <Reveal key={num} className="relative pl-5 sm:pl-7">
                  <span className="absolute left-[-2px] top-4 h-3.5 w-3.5 rounded-full border-2 border-amber bg-offwhite sm:left-0" />
                  <article className="rounded-2xl border border-charcoal/10 bg-white p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <span className="numeric text-sm font-bold text-charcoal/45">{num}</span>
                      <h3 className="text-base font-bold text-charcoal">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Equipment() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const open = (idx) => setLightboxIndex(idx)
  const close = () => setLightboxIndex(-1)
  const prev = () => setLightboxIndex((i) => (i <= 0 ? equipmentPhotos.length - 1 : i - 1))
  const next = () => setLightboxIndex((i) => (i >= equipmentPhotos.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-offwhite py-16 sm:py-20" id="equipment">
      <Container>
        <Reveal as="header" className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-charcoal/65">EQUIPMENT</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">장비 운영</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-charcoal/70">
            현장 규모에 맞는 장비 선택과 운용으로 시공 안정성을 높입니다.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {equipmentPhotos.map((p, idx) => (
            <button
              key={p.src}
              type="button"
              onClick={() => open(idx)}
              className={`group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-subtle text-left shadow-sm transition hover:shadow-md ${idx === 0 ? 'col-span-2' : ''}`}
            >
              <div className={idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-semibold text-offwhite">{p.label}</p>
              </div>
            </button>
          ))}
        </div>

        {lightboxIndex >= 0 && (
          <Lightbox
            items={equipmentPhotos.map((p) => ({ ...p, note: p.label }))}
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section className="bg-charcoal py-16 sm:py-20" id="contact">
      <Container>
        <Reveal as="header" className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-offwhite/60">CONTACT</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-offwhite sm:text-4xl">
            빠른 상담 연결
          </h2>
          <p className="mt-4 text-base leading-relaxed text-offwhite/75">
            폼 없이 바로 연결됩니다. 크몽 메시지로 문의해 주세요.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://kmong.com/" target="_blank" rel="noreferrer"
            className="inline-flex min-h-[64px] items-center justify-center rounded-2xl bg-amber px-6 text-lg font-bold text-charcoal transition hover:brightness-95"
          >
            크몽 메시지로 문의하기
          </a>
          <a
            href="https://kmong.com/" target="_blank" rel="noreferrer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[64px] items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 text-lg font-bold text-offwhite transition hover:bg-white/15"
          >
            크몽에서 상담하기
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-white/12 bg-white/6 p-5 text-sm text-offwhite/78">
          <p>업무 시간: {COMPANY.hours}</p>
          <p className="mt-1">시공 지역: {COMPANY.regions}</p>
        </div>
      </Container>
    </section>
  )
}

function FloatingCallButton() {
  return (
    <a
      href="https://kmong.com/" target="_blank" rel="noreferrer"
      className="fixed bottom-[max(14px,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 min-w-[56px] items-center justify-center rounded-full bg-amber px-5 text-sm font-bold text-charcoal shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:hidden"
      aria-label="대성몰탈 크몽 상담"
    >
      전화
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-offwhite py-10">
      <Container>
        <div className="border-t border-charcoal/12 pt-6">
          <p className="text-sm font-bold text-charcoal">대성몰탈</p>
          <p className="mt-2 text-sm text-charcoal/70">사업자 정보: 대성몰탈</p>
          <p className="mt-1 text-sm text-charcoal/70">상담채널: https://kmong.com/</p>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-offwhite">
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Process />
      <Equipment />
      <Contact />
      <FloatingCallButton />
      <Footer />
    </div>
  )
}
