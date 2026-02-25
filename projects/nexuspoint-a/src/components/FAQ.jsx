import useScrollAnimation from '../hooks/useScrollAnimation'

const items = [
  {
    q: '상담과 결제는 어디서 진행하나요?',
    a: '모든 상담/결제는 크몽 내 기능으로만 진행합니다. 외부 연락처 공유나 외부 결제 요청은 하지 않습니다.',
  },
  {
    q: '개인정보를 입력하는 폼이 있나요?',
    a: '이번 포트폴리오 사이트는 개인정보 수집 폼을 운영하지 않습니다.',
  },
  {
    q: '제작 기간과 수정 범위는?',
    a: '패키지별 기본 기간과 수정 횟수가 다르며, 상세 범위는 크몽 상품 설명에서 안내합니다.',
  },
]

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-cream/40">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <article key={item.q} className="bg-white border border-cream-dark/40 rounded-2xl p-6">
              <h3 className="font-semibold text-charcoal mb-2">{item.q}</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
