import { useEffect, useRef } from 'react'

/**
 * Adds `is-in` class when element becomes visible.
 * Uses IntersectionObserver and respects reduced motion.
 */
export function useReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduce) {
      el.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { root: null, rootMargin, threshold },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, threshold])

  return ref
}
