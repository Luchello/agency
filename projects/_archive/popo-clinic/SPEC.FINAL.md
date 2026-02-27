# SPEC: 포포 동물병원 (POPO Animal Clinic) 랜딩페이지

## 브랜드
- **이름:** 포포 동물병원 (POPO Animal Clinic)
- **컨셉:** 따뜻하고 신뢰감 있는 동네 동물병원
- **톤:** 밝은 민트/그린 + 아이보리 + 코랄 포인트
- **폰트:** Pretendard (본문) + 감성 세리프 or rounded sans (제목)

## 섹션 구성
1. **Hero** — "가족같은 진료, 포포 동물병원" + 강아지/고양이 이미지, CTA "진료 예약"
2. **서비스** — 일반진료, 예방접종, 건강검진, 수술, 미용 (아이콘 카드)
3. **의료진 소개** — 원장 프로필 + 경력 + 인사말
4. **시설 갤러리** — 병원 내부 사진 그리드
5. **후기** — 보호자 리뷰 3-4개 (별점 포함)
6. **오시는 길** — 주소 + 전화 + 진료시간 + 카카오맵 임베드 or 이미지
7. **Contact** — Formspree 문의폼 (이름, 전화, 반려동물종류, 문의내용)
8. **Footer** — 진료시간, SNS 링크, 저작권

## 기술 스택
- Vite + React 19 + Tailwind CSS v4
- 반응형 필수 (모바일 퍼스트)
- lucide-react 아이콘 (개별 import, tree-shaking)
- Formspree 실제 전송
- 이미지: placeholder (Unsplash URL or gradient)

## 디자인 기준
- 블룸베이커리 수준 퀄리티
- 이모지 장식 금지 → CSS/SVG로 표현
- 카드 hover 효과 (그림자 + translateY)
- 스크롤 애니메이션 (IntersectionObserver)
- 히어로 오버레이 + 노이즈 텍스처

## 배포
- Vercel (`$VERCEL_TOKEN`)
- 프로젝트 디렉토리: `agency/projects/popo-clinic/`
