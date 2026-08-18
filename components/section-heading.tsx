import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SectionHeading({
  eyebrow,
  title,
  linkHref,
  linkLabel,
}: {
  eyebrow: string
  title: string
  linkHref?: string
  linkLabel?: string
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          <span className="h-3 w-1 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
