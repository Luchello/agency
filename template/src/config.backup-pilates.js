// ============================================
// 🎨 SITE CONFIGURATION
// Claude Code는 이 파일만 수정한다
// ============================================

export const siteConfig = {
  // === 비즈니스 정보 ===
  business: {
    name: "비즈니스 이름",
    nameEn: "Business Name",
    tagline: "한 줄 소개",
    phone: "010-0000-0000",
    email: "info@example.com",
    address: "서울시 강남구 테헤란로 123",
    hours: "평일 09:00 - 18:00",
    kakao: "", // 카카오톡 채널 URL
    instagram: "", // 인스타그램 URL
    naver: "", // 네이버 플레이스 URL
  },

  // === 색상 팔레트 ===
  colors: {
    primary: "#2563eb",      // 메인 브랜드
    primaryDark: "#1d4ed8",  // 호버/강조
    primaryLight: "#dbeafe", // 배경 틴트
    secondary: "#0f172a",    // 보조 (주로 텍스트)
    accent: "#f59e0b",       // 강조 포인트
    bgLight: "#f8fafc",      // 밝은 배경
    bgDark: "#0f172a",       // 어두운 배경 (Hero, Footer)
    textDark: "#1e293b",     // 본문 텍스트
    textMuted: "#64748b",    // 보조 텍스트
    white: "#ffffff",
    border: "#e2e8f0",
  },

  // === 히어로 섹션 ===
  hero: {
    label: "Welcome",
    title: "여기에 메인 카피를\n넣어주세요",
    subtitle: "부제목은 비즈니스의 핵심 가치를 간결하게 전달합니다",
    ctaPrimary: "무료 상담 신청",
    ctaSecondary: "자세히 보기",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    overlayOpacity: 0.6, // 0~1
  },

  // === 특징/서비스 ===
  features: [
    {
      icon: "Shield",     // lucide-react 아이콘명
      title: "신뢰할 수 있는",
      description: "10년 이상의 경력과 검증된 전문성으로 최고의 서비스를 제공합니다.",
    },
    {
      icon: "Clock",
      title: "빠른 대응",
      description: "문의 접수 후 24시간 이내 신속하게 연락드립니다.",
    },
    {
      icon: "Award",
      title: "품질 보장",
      description: "완벽한 결과를 위해 끊임없이 노력하며, 만족을 보장합니다.",
    },
    {
      icon: "Heart",
      title: "고객 맞춤",
      description: "고객 한 분 한 분의 니즈에 맞춘 맞춤형 솔루션을 제공합니다.",
    },
  ],

  // === 소개 섹션 ===
  about: {
    label: "About Us",
    title: "우리를 소개합니다",
    description: "비즈니스에 대한 상세한 소개 텍스트가 여기에 들어갑니다. 2-3문장으로 핵심 가치와 차별점을 전달하세요.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    stats: [
      { number: "10+", label: "년 경력" },
      { number: "500+", label: "고객사" },
      { number: "99%", label: "만족도" },
      { number: "24h", label: "응답시간" },
    ],
  },

  // === 갤러리/포트폴리오 ===
  gallery: {
    label: "Portfolio",
    title: "우리의 작업물",
    subtitle: "최근 진행한 프로젝트들을 소개합니다",
    items: [
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 1",
        category: "카테고리",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 2",
        category: "카테고리",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 3",
        category: "카테고리",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 4",
        category: "카테고리",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 5",
        category: "카테고리",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        title: "프로젝트 6",
        category: "카테고리",
      },
    ],
  },

  // === 고객 후기 ===
  testimonials: {
    label: "Reviews",
    title: "고객 후기",
    subtitle: "실제 고객분들의 생생한 후기입니다",
    items: [
      {
        name: "김서현",
        role: "사업주",
        content: "정말 만족스러운 서비스였습니다. 처음부터 끝까지 꼼꼼하게 신경 써주셔서 감사합니다.",
        rating: 5,
      },
      {
        name: "이준호",
        role: "디자이너",
        content: "빠른 대응과 높은 퀄리티에 놀랐습니다. 다음에도 꼭 이용하고 싶습니다.",
        rating: 5,
      },
      {
        name: "박미영",
        role: "마케터",
        content: "합리적인 가격에 이 정도 퀄리티라니, 주변에도 많이 추천하고 있습니다.",
        rating: 5,
      },
    ],
  },

  // === 요금 ===
  pricing: {
    label: "Pricing",
    title: "요금 안내",
    subtitle: "합리적인 가격으로 최고의 서비스를 만나보세요",
    items: [
      {
        name: "Basic",
        price: "50,000",
        unit: "원~",
        description: "기본 서비스",
        features: ["기본 기능 1", "기본 기능 2", "기본 기능 3"],
        highlighted: false,
      },
      {
        name: "Standard",
        price: "100,000",
        unit: "원~",
        description: "가장 인기 있는",
        features: ["Standard 기능 1", "Standard 기능 2", "Standard 기능 3", "Standard 기능 4"],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "200,000",
        unit: "원~",
        description: "프리미엄 서비스",
        features: ["Premium 기능 1", "Premium 기능 2", "Premium 기능 3", "Premium 기능 4", "Premium 기능 5"],
        highlighted: false,
      },
    ],
  },

  // === 연락처 ===
  contact: {
    label: "Contact",
    title: "문의하기",
    subtitle: "궁금한 점이 있으시면 편하게 연락주세요",
    formFields: ["name", "phone", "email", "message"],
    showMap: false, // 네이버 지도 임베드
  },

  // === 네비게이션 ===
  nav: {
    items: [
      { label: "서비스", href: "#features" },
      { label: "소개", href: "#about" },
      { label: "포트폴리오", href: "#gallery" },
      { label: "후기", href: "#testimonials" },
      { label: "요금", href: "#pricing" },
      { label: "문의", href: "#contact" },
    ],
  },
};
