import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { StatsBand } from '@/components/home/stats-band'
import { DisciplineGrid } from '@/components/discipline-grid'
import { EventList } from '@/components/event-list'
import { NewsCard } from '@/components/news-list'
import { SectionHeading } from '@/components/section-heading'
import { events, news, memberNations } from '@/lib/data'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBand />

      {/* Disciplines */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our sport"
          title="Four disciplines, one continent"
          linkHref="/disciplines"
          linkLabel="All disciplines"
        />
        <DisciplineGrid />
      </section>

      {/* Events + News split */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Calendar"
              title="Upcoming events"
              linkHref="/events"
              linkLabel="Full calendar"
            />
            <EventList items={events.slice(0, 4)} />
          </div>

          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Newsroom" title="Latest" />
            <div className="grid gap-5">
              {news.slice(0, 2).map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
            <Link
              href="/news"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
            >
              All news
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Members strip */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              United across Asia
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              24 member federations
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {memberNations.map((nation) => (
              <span
                key={nation.code}
                className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-ink-foreground/80"
                title={nation.name}
              >
                <span className="font-display font-semibold tracking-wide text-accent">
                  {nation.code}
                </span>
                <span className="ml-2 hidden sm:inline">{nation.name}</span>
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:opacity-90"
            >
              View all members
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-accent" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            Join the movement shaping Asian paddling
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-pretty">
            From grassroots clubs to Olympic podiums, the ACC supports every
            paddler. Discover membership, development programmes and how to get
            involved.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:opacity-90"
          >
            About the confederation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
