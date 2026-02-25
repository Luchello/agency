import { useEffect, useRef } from 'react'

export function useReveal({ once = true, margin = '-10% 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          if (once) observer.disconnect()
        } else if (!once) {
          el.classList.remove('is-in')
        }
      },
      { root: null, threshold, rootMargin: margin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, margin, threshold])

  return ref
}
