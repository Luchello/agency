import { MessageSquare, ShieldCheck } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { KMONG_URL } from '../constants'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-warm-white">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">상담은 크몽에서만 진행합니다</h2>
        </div>

        <div className="bg-white rounded-2xl border border-cream-dark/40 p-8 md:p-10 text-center space-y-5">
          <p className="text-charcoal-light leading-relaxed">
            정책 준수를 위해 외부 연락처, 외부 결제, 외부 미팅 링크는 제공하지 않습니다.
            상담과 결제는 모두 크몽 내 메시지/결제 기능으로만 진행됩니다.
          </p>

          <div className="grid sm:grid-cols-3 gap-2 max-w-2xl mx-auto text-sm">
            <div className="rounded-xl bg-cream/60 border border-cream-dark/30 px-3 py-2 text-charcoal-light">1) 문의 내용 전달</div>
            <div className="rounded-xl bg-cream/60 border border-cream-dark/30 px-3 py-2 text-charcoal-light">2) 견적·일정 확정</div>
            <div className="rounded-xl bg-cream/60 border border-cream-dark/30 px-3 py-2 text-charcoal-light">3) 제작 시작</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={KMONG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-coral text-white rounded-full font-medium hover:bg-coral-light transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> 크몽에서 상담하기
            </a>
            <a
              href={KMONG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-coral/40 text-coral rounded-full font-medium hover:bg-coral/5 transition-colors inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> 크몽 메시지로 문의하기
            </a>
          </div>

          <p className="text-sm text-charcoal-light">상담 및 결제는 크몽을 통해서만 진행합니다.</p>
        </div>
      </div>
    </section>
  )
}
