import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { memberNations, type MemberNation } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Member Nations',
  description:
    'The 24 national federations that make up the Asian Canoe Confederation, organised across five sub-regions of Asia.',
}

const regionOrder: MemberNation['region'][] = [
  'East Asia',
  'Southeast Asia',
  'South Asia',
  'Central Asia',
  'West Asia',
]

export default function MembersPage() {
  const byRegion = regionOrder.map((region) => ({
    region,
    nations: memberNations
      .filter((n) => n.region === region)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }))

  return (
    <main>
      <PageHero
        eyebrow="Member federations"
        title="24 nations, one confederation"
        description="From the shores of the Pacific to the Gulf, ACC member federations span five sub-regions and represent thousands of paddlers."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          {byRegion.map(({ region, nations }) => (
            <div key={region}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-4 w-1 bg-accent" aria-hidden="true" />
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  {region}
                </h2>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  {nations.length}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {nations.map((nation) => (
                  <div
                    key={nation.code}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary font-display text-sm font-bold tracking-wide text-primary-foreground">
                      {nation.code}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display font-semibold uppercase tracking-tight text-foreground">
                        {nation.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Member since {nation.joined}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-secondary/50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
            Becoming a member
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-pretty">
            National canoe federations recognised by their National Olympic
            Committee may apply for ACC membership. Contact the secretariat at{' '}
            <a
              href="mailto:secretariat@asiancanoe.org"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              secretariat@asiancanoe.org
            </a>{' '}
            for the application process.
          </p>
        </div>
      </section>
    </main>
  )
}
