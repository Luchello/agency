// === 크몽 URL (상품 등록 후 실제 URL로 교체) ===
export const KMONG_URL = 'https://kmong.com/'

// === 네비게이션 ===
export const NAV_LINKS = [
  ['포트폴리오', '#portfolio'],
  ['서비스', '#pricing'],
  ['프로세스', '#process'],
  ['소개', '#about'],
  ['FAQ', '#faq'],
]

// === 마키 키워드 ===
export const MARQUEE_KEYWORDS = [
  '웹사이트 제작',
  '브랜딩 디자인',
  'SEO 최적화',
  '랜딩페이지',
  '반응형 웹',
  '전환율 최적화',
  'AI 개발',
  '3~7일 납품',
]

// === 전통 외주 vs NexusPoint 비교 ===
export const COMPARISON_DATA = [
  { label: '제작 기간', traditional: '2 ~ 4주', nexus: '1 ~ 3일' },
  { label: '비용', traditional: '150 ~ 500만원', nexus: '30 ~ 200만원' },
  { label: '수정 대응', traditional: '추가 비용 발생', nexus: '패키지 내 포함' },
  { label: '기술 수준', traditional: '개발자 역량 편차', nexus: 'AI + 검증 프로세스' },
  { label: '유지보수', traditional: '별도 계약 필요', nexus: 'Premium 패키지 포함' },
  { label: '커뮤니케이션', traditional: '이메일/전화 혼선', nexus: '크몽 메시지 일원화' },
]

// === 포트폴리오 ===
export const PORTFOLIO_ITEMS = [
  {
    name: '블룸 베이커리',
    type: '베이커리',
    url: 'https://bloom-bakery.vercel.app',
    gradient: 'from-amber-200 via-orange-100 to-yellow-50',
    accentColor: '#C4733B',
    desc: '따뜻한 감성을 담은 프리미엄 베이커리 브랜드 사이트',
    colSpan: 'lg:col-span-7',
  },
  {
    name: '세레니티 요가',
    type: '요가 스튜디오',
    url: 'https://yoga-studio-swart.vercel.app',
    gradient: 'from-sage-100 via-green-50 to-emerald-50',
    accentColor: '#5C8F6E',
    desc: '고요하고 균형 잡힌 요가 스튜디오 소개 사이트',
    colSpan: 'lg:col-span-5',
  },
  {
    name: '카페 온도',
    type: '카페',
    url: 'https://cafe-taupe-ten.vercel.app',
    gradient: 'from-stone-200 via-amber-50 to-yellow-50',
    accentColor: '#C5956B',
    desc: '감도 높은 스페셜티 카페의 브랜드 스토리 사이트',
    colSpan: 'lg:col-span-5',
  },
  {
    name: '라뮤르 네일',
    type: '네일 살롱',
    url: 'https://nail-salon-lake.vercel.app',
    gradient: 'from-pink-100 via-rose-50 to-fuchsia-50',
    accentColor: '#D4829A',
    desc: '럭셔리 네일 살롱의 섬세한 감성을 담은 사이트',
    colSpan: 'lg:col-span-7',
  },
  {
    name: '미소플러스 치과',
    type: '치과',
    url: 'https://dental-clinic-beta-drab.vercel.app',
    gradient: 'from-sky-100 via-blue-50 to-cyan-50',
    accentColor: '#2E7D8C',
    desc: '신뢰와 전문성을 전달하는 치과 병원 홈페이지',
    colSpan: 'lg:col-span-12',
  },
]

