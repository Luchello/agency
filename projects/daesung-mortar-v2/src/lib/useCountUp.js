import { useEffect, useMemo, useState } from 'react'

/**
 * Lightweight counter animation.
 * @param {number} target
 * @param {{durationMs?: number, start?: number, enabled?: boolean}} opts
 */
export function useCountUp(target, opts = {}) {
  const { durationMs = 900, start = 0, enabled = true } = opts
  const [value, setValue] = useState(start)

  const clampedTarget = useMemo(() => {
    if (Number.isFinite(target)) return target
    return 0
  }, [target])

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const t0 = performance.now()

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(start + (clampedTarget - start) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [clampedTarget, durationMs, enabled, start])

  return value
}
