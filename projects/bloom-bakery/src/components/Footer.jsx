export default function Footer() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--bb-text),transparent_85%)] py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo type */}
          <div className="text-center md:text-left">
            <p className="font-serifDisplay text-xl tracking-wide">Bloom Bakery</p>
            <p className="mt-1 text-xs text-[color-mix(in_oklab,var(--bb-text),transparent_50%)]">
              매일 아침, 정성을 굽습니다
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {[
              { label: '크몽 상담', href: 'https://kmong.com/' },
              { label: 'Naver', href: 'https://blog.naver.com' },
              { label: 'KakaoTalk', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide text-[color-mix(in_oklab,var(--bb-text),transparent_40%)] transition-colors hover:text-[var(--bb-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-[color-mix(in_oklab,var(--bb-text),transparent_60%)]">
          &copy; 2025 Bloom Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
