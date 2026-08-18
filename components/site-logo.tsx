import Link from 'next/link'
import { cn } from '@/lib/utils'

export function SiteLogo({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label="Asian Canoe Confederation home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent-foreground"
          aria-hidden="true"
        >
          <path d="M3 8c3.5 2 6.5 2 9 0s5.5-2 9 0" />
          <path d="M3 14c3.5 2 6.5 2 9 0s5.5-2 9 0" />
          <path d="M17 3l-9 9" />
          <path d="M14 3h3v3" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-bold uppercase tracking-tight',
            variant === 'light' ? 'text-ink-foreground' : 'text-ink',
          )}
        >
          Asian Canoe
        </span>
        <span
          className={cn(
            'font-display text-sm font-medium uppercase tracking-[0.28em]',
            variant === 'light' ? 'text-accent' : 'text-primary',
          )}
        >
          Confederation
        </span>
      </span>
    </Link>
  )
}
