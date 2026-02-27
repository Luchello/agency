# 기술 아키텍처

> NexusPoint의 기술 스택, 골든 템플릿 설계 원칙, 개발 환경 가이드입니다.

---

## 기본 스택 (Basic / Standard)

| 기술 | 버전 | 용도 |
|------|------|------|
| Vite | 6.x | 빌드 도구 |
| React | 19.x | UI 프레임워크 |
| Tailwind CSS | v4 | 스타일링 |
| lucide-react | 최신 | 아이콘 (이모지 대체) |
| Pretendard | - | 한국어 폰트 |
| Inter | - | 영어 폰트 |
| Web3Forms / FormSubmit | - | 문의 폼 백엔드 (무료) |
| Google Analytics | - | 방문자 분석 |
| Vercel | - | 호스팅 (무료 티어) |

---

## 고급 스택 (Premium)

| 기술 | 용도 |
|------|------|
| Next.js | SSR, API Routes |
| Supabase | PostgreSQL DB + Auth |
| NextAuth | 인증 (소셜 로그인) |
| 토스페이먼츠 / 포트원 | 결제 연동 |

---

## 골든 템플릿 설계

`template/` 디렉토리에 있는 골든 템플릿은 "처음 생성부터 7/10 이상" 퀄리티를 보장합니다. Claude Code는 `config.js` 하나만 커스터마이징합니다.

### 디자인 토큰

```
Font Scale: 14/16/18/20/24/30/36/48/60px
Spacing: 4/8/12/16/24/32/48/64/80/96/120px
Border Radius: 6/8/12/16/24px
Shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
Shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1)
Shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1)
Shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1)
```

### 색상 시스템 (config.js에서 업종별 정의)

| 변수 | 역할 |
|------|------|
| `primary` | 메인 브랜드 색상 |
| `primaryDark` | primary의 어두운 버전 |
| `secondary` | 보조 색상 |
| `accent` | 강조 색상 (CTA 버튼 등) |
| `bgLight` | 밝은 배경 (#f8f9fa 계열) |
| `bgDark` | 어두운 배경 (Hero, Footer) |
| `textDark` | 본문 색상 (#1a1a2e) |
| `textMuted` | 보조 텍스트 (#6b7280) |

### 섹션 구성 (순서 고정)

| 순서 | 섹션 | 설명 |
|------|------|------|
| 1 | Navbar | 로고 + 메뉴 (스크롤 시 스티키, blur 배경) |
| 2 | Hero | 풀스크린 배경 이미지 + 오버레이 + 제목 + CTA |
| 3 | Features | 3~4개 아이콘 카드 (Lucide + 제목 + 설명) |
| 4 | About | 이미지 + 텍스트 좌우 배치, 숫자 통계 |
| 5 | Gallery | 이미지 그리드 (2×2 또는 3열) |
| 6 | Testimonials | 고객 후기 카드 (별점 + 이름 + 내용) |
| 7 | Pricing | 2~3개 요금 카드 (추천 카드 강조) |
| 8 | Contact | 폼 + 연락처 정보 + 지도 placeholder |
| 9 | Footer | 로고 + 링크 + SNS + 저작권 |

### 컴포넌트 설계 규칙

- **섹션 여백**: `py-20 md:py-28`
- **섹션 제목**: `text-center`, 작은 라벨 + 큰 제목 + 설명
- **카드**: `bg-white rounded-2xl shadow-lg p-6~8`
- **버튼**: `rounded-xl px-8 py-4 font-semibold`, hover 시 `scale(1.02)` + shadow
- **이미지**: `rounded-xl overflow-hidden object-cover`
- **스크롤 애니메이션**: IntersectionObserver로 fade-up (`translateY(20px)` → 0)
- **반응형**: 모바일 1열, 데스크탑 2~3열 그리드

### 이미지 전략

- **Hero**: 풀스크린 배경 (Unsplash, 1920×1080)
- **About**: 사이드 이미지 (800×600)
- **Gallery**: 각 400×300
- **소스**: `https://images.unsplash.com/{photo-id}?w={width}&h={height}&fit=crop`

---

## 커스터마이징 포인트 (config.js)

Claude Code가 수정하는 파일은 `config.js` 하나입니다.

| 항목 | 내용 |
|------|------|
| 비즈니스 정보 | 이름, 전화, 주소 |
| 색상 팔레트 | primary, secondary, accent 등 |
| Hero | 제목, 부제목, CTA 텍스트, 배경 이미지 |
| Features | 아이콘명, 제목, 설명 |
| About | 텍스트, 숫자 통계 |
| Gallery | 이미지 URL 목록 |
| Testimonials | 후기 데이터 |
| Pricing | 요금제 데이터 |
| Contact | 전화, 이메일, 주소, 지도 |

---

## 개발 환경

### AI 팀 워크플로우

```
Luveric (PM)
  └─ Builder(spawn/opus): 핵심 코딩
       └─ QA(spawn): 코드 리뷰, 빌드 검증
            └─ Scout(spawn): 레퍼런스/이미지 수집
```

### 프로젝트 생성 프로세스

```
1. template/ 디렉토리 복사
   → cp -r template/ projects/{project-name}/

2. config.js 커스터마이징
   → 비즈니스 정보, 색상, 이미지 URL 수정

3. 개발 서버 실행
   → npm install && npm run dev

4. 빌드 확인
   → npm run build

5. Vercel 배포
   → vercel --prod
```

### 호스팅 전략

| 단계 | 서비스 | 비용 |
|------|--------|------|
| 개발/스테이징 | Vercel Preview | 무료 |
| 프로덕션 | Vercel (무료 티어) | 무료 |
| 도메인 연결 | 고객 도메인 → Vercel CNAME | 무료 |

---

## 절대 금지 사항

- 이모지를 아이콘으로 사용 (lucide-react 사용)
- 기본 시스템 폰트만 사용 (Pretendard/Inter 필수)
- 그라데이션 남발
- 인라인 스타일 (`style={}`)
- 사진 없는 섹션
- 500px 이하의 Hero 높이

---

*템플릿 전체 사양은 `template/TEMPLATE-SPEC.md`를 참조하세요.*
*개발 파이프라인은 [PIPELINE.md](PIPELINE.md)를 참조하세요.*
