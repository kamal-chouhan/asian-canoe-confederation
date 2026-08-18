export type Discipline = {
  slug: string
  name: string
  tagline: string
  image: string
  description: string
  events: string[]
}

export const disciplines: Discipline[] = [
  {
    slug: 'sprint',
    name: 'Canoe Sprint',
    tagline: 'Flat-water speed',
    image: '/images/discipline-sprint.png',
    description:
      'Raced on flat, still water over straight 200m, 500m and 1000m courses. Canoe Sprint is the largest Olympic paddling discipline and the backbone of competitive canoeing across Asia.',
    events: ['K1 200m', 'K1 500m', 'K2 500m', 'C1 1000m', 'K4 500m'],
  },
  {
    slug: 'slalom',
    name: 'Canoe Slalom',
    tagline: 'Whitewater precision',
    image: '/images/discipline-slalom.png',
    description:
      'Athletes negotiate a course of up to 25 hanging gates on turbulent whitewater, combining explosive power with pinpoint boat control against the clock.',
    events: ['K1', 'C1', 'Kayak Cross', 'Team'],
  },
  {
    slug: 'dragon-boat',
    name: 'Dragon Boat',
    tagline: 'Power in unison',
    image: '/images/discipline-dragonboat.png',
    description:
      'Rooted in more than 2,000 years of Asian heritage, Dragon Boat brings crews of 10 and 20 paddlers together in explosive, synchronised sprints steered by a drummer and helm.',
    events: ['200m', '500m', '2000m', 'Mixed crew'],
  },
  {
    slug: 'ocean-racing',
    name: 'Ocean Racing',
    tagline: 'Open-water endurance',
    image: '/images/discipline-ocean.png',
    description:
      'Surfski and ocean-ski athletes race across open sea, reading swell and wind over long-distance courses that reward endurance, seamanship and tactical nerve.',
    events: ['Surfski', 'SUP', 'Long distance'],
  },
]

export type MemberNation = {
  name: string
  code: string
  region: 'East Asia' | 'Southeast Asia' | 'South Asia' | 'Central Asia' | 'West Asia'
  joined: number
}

export const memberNations: MemberNation[] = [
  { name: 'China', code: 'CHN', region: 'East Asia', joined: 1966 },
  { name: 'Japan', code: 'JPN', region: 'East Asia', joined: 1966 },
  { name: 'Republic of Korea', code: 'KOR', region: 'East Asia', joined: 1970 },
  { name: 'Chinese Taipei', code: 'TPE', region: 'East Asia', joined: 1978 },
  { name: 'Hong Kong, China', code: 'HKG', region: 'East Asia', joined: 1980 },
  { name: 'Mongolia', code: 'MGL', region: 'East Asia', joined: 1992 },
  { name: 'Thailand', code: 'THA', region: 'Southeast Asia', joined: 1985 },
  { name: 'Singapore', code: 'SGP', region: 'Southeast Asia', joined: 1988 },
  { name: 'Malaysia', code: 'MAS', region: 'Southeast Asia', joined: 1988 },
  { name: 'Indonesia', code: 'INA', region: 'Southeast Asia', joined: 1986 },
  { name: 'Vietnam', code: 'VIE', region: 'Southeast Asia', joined: 1994 },
  { name: 'Philippines', code: 'PHI', region: 'Southeast Asia', joined: 1990 },
  { name: 'Myanmar', code: 'MYA', region: 'Southeast Asia', joined: 1996 },
  { name: 'India', code: 'IND', region: 'South Asia', joined: 1972 },
  { name: 'Sri Lanka', code: 'SRI', region: 'South Asia', joined: 1998 },
  { name: 'Nepal', code: 'NEP', region: 'South Asia', joined: 2004 },
  { name: 'Bangladesh', code: 'BAN', region: 'South Asia', joined: 2001 },
  { name: 'Kazakhstan', code: 'KAZ', region: 'Central Asia', joined: 1993 },
  { name: 'Uzbekistan', code: 'UZB', region: 'Central Asia', joined: 1994 },
  { name: 'Kyrgyzstan', code: 'KGZ', region: 'Central Asia', joined: 1996 },
  { name: 'Iran', code: 'IRI', region: 'West Asia', joined: 1974 },
  { name: 'Iraq', code: 'IRQ', region: 'West Asia', joined: 2002 },
  { name: 'United Arab Emirates', code: 'UAE', region: 'West Asia', joined: 2006 },
  { name: 'Qatar', code: 'QAT', region: 'West Asia', joined: 2008 },
]

export type ACCEvent = {
  title: string
  discipline: string
  city: string
  country: string
  start: string
  end: string
  category: 'Championship' | 'Continental Cup' | 'Development' | 'Games'
}

