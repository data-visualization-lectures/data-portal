import { useEffect, useMemo, useState } from 'react'
import type { DataResource, SectionInfo } from './i18n/types'
import { useLanguage } from './i18n/context'

const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

const SectionNavigation = ({
  sectionsList,
  activeId,
}: {
  sectionsList: SectionInfo[]
  activeId: string
}) => {
  const { t } = useLanguage()

  return (
    <nav
      aria-label={t.sectionNavLabel}
      className="pointer-events-none fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {sectionsList.map((section, index) => {
        const isActive = activeId === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`group pointer-events-auto flex items-center gap-3 text-xs tracking-[0.3em] transition ${isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
          >
            <span
              aria-hidden="true"
              className={`h-px w-10 transition-all ${isActive ? 'bg-white' : 'bg-white/40 group-hover:w-12'
                }`}
            />
            <span className="font-medium">
              {index + 1}&nbsp;/&nbsp;{section.scope}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

const MobileStepper = ({ sectionsList }: { sectionsList: SectionInfo[] }) => (
  <div className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] backdrop-blur lg:hidden">
    {sectionsList.map((section) => (
      <a key={section.id} href={`#${section.id}`} className="text-white/70">
        {section.level}
      </a>
    ))}
  </div>
)

const DataResourceCard = ({ resource }: { resource: DataResource }) => {
  const { t } = useLanguage()
  const downloadLinks = resource.downloadLinks ?? []

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
      <div className="flex flex-wrap gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/60">
        {(resource.filterTags ?? []).map((tag) => (
          <span key={`${resource.name}-${tag}`} className="border border-white/20 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
      <p className="font-serif text-2xl font-semibold text-white">{resource.name}</p>
      <p className="text-sm text-white/60">
        {t.sourceLabel}{' '}
        <a
          href={resource.sourceUrl ?? downloadLinks[0]?.href ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="text-white underline-offset-4 transition hover:text-accent"
        >
          {resource.source}
        </a>
      </p>
      <p className="text-sm leading-relaxed text-white/80">{resource.description}</p>
      {downloadLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-900">
          {downloadLinks.map((link) => {
            const downloadName = link.downloadName ?? link.href.split('/').pop() ?? 'dataset'
            return (
              <a
                key={`${resource.name}-${link.label}`}
                href={link.href}
                download={downloadName}
                className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] transition hover:bg-accent hover:text-slate-900"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </article>
  )
}

const DataSection = ({ section }: { section: SectionInfo }) => {
  const { t } = useLanguage()
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter],
    )
  }

  const clearFilters = () => setSelectedFilters([])

  const filteredResources = useMemo(() => {
    if (!selectedFilters.length) return section.dataResources

    return section.dataResources.filter((resource) => {
      const tags = resource.filterTags ?? []
      if (!tags.length) return true
      return tags.some((tag) => selectedFilters.includes(tag))
    })
  }, [section.dataResources, selectedFilters])

  return (
    <section
      id={section.id}
      className="relative isolate flex min-h-screen items-center py-24"
      aria-label={`${section.level} ${section.scope}`}
    >
      <div className="absolute inset-0">
        <img
          src={section.backgroundUrl}
          alt=""
          className="h-full w-full object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${section.overlay}`} aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-5">
          <p className="text-sm font-medium text-accent">{section.title}</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{section.scope}</h2>
          <p className="text-base text-white/80 sm:text-lg">{section.summary}</p>
        </div>

        {section.filters && section.filters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
            {section.filters.map((filter) => {
              const isActive = selectedFilters.includes(filter)
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => toggleFilter(filter)}
                  className={`rounded-full border px-4 py-1 transition ${isActive
                    ? 'border-white bg-white/20 text-white'
                    : 'border-white/20 text-white/70 hover:border-white hover:text-white'
                    }`}
                >
                  {filter}
                </button>
              )
            })}
            {selectedFilters.length > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full border border-white/0 px-3 py-1 text-[0.6rem] tracking-[0.4em] text-white/60 underline-offset-4 hover:text-white"
              >
                {t.clearFilters}
              </button>
            )}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {section.dataResources.length === 0 ? (
            <p className="col-span-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-white/70">
              {t.emptyStateNoData}
            </p>
          ) : filteredResources.length ? (
            filteredResources.map((resource) => (
              <DataResourceCard key={`${section.id}-${resource.name}`} resource={resource} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-white/70">
              {t.emptyStateNoMatch}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

const App = () => {
  const { sections, t, locale, setLocale } = useLanguage()
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    document.title = `${t.siteSubtitle} | DataViz.JP`
    document.documentElement.lang = locale
  }, [locale, t.siteSubtitle])

  return (
    <div className="relative overflow-x-hidden bg-midnight text-white">
      <a
        href="#global"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
      >
        {t.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-[var(--auth-header-height)] z-40 border-b border-white/10 bg-midnight/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">DataViz.JP</p>
            <p className="font-serif text-xl">{t.siteSubtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLocale(locale === 'ja' ? 'en' : 'ja')}
              className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
            >
              {locale === 'ja' ? 'English' : '日本語'}
            </button>
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 md:hidden">
              Menu
            </button>
          </div>
        </div>
      </header>

      <SectionNavigation sectionsList={sections} activeId={activeSection} />

      <main className="pt-[calc(var(--auth-header-height)_+_4rem)]">
        {sections.map((section) => (
          <DataSection key={section.id} section={section} />
        ))}
      </main>

      <footer id="footer" className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-white/50">
        <p>&copy; <a href="https://visualizing.jp/" target="_blank">Visualizing.JP</a> | <a href="https://www.dataviz.jp/" target="_blank">Dataviz.JP</a></p>
      </footer>

      <MobileStepper sectionsList={sections} />
    </div>
  )
}

export default App
