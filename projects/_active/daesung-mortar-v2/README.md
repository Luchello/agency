# 대성몰탈 포트폴리오 v2

- Stack: **Vite + React + Tailwind CSS v4**
- Font: **Pretendard** (index.html에서 CDN 로드)
- Photos: `public/photos/*.webp` (실제 현장 사진만 사용)
- Animations: IntersectionObserver 기반 reveal
- Lightbox: 포트폴리오/장비 사진 클릭 시 원본 보기
- Contact Form: Formspree 연동

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## Formspree 설정

`Contact` 섹션 폼 action은 아래 환경변수를 우선 사용합니다.

- `VITE_FORMSPREE_ENDPOINT`

예시:

```bash
# .env.local
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

> 실제 Formspree 프로젝트 endpoint로 교체해 주세요.
