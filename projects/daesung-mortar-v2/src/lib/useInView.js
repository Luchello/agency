import { useEffect, useRef, useState } from 'react'

/**
 * Minimal IntersectionObserver hook
 * @param {{rootMargin?: string, threshold?: number, once?: boolean}} opts
 */
export function useInView(opts = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0.15, once = true } = opts
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, threshold, once])

  return { ref, inView }
}
