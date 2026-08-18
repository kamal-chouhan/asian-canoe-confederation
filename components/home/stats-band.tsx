import { stats } from '@/lib/data'

export function StatsBand() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 px-4 py-8 text-center"
          >
            <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
