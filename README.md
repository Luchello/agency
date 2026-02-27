# NexusPoint — AI 웹개발 에이전시

> AI 기술로 빠르고 합리적으로, 사람의 감각으로 섬세하게

---

## 소개

NexusPoint는 AI 기술을 투명하게 활용하여 소상공인·1인 사업자에게 전문가 수준의 웹사이트를 합리적인 가격에 제공하는 AI 웹개발 에이전시입니다. 기존 에이전시 대비 50~70% 저렴한 가격, 1~3일 빠른 납기로 누구나 부담 없이 전문가 결과물을 받을 수 있습니다.

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프론트엔드 (기본) | Vite 6 + React 19 + Tailwind CSS v4 |
| 아이콘 | lucide-react |
| 폰트 | Pretendard (한국어) + Inter (영어) |
| 호스팅 | Vercel (무료 티어) |
| 폼 백엔드 | Web3Forms / FormSubmit |
| 분석 | Google Analytics |
| 프론트엔드 (Premium) | Next.js + Supabase |

---

## 프로젝트 구조

```
agency/
├── README.md                # 이 파일
├── clients.json             # 클라이언트 데이터베이스
├── research-profile.md      # 에이전시 리서치 프로필
├── scripts/                 # 실행 스크립트
├── template/                # 골든 템플릿 소스 코드
├── projects/                # 클라이언트 프로젝트 산출물
└── docs/
    ├── OVERVIEW.md          # 전체 개요 & 온보딩
    ├── SERVICES.md          # 서비스 등급 & 가격
    ├── TECH-SPEC.md         # 기술 아키텍처
    ├── PIPELINE.md          # 프로젝트 진행 파이프라인
    ├── QA.md                # 품질 보증 프레임워크
    ├── BUSINESS-MODEL.md    # 비즈니스 모델 & 수익 전략
    ├── MARKET-RESEARCH.md   # 시장 조사
    ├── PORTFOLIO.md         # 포트폴리오 & 실적
    ├── ROADMAP.md           # 성장 로드맵
    ├── marketing/           # 마케팅 자료
    ├── prompts/             # AI 프롬프트
    ├── templates/           # 문서 템플릿
    └── test-prompts/        # 테스트 프롬프트
```

---

## 문서 가이드

| 문서 | 설명 |
|------|------|
| [OVERVIEW.md](docs/OVERVIEW.md) | 에이전시 전체 개요 및 온보딩 |
| [SERVICES.md](docs/SERVICES.md) | 서비스 등급, 가격표, 납품물 |
| [TECH-SPEC.md](docs/TECH-SPEC.md) | 기술 스택, 골든 템플릿 설계 |
| [PIPELINE.md](docs/PIPELINE.md) | 접수→견적→개발→납품 프로세스 |
| [QA.md](docs/QA.md) | 품질 보증 체크리스트 |
| [BUSINESS-MODEL.md](docs/BUSINESS-MODEL.md) | 수익 모델, 시뮬레이션, 리스크 |
| [MARKET-RESEARCH.md](docs/MARKET-RESEARCH.md) | 한국 프리랜서 시장 조사 |
| [PORTFOLIO.md](docs/PORTFOLIO.md) | 제작 사이트 목록, 테스트 결과 |
| [ROADMAP.md](docs/ROADMAP.md) | Phase별 성장 계획 |

---

## 포트폴리오

| 사이트명 | 업종 | URL |
|---------|------|-----|
| NexusPoint 에이전시 | 에이전시 홈페이지 | https://nexuspoint-a.vercel.app |
| 블룸 베이커리 | 베이커리 | https://bloom-bakery.vercel.app |
| 세레니티 요가 | 요가 스튜디오 | https://yoga-studio-swart.vercel.app |
| 대성몰탈 | 바닥미장 | https://daesung-mortar-v2.vercel.app |
| 카페 온도 | 카페 | https://cafe-taupe-ten.vercel.app |
| 라뮤르 네일 | 네일살롱 | https://nail-salon-lake.vercel.app |
| 미소플러스 치과 | 치과 | https://dental-clinic-beta-drab.vercel.app |

---

## 새 프로젝트 시작

1. **접수**: 고객 요구사항 수집 → [PIPELINE.md](docs/PIPELINE.md) 참조
2. **견적**: 서비스 등급 결정 → [SERVICES.md](docs/SERVICES.md) 참조
3. **개발**: 골든 템플릿 복사 → `template/` 디렉토리
4. **QA**: 체크리스트 검수 → [QA.md](docs/QA.md) 참조
5. **납품**: Vercel 배포 → `projects/` 디렉토리 등록
