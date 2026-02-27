import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver 기반 스크롤 노출 훅
 * - useState(false) 초기값: 처음에 숨겨졌다가 뷰포트 진입 시 노출
 * - once: true → 한 번 노출 후 unobserve (기본값)
 */
export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
