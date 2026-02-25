export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-nail.webp')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,32,36,.18)_0%,rgba(45,32,36,.58)_100%)]" />

      <div className="section-wrap relative z-10 flex min-h-[calc(100vh-6rem)] flex-col justify-end pb-14 text-white md:pb-20">
        <p className="mb-3 text-sm tracking-[0.18em] text-white/80">Apgujeong · Since 2021</p>
        <h1 className="font-serifDisplay text-4xl leading-tight sm:text-5xl md:max-w-3xl md:text-6xl">
          손끝에 담은 프렌치 감성
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
          라뮤르는 섬세한 밸런스와 정제된 컬러로, 일상에 오래 남는 네일 무드를 완성합니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#booking"
            className="touch-target inline-flex items-center rounded-full bg-white px-7 text-base font-semibold text-[var(--lamure-text)]"
          >
            크몽에서 상담하기
          </a>
          <a
            href="#gallery"
            className="touch-target inline-flex items-center rounded-full border border-white/60 px-7 text-base font-medium text-white"
          >
            아트 갤러리
          </a>
        </div>
      </div>
    </section>
  )
}
