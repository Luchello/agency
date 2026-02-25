export default function Marquee({ items }) {
  // Duplicate for seamless loop
  const line = [...items, ...items]

  return (
    <section className="relative overflow-hidden border-y border-[color-mix(in_oklab,var(--bb-text),transparent_82%)] bg-[color-mix(in_oklab,var(--bb-bg),white_35%)]">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[color-mix(in_oklab,var(--bb-text),transparent_35%)]">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--bb-primary)]" />
          <span>Today’s line</span>
          <span className="ml-auto hidden text-[10px] md:inline">hover to pause</span>
        </div>
      </div>

      <div className="relative pb-5">
        <div className="bb-marquee-track px-4 md:px-6">
          {line.map((t, idx) => (
            <div key={`${t}-${idx}`} className="flex items-center">
              <span className="font-serifDisplay text-2xl md:text-3xl text-[var(--bb-text)]">
                {t}
              </span>
              <span className="mx-6 inline-flex h-[1px] w-10 bg-[color-mix(in_oklab,var(--bb-accent),transparent_55%)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bb-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bb-bg)] to-transparent" />
    </section>
  )
}
