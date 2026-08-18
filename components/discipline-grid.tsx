import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { disciplines } from '@/lib/data'

export function DisciplineGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {disciplines.map((d) => (
        <Link
          key={d.slug}
          href={`/disciplines#${d.slug}`}
          className="group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg bg-ink text-ink-foreground"
        >
          <Image
            src={d.image || '/placeholder.svg'}
            alt={`${d.name} athletes in action`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="relative p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {d.tagline}
            </span>
            <h3 className="mt-1 flex items-center gap-1 font-display text-2xl font-bold uppercase tracking-tight">
              {d.name}
              <ArrowUpRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
