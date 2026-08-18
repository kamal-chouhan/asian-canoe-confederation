import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EventList } from '@/components/event-list'
import { events } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'The official 2026 competition calendar of the Asian Canoe Confederation — championships, continental cups, development regattas and the Asian Games.',
}

const categories = ['Championship', 'Continental Cup', 'Development', 'Games'] as const

export default function EventsPage() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  )

  return (
    <main>
      <PageHero
        eyebrow="2026 Season"
        title="Competition calendar"
        description="Every sanctioned continental event across the ACC season, from the Sprint Championships in Hangzhou to the Asian Games in Nagoya."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
        <EventList items={sorted} />

        <p className="mt-8 text-sm text-muted-foreground">
          Dates and venues are provisional and subject to confirmation by the
          ACC Events Commission. National federations should refer to official
          bulletins for entry deadlines.
        </p>
      </section>
    </main>
  )
}
