import { useReveal } from '../hooks/useReveal'

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className="py-20 md:py-24">
      <div ref={revealRef} className="section-wrap lamure-reveal grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] md:min-h-[480px] min-h-[340px]">
          <img
            src="/images/about-salon.webp"
            alt="라뮤르 네일살롱의 프라이빗 인테리어 공간"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-sm tracking-[0.15em] text-[var(--lamure-text2)]">ABOUT LA MURE</p>
          <h2 className="mt-3 font-serifDisplay text-3xl leading-tight md:text-4xl">섬세한 손길, 프리미엄 제품, 당신만의 디자인</h2>
          <p className="mt-5 text-base text-[var(--lamure-text2)]">
            라뮤르는 피부 톤과 라이프스타일을 함께 고려해, 단순히 예쁜 디자인을 넘어 오래 편안한
            네일 경험을 제공합니다. 압구정의 프라이빗한 공간에서 아트와 케어를 정교하게 제안합니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-[var(--lamure-border)] bg-white px-4 py-2 text-sm">국가공인 미용사 자격 보유</span>
            <span className="rounded-full border border-[var(--lamure-border)] bg-white px-4 py-2 text-sm">프리미엄 젤 브랜드 사용</span>
            <span className="rounded-full border border-[var(--lamure-border)] bg-white px-4 py-2 text-sm">1:1 맞춤 시술</span>
          </div>
        </div>
      </div>
    </section>
  )
}
