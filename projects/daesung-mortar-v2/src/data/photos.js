export const photoCategories = [
  { key: 'all', label: '전체' },
  { key: 'bangtong', label: '방통' },
  { key: 'jaemul', label: '재물' },
]

/**
 * public/photos/*.webp (실제 현장 사진만 사용)
 * - category: 'bangtong' | 'jaemul'
 */
export const portfolioPhotos = [
  {
    src: '/photos/crew-pouring.webp',
    alt: '방통 작업 — 인력 타설 현장',
    category: 'bangtong',
    note: '인력 타설',
  },
  {
    src: '/photos/building-pour.webp',
    alt: '방통 작업 — 건물 내부 타설',
    category: 'bangtong',
    note: '내부 타설',
  },
  {
    src: '/photos/rebar-pour.webp',
    alt: '방통 작업 — 철근 위 타설',
    category: 'bangtong',
    note: '철근 위 타설',
  },
  {
    src: '/photos/foundation-slab.webp',
    alt: '방통 작업 — 기초 슬래브',
    category: 'bangtong',
    note: '기초 슬래브',
  },
  {
    src: '/photos/factory-rebar.webp',
    alt: '방통 작업 — 공장 바닥 철근',
    category: 'bangtong',
    note: '공장 바닥',
  },
  {
    src: '/photos/factory-rebar2.webp',
    alt: '방통 작업 — 공장 바닥 철근(2)',
    category: 'bangtong',
    note: '공장 바닥',
  },
  // (중복 제거)
  {
    src: '/photos/slab-finish.webp',
    alt: '재물 작업 — 슬래브 표면 마감',
    category: 'jaemul',
    note: '표면 마감',
  },
  {
    src: '/photos/rooftop-finish.webp',
    alt: '재물 작업 — 옥상 마감',
    category: 'jaemul',
    note: '옥상 마감',
  },
  {
    src: '/photos/hanok-trowel.webp',
    alt: '재물 작업 — 흙손 마감(한옥)',
    category: 'jaemul',
    note: '흙손 마감',
  },
  {
    src: '/photos/mountain-trowel.webp',
    alt: '재물 작업 — 야외 흙손 마감',
    category: 'jaemul',
    note: '야외 마감',
  },
  {
    src: '/photos/power-trowel.webp',
    alt: '재물 작업 — 파워 흙손 장비',
    category: 'jaemul',
    note: '장비 마감',
  },
  {
    src: '/photos/trowels-pair.webp',
    alt: '재물 작업 — 흙손 도구',
    category: 'jaemul',
    note: '도구',
  },
  {
    src: '/photos/pump-closeup.webp',
    alt: '방통 작업 — 펌프 장비(클로즈업)',
    category: 'bangtong',
    note: '펌프',
  },
  {
    src: '/photos/pump-engine.webp',
    alt: '방통 작업 — 펌프 엔진',
    category: 'bangtong',
    note: '장비',
  },
  {
    src: '/photos/pump-sunset.webp',
    alt: '방통 작업 — 장비/현장(석양)',
    category: 'bangtong',
    note: '현장',
  },
  {
    src: '/photos/pump-truck.webp',
    alt: '방통 작업 — 펌프 트럭',
    category: 'bangtong',
    note: '펌프 트럭',
  },
  {
    src: '/photos/truck-equipment.webp',
    alt: '장비 — 트럭 적재 장비',
    category: 'bangtong',
    note: '장비',
  },
  {
    src: '/photos/blue-truck-hoses.webp',
    alt: '장비 — 호스와 트럭',
    category: 'bangtong',
    note: '호스',
  },
  {
    src: '/photos/bongo-site.webp',
    alt: '현장 — 작업 준비 차량',
    category: 'bangtong',
    note: '현장 준비',
  },
]

export const equipmentPhotos = [
  {
    src: '/photos/blue-truck-hoses.webp',
    alt: '장비 — 호스와 트럭',
    label: '호스·라인',
  },
  {
    src: '/photos/pump-truck.webp',
    alt: '장비 — 펌프 트럭',
    label: '펌프 트럭',
  },
  {
    src: '/photos/pump-engine.webp',
    alt: '장비 — 펌프 엔진',
    label: '펌프 엔진',
  },
  {
    src: '/photos/truck-equipment.webp',
    alt: '장비 — 현장 장비 적재',
    label: '현장 장비',
  },
  {
    src: '/photos/power-trowel.webp',
    alt: '장비 — 파워 흙손',
    label: '파워 흙손',
  },
  {
    src: '/photos/trowels-pair.webp',
    alt: '장비 — 흙손 세트',
    label: '수공구',
  },
  {
    src: '/photos/bongo-site.webp',
    alt: '장비 — 현장 차량',
    label: '현장 차량',
  },
]
