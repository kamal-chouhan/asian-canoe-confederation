import type { Metadata } from 'next'
import { Target, Compass, Users, ShieldCheck, Trophy, Globe2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about the Asian Canoe Confederation — its mission, governance, history and role as the continental body for canoe sport in Asia.',
}

const pillars = [
  {
    icon: Trophy,
    title: 'Competition',
    body: 'Sanctioning continental championships and cups that set the standard for canoe sport across Asia.',
  },
  {
    icon: Users,
    title: 'Development',
    body: 'Coaching education, athlete pathways and equipment support for emerging federations.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'Upholding clean sport, fair play and safeguarding through robust governance.',
  },
  {
    icon: Globe2,
    title: 'Unity',
    body: 'Connecting 24 national federations under one continental voice within the ICF.',
  },
]

const timeline = [
  { year: '1966', text: 'Asian Canoe Confederation founded by six pioneering national federations.' },
  { year: '1982', text: 'Canoe sprint debuts on the Asian Games programme.' },
  { year: '1998', text: 'First continental Canoe Slalom Championships staged in East Asia.' },
  { year: '2010', text: 'Dragon Boat formally integrated into the ACC competition structure.' },
  { year: '2019', text: 'Launch of the Olympic Pathway athlete development programme.' },
  { year: '2026', text: 'Membership reaches 24 nations spanning five sub-regions.' },
]

const leadership = [
  { name: 'Dr. Haruki Tan', role: 'President' },
  { name: 'Priya Nair', role: 'Secretary General' },
  { name: 'Chen Wei', role: 'Vice President, Sprint' },
  { name: 'Arman Yusupov', role: 'Vice President, Slalom' },
  { name: 'Siti Rahman', role: 'Chair, Dragon Boat Committee' },
  { name: 'Omar Al-Farsi', role: 'Chair, Ocean Racing Committee' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the ACC"
        title="The continental home of Asian paddling"
        description="Recognised by the International Canoe Federation, the ACC governs, develops and promotes canoe and kayak sport across Asia."
      />

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
              Our mission
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To grow canoe and kayak sport in every corner of Asia by staging
              world-class competition, nurturing talent and championing the
              values of clean, inclusive sport from the grassroots to the
              Olympic Games.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <Compass className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
              Our vision
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              An Asia where paddlers from every nation have the pathway,
              support and opportunity to compete on the world stage — and where
              the continent leads global canoeing in participation and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we do" title="Four guiding pillars" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Since 1966" title="Our journey" />
        <ol className="relative border-l-2 border-border pl-6">
          {timeline.map((item) => (
            <li key={item.year} className="mb-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <span className="font-display text-xl font-bold text-primary">
                {item.year}
              </span>
              <p className="mt-1 max-w-2xl text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Leadership */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Governance" title="Executive board" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {person.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="font-display font-semibold uppercase tracking-tight text-foreground">
                    {person.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
