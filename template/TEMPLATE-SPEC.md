# Golden Template Design Specification

## Philosophy
"처음 생성부터 7/10 이상" — 템플릿이 이미 아름답고, Claude Code는 커스터마이즈만 한다.

## Tech Stack
- Vite 6 + React 19 + Tailwind CSS v4
- lucide-react (아이콘 — 절대 이모지 금지!)
- Pretendard (한국어) + Inter (영어)
- Framer Motion 없이 CSS 애니메이션만 (번들 최소화)

## Design Tokens
```
Font Scale: 14/16/18/20/24/30/36/48/60px
Spacing: 4/8/12/16/24/32/48/64/80/96/120px
Border Radius: 6/8/12/16/24px
Shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
Shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)
Shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
Shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)
```

## Color System (config.js에서 정의)
각 업종별 프리셋:
- primary: 메인 브랜드 색상
- primaryDark: primary의 어두운 버전
- secondary: 보조 색상
- accent: 강조 (CTA 버튼 등)
- bgLight: 밝은 배경 (#f8f9fa 계열)
- bgDark: 어두운 배경 (Hero, Footer)
- textDark: 본문 (#1a1a2e)
- textMuted: 보조 텍스트 (#6b7280)

## Sections (순서)
1. **Navbar** — 로고 + 메뉴(스크롤 시 스티키, 배경 blur)
2. **Hero** — 풀스크린 배경 이미지 + 오버레이 + 제목 + 부제 + CTA
3. **Features** — 3~4개 아이콘 카드 (Lucide 아이콘 + 제목 + 설명)
4. **About** — 이미지 + 텍스트 좌우 배치, 숫자 통계
5. **Gallery** — 이미지 그리드 (2x2 or 3열)
6. **Testimonials** — 고객 후기 카드 (별점 + 이름 + 내용)
7. **Pricing** — 2~3개 요금 카드 (추천 카드 강조)
8. **Contact** — 폼 + 연락처 정보 + 지도 placeholder
9. **Footer** — 로고 + 링크 + SNS + 저작권

## Component Design Rules
- 모든 섹션: py-20 md:py-28 (충분한 여백)
- 섹션 제목: text-center, 작은 라벨 + 큰 제목 + 설명
- 카드: bg-white rounded-2xl shadow-lg p-6~8
- 버튼: rounded-xl px-8 py-4 font-semibold, hover 시 scale(1.02) + shadow
- 이미지: rounded-xl overflow-hidden, object-cover
- Scroll animation: IntersectionObserver로 fade-up (translateY(20px) → 0)
- 모바일: 1열, 데스크탑: 2~3열 그리드

## Image Strategy
- Hero: 풀스크린 배경 (Unsplash URL, 1920x1080)
- About: 사이드 이미지 (800x600)
- Gallery: 각 400x300
- 이미지 소스: Unsplash Source URL → `https://images.unsplash.com/{photo-id}?w={width}&h={height}&fit=crop`

## Customization Points (config.js)
Claude Code가 수정하는 건 이 파일 하나:
- 비즈니스 정보 (이름, 전화, 주소)
- 색상 팔레트
- 히어로 텍스트 + 이미지
- Features 데이터 (아이콘명, 제목, 설명)
- About 텍스트 + 통계
- Gallery 이미지들
- Testimonials 데이터
- Pricing 데이터
- Contact 정보

## 절대 금지
❌ 이모지를 아이콘으로 사용
❌ 기본 시스템 폰트만 사용
❌ 그라데이션 남발
❌ 인라인 스타일
❌ 사진 없는 섹션
❌ 500px 이하의 히어로 높이
