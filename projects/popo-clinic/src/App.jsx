import { useEffect, useRef, useState } from 'react'
import {
  Stethoscope, Syringe, HeartPulse, Scissors, Search,
  MapPin, Clock,
  ChevronRight, Star, Menu, X, Send, PawPrint
} from 'lucide-react'

/* ── Scroll fade-in hook ── */
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeIn({ children, className = '' }) {
  const ref = useFadeIn()
  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>
}

/* ══════════════════════════════════════════
   1. NAVBAR
   ══════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['서비스', '#services'],
    ['의료진', '#doctor'],
    ['시설', '#gallery'],
    ['후기', '#reviews'],
    ['오시는 길', '#location'],
    ['크몽 상담', 'https://kmong.com/'],
  ]
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-mint-dark">
          <PawPrint className="w-7 h-7" />
          <span>포포 동물병원</span>
        </a>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="hover:text-mint-dark transition-colors">{label}</a></li>
          ))}
        </ul>
        <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-1.5 bg-mint text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-mint-dark transition-colors">
          크몽에서 상담하기 <ChevronRight className="w-4 h-4" />
        </a>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-4">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0">{label}</a>
          ))}
          <a href="https://kmong.com/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-mint text-white font-semibold py-3 rounded-full">크몽 메시지로 문의하기</a>
        </div>
      )}
    </nav>
  )
}

/* ══════════════════════════════════════════
   2. HERO
   ══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80"
          alt="강아지" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        {/* noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'}} />
      </div>
      <div className="relative z-10 text-center text-white px-5 max-w-3xl">
        <FadeIn>
          <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-4">Popo Animal Clinic</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            가족같은 진료,<br />포포 동물병원
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            반려동물의 건강한 삶을 위해<br className="md:hidden" /> 언제나 정성을 다합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-mint hover:bg-mint-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105">
              크몽에서 상담하기 <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
              서비스 보기
            </a>
          </div>
        </FadeIn>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   3. SERVICES
   ══════════════════════════════════════════ */
const services = [
  { icon: Stethoscope, title: '일반진료', desc: '내과, 외과 등 전반적인 진료를 제공합니다' },
  { icon: Syringe, title: '예방접종', desc: '연령별 맞춤 예방접종 스케줄 관리' },
  { icon: HeartPulse, title: '건강검진', desc: '정기 건강검진으로 질병을 조기에 발견합니다' },
  { icon: Search, title: '정밀검사', desc: '초음파, X-ray, 혈액검사 등 정밀 진단' },
  { icon: Scissors, title: '미용', desc: '전문 미용사가 케어하는 반려동물 그루밍' },
]

function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-mint font-semibold text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">진료 서비스</h2>
          <div className="w-12 h-1 bg-mint mx-auto mt-4 rounded-full" />
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={i}>
              <div className="card-hover bg-ivory rounded-2xl p-8 border border-mint/10 cursor-default">
                <div className="w-14 h-14 rounded-xl bg-mint/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-mint-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   4. DOCTOR
   ══════════════════════════════════════════ */
