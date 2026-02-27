import { NAV_LINKS, KMONG_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1열: 브랜드 */}
        <div>
          <div className="font-serif text-xl text-warm-white">
            Nexus<span className="text-coral font-bold">Point</span>
          </div>
          <p className="text-sm text-dark-muted mt-2 leading-relaxed">
            AI 기술로 빠르고 합리적으로,
            <br />
            사람의 감각으로 섬세하게
          </p>
          <p className="text-xs text-dark-muted mt-6">
            &copy; 2026 NexusPoint. All rights reserved.
          </p>
        </div>

        {/* 2열: 네비게이션 */}
        <div>
          <p className="text-xs font-label uppercase tracking-[0.2em] text-dark-muted mb-4">
            NAVIGATION
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-dark-muted hover:text-warm-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3열: CTA */}
        <div>
          <p className="text-xs font-label uppercase tracking-[0.2em] text-dark-muted mb-4">
            상담 시작하기
          </p>
          <p className="text-sm text-dark-muted mb-4 leading-relaxed">
            상담 및 결제는 크몽을 통해서만 진행합니다.
          </p>
          <a
            href={KMONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-coral text-white text-sm px-5 py-2.5 hover:bg-coral-light transition-colors"
          >
            크몽에서 상담하기
          </a>
          <p className="text-xs text-dark-muted mt-3">
            외부 연락처 &middot; 외부 결제 &middot; 개인정보 수집 없음
          </p>
        </div>
      </div>

      {/* 하단 구분선 */}
      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 text-xs text-dark-muted text-center">
        상담 및 결제는 크몽 플랫폼을 통해서만 진행합니다 &middot; 개인정보 수집 폼 없음 &middot; 크몽 정책 100% 준수
      </div>
    </footer>
  )
}
