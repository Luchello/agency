import { useEffect, useRef } from 'react'

/**
 * IntersectionObserver-based reveal.
 * Adds `is-in` class to the wrapper when it enters the viewport.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, once = true, margin = '-10% 0px -10% 0px' }) {
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
      { root: null, threshold: 0.15, rootMargin: margin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, margin])

  return (
    <Tag ref={ref} className={`bb-reveal ${className}`.trim()}>
      {children}
    </Tag>
  )
}
