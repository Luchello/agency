# 포트폴리오

> NexusPoint가 제작한 사이트 목록과 자동화 테스트 실적입니다.

---

## 에이전시 홈페이지

| 항목 | 내용 |
|------|------|
| 사이트명 | NexusPoint 에이전시 |
| URL | https://nexuspoint-a.vercel.app |
| 유형 | 에이전시 소개 + 포트폴리오 |
| 기술 | Vite + React + Tailwind CSS |

---

## 제작 사이트

| # | 사이트명 | 업종 | 유형 | URL | 주요 기능 |
|---|---------|------|------|-----|----------|
| 1 | 블룸 베이커리 | 베이커리/카페 | Standard | https://bloom-bakery.vercel.app | 메뉴, 위치, 문의 폼 |
| 2 | 세레니티 요가 | 요가 스튜디오 | Standard | https://yoga-studio-swart.vercel.app | 프로그램, 강사, 수강 문의 |
| 3 | 대성몰탈 | 건설/바닥미장 | Standard | https://daesung-mortar-v2.vercel.app | 시공 사례, 자격증, 견적 문의 |
| 4 | 카페 온도 | 카페 | Basic | https://cafe-taupe-ten.vercel.app | 메뉴, 위치, 운영시간 |
| 5 | 라뮤르 네일 | 네일살롱 | Standard | https://nail-salon-lake.vercel.app | 시술 메뉴, 가격표, 예약 |
| 6 | 미소플러스 치과 | 치과 | Standard | https://dental-clinic-beta-drab.vercel.app | 진료과목, 의료진, 예약 |

### 공통 기술 스택
- Vite 6 + React 19 + Tailwind CSS v4
- Vercel 호스팅 (무료 티어)
- Pretendard 폰트 + lucide-react 아이콘
- 반응형 (모바일/태블릿/데스크탑)

---

## 자동화 테스트 결과

골든 템플릿의 자동화 개발 파이프라인을 10개 업종으로 연속 테스트한 결과입니다.

**요약**: 10건 테스트, **9/10 통과**, 평균 **84초** 완성

| # | 업종 | 총 시간 | QA (통과/실패/경고) | 상태 |
|---|------|--------|-------------------|------|
| 1 | 필라테스 | 86초 | 11 / 0 / 0 | 통과 |
| 2 | 치과 | 91초 | 9 / 0 / 2 | 통과 |
| 3 | 꽃집 | 81초 | 10 / 0 / 1 | 통과 |
| 4 | 부동산 | 85초 | 9 / 0 / 2 | 통과 |
| 5 | 네일샵 | 99초 | 9 / 1 / 1 | **실패** |
| 6 | 법률사무소 | 77초 | 9 / 0 / 2 | 통과 |
| 7 | 한식당 | 77초 | 10 / 0 / 1 | 통과 |
| 8 | 사진관 | 82초 | 10 / 0 / 1 | 통과 |
| 9 | 영어학원 | 87초 | 10 / 0 / 1 | 통과 |
| 10 | 헬스장 | 78초 | 9 / 0 / 2 | 통과 |

**시간 구성** (평균): init ~13초 | code ~65초 | qa ~3초 | screenshot ~4초

### 분석

- **통과율**: 90% (9/10)
- **실패 사례 (Test 5 네일샵)**: QA 1개 항목 실패 — 파이프라인 개선 반영됨
- **경고 항목**: 대부분 비필수 최적화 (접근성 개선 사항 등)
- **속도**: 평균 84초로 완성 — 기존 수작업 대비 압도적 속도

---

## 보관 프로젝트

| 프로젝트 | 설명 |
|---------|------|
| codex-test-portfolio | 초기 Codex 기반 테스트 포트폴리오 |
| popo-clinic | 테스트용 병원 사이트 |
| nexuspoint-a | 에이전시 공식 홈페이지 |

보관 프로젝트는 `projects/` 디렉토리에서 확인할 수 있습니다.

---

*서비스 등급 및 가격: [SERVICES.md](SERVICES.md)*
*크몽 마케팅 자료: [marketing/kmong-listing.md](marketing/kmong-listing.md)*