// === 가격 플랜 ===
export const PRICING_PLANS = [
  {
    name: 'Basic',
    price: '30만원~',
    duration: '납기 1~3일',
    desc: '원페이지 랜딩 & 소개 사이트',
    features: [
      '1~5 페이지 구성',
      '모바일 반응형 완비',
      '기본 SEO 최적화',
      'Google Analytics 연동',
      '수정 2회 포함',
      '납품 후 1주 무료 유지보수',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '60만원~',
    duration: '납기 3~5일',
    desc: '기업 홈페이지 & 서비스 소개',
    badge: '가장 많이 선택',
    features: [
      '5~15 페이지 구성',
      '고품질 CSS 애니메이션',
      'SEO + OG 태그 + 구조화 데이터',
      '문의 폼 (이메일 연동)',
      'Google Analytics 4',
      '수정 3회 포함',
      'GitHub 레포 접근권',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '100만원~',
    duration: '납기 5~14일',
    desc: '풀스택 웹앱 & 고도화 사이트',
    features: [
      '풀 커스텀 디자인',
      '관리자 패널 (선택)',
      '회원 인증 & 결제 연동',
      'Next.js + Supabase',
      '수정 5회 포함',
      '1개월 무료 유지보수',
      '성능 최적화 (Core Web Vitals)',
    ],
    highlight: false,
  },
]

export const EXPRESS_ADDON = {
  name: 'Express',
  desc: '24시간 이내 납품 (Basic 등급 한정)',
  price: '+50%',
}

// === 추가 기능 가격표 ===
export const ADDON_PRICING = [
  { name: '문의 폼 (이메일 연동)', price: '+5만원' },
  { name: '카카오톡 채널 연동', price: '+3만원' },
  { name: '네이버 지도 연동', price: '+3만원' },
  { name: 'Google Analytics 4', price: '+3만원' },
  { name: '다국어 지원 (2개 언어)', price: '+15만원' },
  { name: '블로그 / 뉴스 섹션', price: '+10만원' },
  { name: 'SEO 심화 (네이버 최적화)', price: '+10만원' },
  { name: '도메인 연결 + SSL', price: '+5만원' },
  { name: '월 유지보수', price: '5~10만원/월' },
]

// === 프로세스 7단계 ===
export const PROCESS_STEPS = [
  {
    step: '01',
    title: '접수',
    desc: '크몽 메시지로 업종, 목적, 참고 사이트 전달',
    icon: 'MessageCircle',
  },
  {
    step: '02',
    title: '견적',
    desc: '24시간 이내 맞춤 견적 및 일정 제안',
    icon: 'FileText',
  },
  {
    step: '03',
    title: '계약',
    desc: '크몽 안전결제로 계약 확정',
    icon: 'Shield',
  },
  {
    step: '04',
    title: '개발',
    desc: 'AI 팀이 기획·디자인·코딩을 동시 진행',
    icon: 'Zap',
  },
  {
    step: '05',
    title: 'QA',
    desc: '납품 전 크로스 브라우저, 모바일, SEO 검증',
    icon: 'CheckSquare',
  },
  {
    step: '06',
    title: '납품',
    desc: '소스 코드 + 배포 링크 + 가이드 문서 전달',
    icon: 'Rocket',
  },
  {
    step: '07',
    title: '후속',
    desc: '무료 유지보수 기간 내 버그 수정 즉시 대응',
    icon: 'LifeBuoy',
  },
]

// === 실적 수치 ===
export const STATS = [
  { value: '7개', label: '배포 완료 사이트', sub: '6개 업종' },
  { value: '3~7일', label: '평균 납품 기간', sub: '기존 대비 1/4' },
  { value: '50~70%', label: '비용 절감', sub: '전통 외주 대비' },
  { value: '100%', label: '크몽 정책 준수', sub: '안전한 거래' },
]

// === FAQ ===
export const FAQ_ITEMS = [
  {
    q: '상담과 결제는 어디서 진행하나요?',
    a: '모든 상담과 결제는 크몽 플랫폼 내에서만 진행합니다. 외부 연락처나 직접 결제 링크는 제공하지 않으며, 크몽 안전결제를 통해 안전하게 거래할 수 있습니다.',
  },
  {
    q: 'AI로 만들면 퀄리티가 떨어지지 않나요?',
    a: '저희는 AI 활용을 투명하게 공개합니다. AI는 빠른 초기 생성을 담당하고, 이후 전문가 검수·QA·세부 튜닝 과정을 거쳐 납품합니다. 포트폴리오 7개 사이트를 직접 확인해보세요.',
  },
  {
    q: '제작 기간과 수정 범위는 어떻게 되나요?',
    a: 'Basic은 1~3일, Standard는 3~5일, Premium은 5~14일입니다. 수정은 패키지별로 2~5회 포함되며, 초과 수정은 건당 5만원입니다. 자세한 내용은 크몽 상품 설명을 참고해주세요.',
  },
  {
    q: '어떤 업종에 특화되어 있나요?',
    a: '건설·시공업, 음식점·카페, 뷰티·네일, 학원·교육, 의료·치과 업종에 특화되어 있습니다. 포트폴리오에서 다양한 업종 제작 사례를 확인하실 수 있습니다.',
  },
  {
    q: '도메인과 호스팅은 어떻게 되나요?',
    a: '기본 납품은 Vercel 무료 호스팅(vercel.app 도메인)으로 제공됩니다. 별도 도메인 연결 및 SSL 설정은 +5만원에 진행 가능합니다. 도메인 구매 비용은 별도입니다.',
  },
  {
    q: '납품 후 수정이 필요하면 어떻게 하나요?',
    a: '무료 유지보수 기간(Basic 1주, Standard 포함 없음, Premium 1개월) 내 버그는 무상 수정합니다. 이후 추가 수정은 5만원/건 또는 월 유지보수 계약(5~10만원/월)으로 진행 가능합니다.',
  },
  {
    q: 'Express(급행) 옵션이 뭔가요?',
    a: 'Basic 등급 한정으로 24시간 이내 납품을 보장하는 급행 옵션입니다. 기본 가격의 +50%가 추가됩니다. 촉박한 일정의 이벤트, 행사, 오픈 홍보용 사이트에 적합합니다.',
  },
]
