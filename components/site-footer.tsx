import Link from 'next/link'
import { navLinks } from '@/lib/data'
import { SiteLogo } from '@/components/site-logo'

const disciplineLinks = [
  { href: '/disciplines#sprint', label: 'Canoe Sprint' },
  { href: '/disciplines#slalom', label: 'Canoe Slalom' },
  { href: '/disciplines#dragon-boat', label: 'Dragon Boat' },
  { href: '/disciplines#ocean-racing', label: 'Ocean Racing' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <SiteLogo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              The continental governing body for canoe and kayak sport across
              Asia, recognised by the International Canoe Federation.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Disciplines
            </h3>
            <ul className="mt-4 space-y-2">
              {disciplineLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Headquarters
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-ink-foreground/70">
              <p>Asian Canoe Confederation</p>
              <p>Olympic Council Building</p>
              <p>Kuala Lumpur, Malaysia</p>
              <p className="pt-2">secretariat@asiancanoe.org</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Asian Canoe Confederation. All
            rights reserved.
          </p>
          <p>A member of the International Canoe Federation (ICF).</p>
        </div>
      </div>
    </footer>
  )
}
