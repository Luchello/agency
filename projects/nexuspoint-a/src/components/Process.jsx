import { MessageCircle, ClipboardList, Zap, Rocket } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const processSteps = [
  { step: '01', title: '상담', desc: '원하시는 방향과 레퍼런스를 함께 이야기해요', icon: MessageCircle },
  { step: '02', title: '기획', desc: '구조와 디자인 방향을 잡고, 콘텐츠를 정리해요', icon: ClipboardList },
  { step: '03', title: '제작', desc: 'AI 기술로 빠르고 정교하게 만들어요', icon: Zap },
  { step: '04', title: '납품', desc: '도메인 연결, 배포, 운영 가이드까지 전달해요', icon: Rocket },
]

export default function Process() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section id="process" className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/process-bg.webp" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-warm-white/80 z-0" />
      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">이렇게 진행돼요</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="relative bg-cream/50 rounded-2xl p-6 text-center border border-cream-dark/30">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <span className="text-coral font-serif text-sm font-bold">Step {s.step}</span>
                <h3 className="font-serif text-xl font-bold text-charcoal mt-1 mb-2">{s.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-coral/40 text-xl">→</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
