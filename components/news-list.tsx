import { type NewsItem, formatDate } from '@/lib/data'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <span className="text-accent">{item.category}</span>
        <span className="text-muted-foreground">&middot;</span>
        <time className="text-muted-foreground" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold uppercase leading-tight tracking-tight text-foreground text-balance transition-colors group-hover:text-primary">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.excerpt}
      </p>
      <span className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {item.author}
      </span>
    </article>
  )
}

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  )
}
