export default function Footer() {
  return (
    <footer className="bg-[var(--lamure-dark)] border-t border-white/10 py-8 text-white">
      <div className="section-wrap flex flex-col gap-4 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serifDisplay text-base tracking-[0.06em] text-white">LA MURE</p>
          <p className="mt-1">손끝에 담은 프렌치 감성</p>
        </div>
        <div className="text-left md:text-right">
          <p>대표: 라뮤르 네일 스튜디오</p>
          <p>사업자등록번호 123-45-67890</p>
        </div>
      </div>
    </footer>
  )
}
