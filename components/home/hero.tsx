import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/images/hero-sprint.png"
        alt="A K4 sprint kayak crew racing at full speed across open blue water"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Est. 1966 &middot; 24 Nations
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Powering the paddle across{' '}
          <span className="text-accent">Asia</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75 text-pretty">
          The Asian Canoe Confederation unites national federations across the
          continent, developing athletes and staging world-class competition in
          sprint, slalom, dragon boat and ocean racing.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:opacity-90"
          >
            View 2026 calendar
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/disciplines"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-white/10"
          >
            Explore disciplines
          </Link>
        </div>
      </div>
    </section>
  )
}
