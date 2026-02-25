function Header() {
  const nav = [
    { label: '진료과목', href: '#services' },
    { label: '의료진 소개', href: '#about' },
    { label: '치료 사례', href: '#before-after' },
    { label: '크몽 상담', href: '#appointment' },
  ]

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label="미소플러스 치과 홈">
          <span className="brand-mark">MISO+</span>
          <span className="brand-text">미소플러스 치과</span>
        </a>
        <nav className="nav" aria-label="메인 내비게이션">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#appointment" className="btn btn-sm btn-primary">
          크몽에서 상담하기
        </a>
      </div>
    </header>
  )
}

export default Header
