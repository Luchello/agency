export default function Footer() {
  return (
    <footer className="bg-[var(--ondo-dark)] text-[var(--ondo-bg)]">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serifDisplay text-[30px] leading-none">ONDO</p>
            <p className="mt-4 text-[14px] leading-[1.8] text-[color-mix(in_oklab,white,transparent_30%)]">
              적정 온도의 커피와 시간.
              <br />
              서울 성수동에서 매일 한 잔의 밀도를 제안합니다.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] text-[color-mix(in_oklab,white,transparent_40%)]">Consulting</p>
            <p className="mt-3 text-[14px]">상담 및 결제는 크몽을 통해서만 진행합니다.</p>
            <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="mt-2 inline-block min-h-11 text-[14px] hover:text-[var(--ondo-accent)] transition-colors">
              크몽에서 상담하기
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] text-[color-mix(in_oklab,white,transparent_40%)]">Business</p>
            <p className="mt-3 text-[13px] leading-[1.8] text-[color-mix(in_oklab,white,transparent_30%)]">
              온도 ONDO
              <br />
              대표: 홍길동
              <br />
              사업자등록번호: 123-45-67890
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-5 text-[12px] text-[color-mix(in_oklab,white,transparent_45%)]">
          © {new Date().getFullYear()} ONDO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
