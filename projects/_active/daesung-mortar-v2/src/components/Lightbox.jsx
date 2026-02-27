import { useEffect } from 'react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items?.[index]

  useEffect(() => {
    document.body.setAttribute('data-lock-scroll', 'true')
    return () => document.body.removeAttribute('data-lock-scroll')
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50"
    >
      <button
        type="button"
        aria-label="닫기"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 py-8">
        <div className="relative w-full overflow-hidden rounded-2xl bg-charcoal shadow-2xl">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-offwhite/90">
                {item.note || '시공 사진'}
              </p>
              <p className="truncate text-xs text-offwhite/60">{item.alt}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-offwhite/90 hover:bg-white/10"
                onClick={onPrev}
              >
                이전
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-offwhite/90 hover:bg-white/10"
                onClick={onNext}
              >
                다음
              </button>
              <button
                type="button"
                className="rounded-lg bg-amber px-3 py-1.5 text-xs font-semibold text-charcoal hover:brightness-95"
                onClick={onClose}
              >
                닫기
              </button>
            </div>
          </div>

          <div className="bg-black">
            <img
              src={item.src}
              alt={item.alt}
              className="mx-auto max-h-[78vh] w-full object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
