export default function Footer() {
  return (
    <footer className="bg-[#0B0A0F] text-white">
      <div className="mx-auto max-w-[1160px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="font-[Playfair_Display] text-2xl tracking-tight">세레니티 요가</p>
            <p className="mt-3 text-sm text-white/70">강남 신사동 프리미엄 요가 스튜디오</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70 md:justify-self-end">
            <a className="transition hover:text-white" href="#classes">
              클래스
            </a>
            <a className="transition hover:text-white" href="#instructors">
              강사
            </a>
            <a className="transition hover:text-white" href="#schedule">
              시간표/가격
            </a>
            <a className="transition hover:text-white" href="#location">
              위치
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Serenity Yoga. All rights reserved.</p>
          <p>호흡과 균형, 그리고 조용한 성장</p>
        </div>
      </div>
    </footer>
  )
}
