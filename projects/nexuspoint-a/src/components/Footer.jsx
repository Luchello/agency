import { KMONG_URL } from '../constants'

export default function Footer() {
  const links = [
    ['포트폴리오', '#portfolio'],
    ['서비스', '#pricing'],
    ['정책 보증', '#policy'],
    ['프로세스', '#process'],
    ['소개', '#about'],
    ['FAQ', '#faq'],
    ['문의', '#contact'],
  ]

  return (
    <footer className="py-12 px-6 bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-serif text-xl text-white mb-2">Nexus<span className="text-coral">Point</span></div>
          <p className="text-sm">상담 및 결제는 크몽을 통해서만 진행합니다.</p>
        </div>

        <div className="flex flex-col gap-2">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm hover:text-coral transition-colors">{label}</a>
          ))}
        </div>

        <div className="space-y-3">
          <a
            href={KMONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-coral text-white rounded-full text-sm font-medium hover:bg-coral-light transition-colors"
          >
            크몽에서 상담하기
          </a>
          <p className="text-xs text-white/60">외부 연락처/외부 결제 유도 없음</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-sm">
        © 2026 NexusPoint. All rights reserved.
      </div>
    </footer>
  )
}
