export type Locale = 'ja' | 'en'

export type UITranslations = {
  siteSubtitle: string
  skipToContent: string
  sectionNavLabel: string
  sourceLabel: string
  clearFilters: string
  emptyStateNoData: string
  emptyStateNoMatch: string
}

export type DataResource = {
  name: string
  source: string
  sourceUrl?: string
  description: string
  filterTags?: string[]
  downloadLinks: { label: string; href: string; downloadName?: string }[]
}

export type SectionInfo = {
  id: string
  level: string
  scope: string
  title: string
  summary: string
  backgroundUrl: string
  overlay: string
  dataResources: DataResource[]
  filters?: string[]
}
