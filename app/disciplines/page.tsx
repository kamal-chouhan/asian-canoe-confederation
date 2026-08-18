import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { disciplines } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Disciplines',
  description:
    'Explore the four disciplines governed by the Asian Canoe Confederation: canoe sprint, canoe slalom, dragon boat and ocean racing.',
}

export default function DisciplinesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our sport"
        title="Four disciplines, one paddle nation"
        description="From explosive flat-water sprints to open-ocean endurance, the ACC sanctions competition across the full spectrum of canoe and kayak sport."
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {disciplines.map((d, i) => (
            <section
              key={d.slug}
              id={d.slug}
              className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={cn(
                  'relative aspect-[4/3] overflow-hidden rounded-lg bg-ink',
                  i % 2 === 1 && 'lg:order-2',
                )}
              >
                <Image
                  src={d.image || '/placeholder.svg'}
                  alt={`${d.name} athletes competing`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
              </div>

              <div className={cn(i % 2 === 1 && 'lg:order-1')}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  {d.tagline}
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
                  {d.name}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Championship events
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.events.map((event) => (
                      <span
                        key={event}
                        className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
