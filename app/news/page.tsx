import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { NewsList } from '@/components/news-list'
import { news, formatDate } from '@/lib/data'

export const metadata: Metadata = {
  title: 'News',
  description:
    'The latest news and announcements from the Asian Canoe Confederation — championships, development, governance and athlete stories.',
}

export default function NewsPage() {
  const sorted = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  const [featured, ...rest] = sorted

  return (
    <main>
      <PageHero
        eyebrow="Newsroom"
        title="Latest from the confederation"
        description="Official announcements, competition updates and stories from across the Asian paddling community."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Featured */}
        <article className="mb-12 overflow-hidden rounded-lg border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 bg-primary p-8 text-primary-foreground sm:p-10">
              <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Featured
              </span>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-primary-foreground/80 text-pretty">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary-foreground/70">
                <span>{featured.category}</span>
                <span>&middot;</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
            </div>
            <div className="hidden items-center justify-center bg-ink p-10 lg:flex">
              <div
                className="h-full w-full rounded-md opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(115deg, var(--color-accent) 0 2px, transparent 2px 26px)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </article>

        <NewsList items={rest} />
      </section>
    </main>
  )
}
