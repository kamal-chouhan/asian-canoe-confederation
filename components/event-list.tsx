import { MapPin } from 'lucide-react'
import { type ACCEvent, formatDateRange } from '@/lib/data'
import { cn } from '@/lib/utils'

const categoryStyles: Record<ACCEvent['category'], string> = {
  Championship: 'bg-accent text-accent-foreground',
  'Continental Cup': 'bg-primary text-primary-foreground',
  Development: 'bg-secondary text-secondary-foreground',
  Games: 'bg-ink text-ink-foreground',
}

export function EventList({ items }: { items: ACCEvent[] }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
      {items.map((event) => {
        const start = new Date(event.start)
        return (
          <li
            key={event.title}
            className="flex flex-col gap-4 p-5 transition-colors hover:bg-secondary/60 sm:flex-row sm:items-center"
          >
            <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-md bg-secondary py-2 text-center">
              <span className="font-display text-2xl font-bold leading-none text-primary">
                {start.toLocaleDateString('en-US', { day: 'numeric' })}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {start.toLocaleDateString('en-US', { month: 'short' })}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
                    categoryStyles[event.category],
                  )}
                >
                  {event.category}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {event.discipline}
                </span>
              </div>
              <h3 className="mt-1.5 font-display text-xl font-semibold uppercase tracking-tight text-foreground">
                {event.title}
              </h3>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {event.city}, {event.country}
              </p>
            </div>

            <div className="shrink-0 text-sm font-medium text-foreground sm:text-right">
              {formatDateRange(event.start, event.end)}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
