// 필라테스 스튜디오 — 커스터마이즈 예시
export const siteConfig = {
  business: {
    name: "피움 필라테스",
    nameEn: "PIUM Pilates",
    tagline: "몸과 마음의 균형을 찾는 프리미엄 필라테스 스튜디오",
    phone: "02-1234-5678",
    email: "hello@piumpilates.com",
    address: "서울시 강남구 역삼동 123-45 2층",
    hours: "평일 06:00 - 22:00 | 주말 09:00 - 18:00",
    kakao: "https://pf.kakao.com/example",
    instagram: "https://instagram.com/piumpilates",
    naver: "https://map.naver.com/example",
  },

  colors: {
    primary: "#8b5cf6",       // 보라 (필라테스 = 고급, 여성적)
    primaryDark: "#7c3aed",
    primaryLight: "#ede9fe",
    secondary: "#1e1b4b",
    accent: "#f59e0b",
    bgLight: "#faf5ff",
    bgDark: "#1e1b4b",
    textDark: "#1e293b",
    textMuted: "#64748b",
    white: "#ffffff",
    border: "#e2e8f0",
  },

  hero: {
    label: "Premium Pilates",
    title: "당신의 몸에\n귀 기울이는 시간",
    subtitle: "전문 강사진의 1:1 맞춤 수업으로 몸과 마음의 균형을 되찾으세요",
    ctaPrimary: "체험 수업 신청",
    ctaSecondary: "프로그램 보기",
    bgImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop",
    overlayOpacity: 0.5,
  },

  features: [
    {
      icon: "Users",
      title: "소수 정예 수업",
      description: "최대 4명의 소규모 그룹 수업으로 개인별 체형과 목표에 맞는 세심한 지도를 받을 수 있습니다.",
    },
    {
      icon: "GraduationCap",
      title: "전문 자격 강사진",
      description: "국제 공인 자격증을 보유한 경력 5년 이상의 전문 강사진이 함께합니다.",
    },
    {
      icon: "Dumbbell",
      title: "최신 기구 완비",
      description: "리포머, 캐딜락, 체어 등 발란스드바디 최신 기구로 효과적인 운동이 가능합니다.",
    },
    {
      icon: "Clock",
      title: "유연한 스케줄",
      description: "새벽 6시부터 밤 10시까지, 바쁜 일상에 맞춘 다양한 시간대의 수업을 운영합니다.",
    },
  ],

  about: {
    label: "About Us",
    title: "피움과 함께한 5년",
    description: "피움 필라테스는 2020년 개원 이래, 회원 한 분 한 분의 건강한 변화를 함께해왔습니다. '피움'은 '꽃이 피다'에서 따온 이름으로, 당신 안의 건강한 아름다움이 피어나길 바라는 마음을 담았습니다.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop",
    stats: [
      { number: "5년", label: "운영 경력" },
      { number: "1,200+", label: "누적 회원" },
      { number: "98%", label: "재등록율" },
      { number: "8명", label: "전문 강사" },
    ],
  },

  gallery: {
    label: "Studio",
    title: "스튜디오 둘러보기",
    subtitle: "쾌적하고 아늑한 공간에서 나만의 운동을 시작하세요",
    items: [
      { image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop", title: "리포머룸", category: "기구" },
      { image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop", title: "그룹 수업", category: "수업" },
      { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop", title: "프라이빗룸", category: "공간" },
      { image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop", title: "라운지", category: "공간" },
      { image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop", title: "1:1 수업", category: "수업" },
      { image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop", title: "캐딜락", category: "기구" },
    ],
  },

  testimonials: {
    label: "Reviews",
    title: "회원 후기",
    subtitle: "피움에서 변화를 경험한 회원분들의 이야기입니다",
    items: [
      {
        name: "김서현",
        role: "직장인 · 6개월",
        content: "출퇴근 시간에 맞춰서 새벽 수업 듣고 있는데, 어깨 통증이 거의 사라졌어요. 선생님이 자세 하나하나 꼼꼼히 봐주셔서 정말 좋습니다.",
        rating: 5,
      },
      {
        name: "이준호",
        role: "회사원 · 1년",
        content: "허리 디스크 재활 목적으로 시작했는데, 이제는 통증 없이 일상생활이 가능해졌습니다. 전문적이고 세심한 케어에 감사합니다.",
        rating: 5,
      },
      {
        name: "박미영",
        role: "프리랜서 · 8개월",
        content: "다른 필라테스도 다녀봤는데 여기가 확실히 다릅니다. 기구도 좋고, 무엇보다 선생님들의 실력이 뛰어나요.",
        rating: 5,
      },
    ],
  },

  pricing: {
    label: "Programs",
    title: "프로그램 안내",
    subtitle: "목표와 라이프스타일에 맞는 프로그램을 선택하세요",
    items: [
      {
        name: "그룹 수업",
        price: "180,000",
        unit: "원/월",
        description: "주 3회 · 4인 소그룹",
        features: ["주 3회 수업 (월/수/금)", "4인 소그룹 수업", "체형 분석 1회 포함", "라커룸 이용"],
        highlighted: false,
      },
      {
        name: "듀엣 수업",
        price: "280,000",
        unit: "원/월",
        description: "주 3회 · 2인 수업",
        features: ["주 3회 수업 선택", "2인 맞춤 프로그램", "월 1회 체형 분석", "라커룸 + 샤워실", "운동복 대여"],
        highlighted: true,
      },
      {
        name: "프라이빗",
        price: "450,000",
        unit: "원/월",
        description: "주 3회 · 1:1 전담",
        features: ["주 3회 1:1 전담 수업", "개인 맞춤 커리큘럼", "매월 체형 분석 리포트", "전 시설 프리패스", "운동복 + 타올 제공"],
        highlighted: false,
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "체험 수업 신청",
    subtitle: "첫 수업은 50% 할인! 편하게 문의해주세요",
    formFields: ["name", "phone", "email", "message"],
    showMap: false,
  },

  nav: {
    items: [
      { label: "프로그램", href: "#features" },
      { label: "소개", href: "#about" },
      { label: "스튜디오", href: "#gallery" },
      { label: "후기", href: "#testimonials" },
      { label: "요금", href: "#pricing" },
      { label: "문의", href: "#contact" },
    ],
  },
};
