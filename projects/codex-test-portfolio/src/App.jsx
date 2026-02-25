import './index.css'

const works = [
  { name: '블룸 베이커리', type: '베이커리', url: 'https://bloom-bakery.vercel.app' },
  { name: '세레니티 요가', type: '요가', url: 'https://yoga-studio-swart.vercel.app' },
  { name: '라뮤르 네일', type: '네일샵', url: 'https://nail-salon-lake.vercel.app' },
]

const packages = [
  { name: 'Basic', price: '30만원~', desc: '원페이지 랜딩 + 모바일 최적화' },
  { name: 'Standard', price: '60만원~', desc: '다중 섹션 + SEO + 3회 수정' },
  { name: 'Premium', price: '100만원~', desc: '브랜드 맞춤 디자인 + 고급 최적화' },
]

export default function App() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">CODEX FRONTEND TEST</p>
        <h1>빠르고 세련된
          <br />에이전시 포트폴리오 페이지</h1>
        <p className="sub">React 기반으로 제작한 테스트 페이지야. 핵심 섹션/CTA/가독성 중심으로 구성했어.</p>
        <a className="cta" href="https://kmong.com/" target="_blank" rel="noreferrer">크몽에서 상담하기</a>
      </header>

      <section className="section">
        <h2>포트폴리오</h2>
        <div className="grid">
          {works.map((w) => (
            <a className="card" key={w.name} href={w.url} target="_blank" rel="noreferrer">
              <p className="type">{w.type}</p>
              <h3>{w.name}</h3>
              <span>사이트 보기 →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section alt">
        <h2>패키지</h2>
        <div className="grid">
          {packages.map((p) => (
            <article className="card" key={p.name}>
              <p className="type">{p.name}</p>
              <h3>{p.price}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>상담 및 결제는 크몽을 통해서만 진행합니다.</p>
      </footer>
    </main>
  )
}