function Doctor() {
  return (
    <section id="doctor" className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-mint/10 rounded-3xl -rotate-3" />
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="원장님" className="relative rounded-2xl w-full object-cover aspect-[4/5] shadow-lg" />
            </div>
            <div>
              <p className="text-mint font-semibold text-sm tracking-widest uppercase mb-3">Doctor</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">김포포 원장</h2>
              <div className="space-y-3 text-gray-500 leading-relaxed mb-8">
                <p>서울대학교 수의과대학 졸업</p>
                <p>前 서울대 동물병원 레지던트</p>
                <p>대한수의사회 정회원</p>
                <p>소동물 내과/외과 전문</p>
              </div>
              <blockquote className="border-l-4 border-mint pl-5 text-gray-700 italic leading-relaxed">
                "반려동물은 말을 하지 못하기에, 더 세심하게 살펴야 합니다.
                포포 동물병원은 한 마리 한 마리를 가족처럼 진료합니다."
              </blockquote>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   5. GALLERY
   ══════════════════════════════════════════ */
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: '진료실' },
  { src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80', alt: '대기실' },
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80', alt: '반려견 케어' },
  { src: 'https://images.unsplash.com/photo-1450778869180-cead2f17f286?w=600&q=80', alt: '고양이 진료' },
  { src: 'https://images.unsplash.com/photo-1583337130417-13571a247faa?w=600&q=80', alt: '시설 내부' },
  { src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80', alt: '수술실' },
]

function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-mint font-semibold text-sm tracking-widest uppercase mb-3">Facility</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">시설 안내</h2>
          <div className="w-12 h-1 bg-mint mx-auto mt-4 rounded-full" />
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={i}>
              <div className="group overflow-hidden rounded-2xl aspect-square">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   6. REVIEWS
   ══════════════════════════════════════════ */
const reviews = [
  { name: '김서연', pet: '말티즈 / 3살', text: '항상 친절하게 설명해주시고, 우리 몽이를 정말 잘 봐주세요. 다른 병원에서는 울던 아이가 여기서는 꼬리를 흔들어요.', stars: 5 },
  { name: '박준혁', pet: '골든리트리버 / 7살', text: '건강검진 결과를 꼼꼼하게 설명해주셔서 안심이 됩니다. 시설도 깨끗하고 대기 시간도 짧아서 좋아요.', stars: 5 },
  { name: '이하은', pet: '러시안블루 / 2살', text: '고양이 전문 진료도 가능하다고 해서 왔는데, 정말 섬세하게 진료해주세요. 스트레스 최소화해주셔서 감사합니다.', stars: 5 },
  { name: '최민수', pet: '포메라니안 / 5살', text: '예방접종 스케줄 관리를 해주셔서 편해요. 알림도 보내주시고, 원장님이 직접 상태를 체크해주십니다.', stars: 4 },
]

function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-ivory">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-mint font-semibold text-sm tracking-widest uppercase mb-3">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">보호자 후기</h2>
          <div className="w-12 h-1 bg-mint mx-auto mt-4 rounded-full" />
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={i}>
              <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-5 h-5 ${j < r.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint/10 flex items-center justify-center text-mint-dark font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-400">{r.pet}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   7. LOCATION
   ══════════════════════════════════════════ */
function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-mint font-semibold text-sm tracking-widest uppercase mb-3">Location</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">오시는 길</h2>
          <div className="w-12 h-1 bg-mint mx-auto mt-4 rounded-full" />
        </FadeIn>
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5!2d126.978!3d37.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzU5LjQiTiAxMjbCsDU4JzQwLjgiRQ!5e0!3m2!1sko!2skr!4v1"
                className="w-full h-full border-0" allowFullScreen loading="lazy"
                title="포포 동물병원 위치" />
            </div>
            {/* Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-mint-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                  <p className="text-gray-500">서울시 강남구 역삼동 123-45 포포빌딩 1층</p>
                </div>
              </div>
              {/* 정책상 외부 전화상담/직접연락 노출 제거 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-mint-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">진료시간</h3>
                  <div className="text-gray-500 space-y-1">
                    <p>평일 09:00 - 20:00</p>
                    <p>토요일 09:00 - 17:00</p>
                    <p>일요일/공휴일 10:00 - 15:00</p>
                    <p className="text-coral font-medium">점심시간 13:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   8. CONTACT
   ══════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="section-padding bg-mint-dark relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <FadeIn className="text-center mb-8">
          <p className="text-mint/70 font-semibold text-sm tracking-widest uppercase mb-3">KMONG</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">크몽 메시지 상담</h2>
          <p className="text-white/60 mt-4">외부 연락처 공유 및 개인정보 수집 없이 크몽에서만 상담을 진행합니다.</p>
        </FadeIn>
        <a href="https://kmong.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-mint-dark font-bold px-8 py-4 rounded-xl hover:bg-ivory transition-colors">
          크몽에서 상담하기 <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   9. FOOTER
   ══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <PawPrint className="w-6 h-6 text-mint" />
              포포 동물병원
            </div>
            <p className="text-sm leading-relaxed">반려동물의 건강한 삶을 위해<br />언제나 정성을 다하는 포포 동물병원</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">진료시간</h4>
            <div className="text-sm space-y-1.5">
              <p>평일 09:00 - 20:00</p>
              <p>토요일 09:00 - 17:00</p>
              <p>일요일/공휴일 10:00 - 15:00</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">상담 채널</h4>
            <div className="text-sm space-y-1.5">
              <p>크몽 메시지 전용 상담</p>
              <p>외부 연락처 공유 없음</p>
              <p>https://kmong.com/</p>
            </div>
            <p className="mt-4 text-xs text-gray-500">상담 및 결제는 크몽을 통해서만 진행합니다.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2026 포포 동물병원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════
   APP
   ══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Doctor />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}
