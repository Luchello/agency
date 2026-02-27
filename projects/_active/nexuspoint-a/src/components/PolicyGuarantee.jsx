import { ShieldCheck, Lock, ReceiptText } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: '크몽 정책 100% 준수',
    desc: '상담과 결제는 크몽 내 기능으로만 진행합니다. 외부 연락처/외부 결제 유도는 하지 않습니다.',
  },
  {
    icon: Lock,
    title: '개인정보 최소 수집',
    desc: '포트폴리오 사이트에서 개인정보 수집 폼을 운영하지 않습니다. 필요한 소통은 크몽 메시지로 진행합니다.',
  },
  {
    icon: ReceiptText,
    title: '투명한 작업 기준',
    desc: '패키지별 범위, 수정 횟수, 납품 기준을 사전에 명확히 안내합니다.',
  },
]

export default function PolicyGuarantee() {
  return (
    <section id="policy" className="py-20 md:py-28 px-6 bg-cream/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-coral font-medium text-sm tracking-widest uppercase mb-3">Trust Guarantee</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">정책 준수 보증</h2>
          <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
            NexusPoint는 크몽 정책을 준수하며 안전하고 투명한 거래 흐름을 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="bg-white rounded-2xl border border-cream-dark/40 p-7 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
              </article>
            )
          })}
        </div>

        <p className="text-center mt-8 text-sm text-charcoal-light">상담 및 결제는 크몽을 통해서만 진행합니다.</p>
      </div>
    </section>
  )
}