export const events: ACCEvent[] = [
  {
    title: 'Asian Canoe Sprint Championships',
    discipline: 'Canoe Sprint',
    city: 'Hangzhou',
    country: 'China',
    start: '2026-05-14',
    end: '2026-05-17',
    category: 'Championship',
  },
  {
    title: 'Asian Slalom Cup — Round 1',
    discipline: 'Canoe Slalom',
    city: 'Tokyo',
    country: 'Japan',
    start: '2026-06-05',
    end: '2026-06-07',
    category: 'Continental Cup',
  },
  {
    title: 'Asian Dragon Boat Championships',
    discipline: 'Dragon Boat',
    city: 'Penang',
    country: 'Malaysia',
    start: '2026-07-23',
    end: '2026-07-26',
    category: 'Championship',
  },
  {
    title: 'Asian Ocean Racing Series Final',
    discipline: 'Ocean Racing',
    city: 'Dubai',
    country: 'United Arab Emirates',
    start: '2026-09-11',
    end: '2026-09-13',
    category: 'Continental Cup',
  },
  {
    title: 'ACC Junior & U23 Championships',
    discipline: 'Canoe Sprint',
    city: 'Pattaya',
    country: 'Thailand',
    start: '2026-10-01',
    end: '2026-10-04',
    category: 'Development',
  },
  {
    title: 'Asian Games — Canoe / Kayak',
    discipline: 'Multi-discipline',
    city: 'Nagoya',
    country: 'Japan',
    start: '2026-11-20',
    end: '2026-11-27',
    category: 'Games',
  },
]

export type NewsItem = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
}

export const news: NewsItem[] = [
  {
    slug: 'hangzhou-championships-record-entry',
    title: 'Record 24-nation entry confirmed for Hangzhou Sprint Championships',
    excerpt:
      'The 2026 Asian Canoe Sprint Championships will welcome the largest field in the confederation\u2019s history as every member nation confirms crews.',
    category: 'Championships',
    date: '2026-04-02',
    author: 'ACC Media',
  },
  {
    slug: 'olympic-pathway-programme',
    title: 'ACC launches expanded Olympic Pathway programme for emerging nations',
    excerpt:
      'A new development fund will provide coaching, equipment and international racing exposure to paddlers from ACC\u2019s smaller federations.',
    category: 'Development',
    date: '2026-03-18',
    author: 'ACC Media',
  },
  {
    slug: 'dragon-boat-heritage-summit',
    title: 'Penang to host inaugural Dragon Boat Heritage Summit',
    excerpt:
      'Officials, historians and athletes will gather to celebrate the cultural roots of dragon boat racing ahead of the Asian Championships.',
    category: 'Dragon Boat',
    date: '2026-03-05',
    author: 'ACC Media',
  },
  {
    slug: 'ocean-racing-series-expands',
    title: 'Asian Ocean Racing Series expands to five stops for 2026',
    excerpt:
      'Coastal rounds in the Gulf, South China Sea and Bay of Bengal will feed a new continental ranking for surfski athletes.',
    category: 'Ocean Racing',
    date: '2026-02-21',
    author: 'ACC Media',
  },
  {
    slug: 'anti-doping-education-drive',
    title: 'Continent-wide clean-sport education drive reaches 1,200 athletes',
    excerpt:
      'The ACC anti-doping commission completes its most extensive athlete education campaign to date across 18 national federations.',
    category: 'Governance',
    date: '2026-02-04',
    author: 'ACC Media',
  },
  {
    slug: 'womens-participation-milestone',
    title: 'Women\u2019s participation hits new high across Asian regattas',
    excerpt:
      'Entries in women\u2019s and mixed categories rose 31% year on year, marking a milestone for the confederation\u2019s equality strategy.',
    category: 'Development',
    date: '2026-01-16',
    author: 'ACC Media',
  },
]

export const stats = [
  { value: '24', label: 'Member nations' },
  { value: '4', label: 'Racing disciplines' },
  { value: '1966', label: 'Founded' },
  { value: '9,000+', label: 'Registered athletes' },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
  { href: '/members', label: 'Members' },
]

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateRange(start: string, end: string) {
  const s = new Date(start)
  const e = new Date(end)
  const sameMonth =
    s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()
  const monthShort = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short' })

  if (sameMonth) {
    return `${s.getDate()} \u2013 ${e.getDate()} ${monthShort(e)} ${e.getFullYear()}`
  }

  const startStr = `${s.getDate()} ${monthShort(s)}`
  const endStr = `${e.getDate()} ${monthShort(e)} ${e.getFullYear()}`
  return `${startStr} \u2013 ${endStr}`
}
