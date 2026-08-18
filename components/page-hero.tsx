export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, currentColor 0 1px, transparent 1px 22px)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-foreground/70 text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
