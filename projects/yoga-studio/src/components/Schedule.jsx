import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const cx = (...v) => v.filter(Boolean).join(' ')

function PriceRow({ name, price, sub }) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-[18px] bg-white/8 px-5 py-4 ring-1 ring-white/10">
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        {sub ? <p className="mt-1 text-xs text-white/70">{sub}</p> : null}
      </div>
      <p className="font-[Playfair_Display] text-xl tracking-tight text-white">{price}</p>
    </div>
  )
}

export default function Schedule() {
  const r = useReveal()
  const [day, setDay] = useState('월')

  const data = useMemo(
    () => ({
      월: [
        ['06:30', '하타 (기초)'],
        ['12:10', '호흡 + 모빌리티'],
        ['19:30', '빈야사 플로우'],
      ],
      화: [
        ['07:10', '핫요가 (젤틀 히트)'],
        ['18:40', '아쉬탕가 가이드'],
        ['20:10', '슬로우 스트레치'],
      ],
      수: [
        ['06:30', '하타 (정렬)'],
        ['12:10', '빈야사 (소프트 파워)'],
        ['19:30', '호흡워크 + 릴랙스'],
      ],
      목: [
        ['07:10', '아쉬탕가 베이직'],
        ['18:40', '핫요가 (리셋)'],
        ['20:10', '인 + 사운드'],
      ],
      금: [
        ['06:30', '빈야사 (라이트)'],
        ['12:10', '하타 (숄더)'],
        ['19:30', '캔들라이트 리스토어'],
      ],
      토: [
        ['09:30', '위켄드 플로우'],
        ['12:00', '모빌리티 랩'],
        ['16:30', '핫요가 (리셋)'],
      ],
      일: [
        ['09:30', '콰이어트 하타'],
        ['12:00', '호흡 + 명상'],
        ['17:00', '인 리스토어'],
      ],
    }),
    [],
  )

  const days = Object.keys(data)

  return (
    <section id="schedule" className="relative overflow-hidden bg-[#0B0A0F]">
      {/* Background image */}
      <img
        src="/images/schedule-room.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        loading="lazy"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,15,.90)_0%,rgba(11,10,15,.68)_55%,rgba(11,10,15,.92)_100%)]" />

      <div className="relative mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] md:items-end">
          <div ref={r} className="reveal">
            <p className="text-xs tracking-wide text-white/65">시간표 · 가격</p>
            <h2 className="mt-4 font-[Playfair_Display] text-4xl tracking-[-0.03em] text-white md:text-5xl">
              매주 반복되는
              <span className="block">고요한 루틴</span>
            </h2>
          </div>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-white/74 md:justify-self-end md:text-[16px]">
            아래 시간표는 대표 예시입니다. 최신 시간표는 데스크에서 안내해드립니다.
          </p>
        </div>

        {/* Overlay pricing card + schedule tabs */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <div className="rounded-[34px] bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-md">
            <p className="text-sm font-medium text-white">이용권</p>
            <p className="mt-2 text-xs text-white/65">부가세 포함 · 요가매트 무료 대여</p>

            <div className="mt-6 grid gap-3">
              <PriceRow name="1회 체험" price="30,000원" sub="첫 방문 1회" />
              <PriceRow name="4회" price="120,000원" sub="유효기간 30일" />
              <PriceRow name="무제한" price="280,000원" sub="유효기간 30일" />
            </div>

            <div className="mt-8 rounded-[22px] bg-white/6 p-5 ring-1 ring-white/10">
              <p className="text-sm font-medium text-white">운영시간</p>
              <p className="mt-2 font-[Playfair_Display] text-2xl tracking-tight text-white">06:00–22:00</p>
              <p className="mt-1 text-xs text-white/65">일요일 09:00–18:00</p>
            </div>
          </div>

          <div className="rounded-[34px] bg-white/6 p-6 ring-1 ring-white/12 backdrop-blur-md">
            <div className="flex flex-wrap gap-2">
              {days.map((d) => {
                const active = d === day
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDay(d)}
                    className={cx(
                      'rounded-full px-4 py-2 text-sm font-medium transition',
                      active
                        ? 'bg-[color:var(--lavender)] text-[color:var(--ink)]'
                        : 'bg-white/8 text-white/78 ring-1 ring-white/10 hover:bg-white/12',
                    )}
                  >
                    {d}
                  </button>
                )
              })}
            </div>

            <ul className="mt-6 space-y-3">
              {data[day].map(([t, title]) => (
                <li
                  key={t}
                  className="flex items-center justify-between gap-4 rounded-[20px] bg-white/8 px-5 py-4 ring-1 ring-white/10"
                >
                  <span className="font-[Playfair_Display] text-lg tracking-tight text-white">{t}</span>
                  <span className="text-sm text-white/75">{title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <span>크몽 메시지 상담</span>
              <span>외부 연락처 공유 없음</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
