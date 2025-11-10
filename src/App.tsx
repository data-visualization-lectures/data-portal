import { useEffect, useMemo, useState } from 'react'

type DataResource = {
  name: string
  source: string
  sourceUrl?: string
  description: string
  filterTags?: string[]
  downloadLinks: { label: string; href: string; downloadName?: string }[]
}

type SectionInfo = {
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

const sections: SectionInfo[] = [
  {
    id: 'cosmos',
    level: '0段目',
    scope: '宇宙視点',
    title: '宇宙から俯瞰する地球の脈動',
    summary:
      '地球規模のダイナミクスと日本の存在を、宇宙視点から理解します。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-violet-900/70 to-indigo-900/40',
    dataResources: [
    ],
    filters: ['地球観測', '気候', '宇宙天候', '衛星データ'],
  },
  {
    id: 'global',
    level: '1段目',
    scope: '世界視点',
    title: '世界の中での日本の位置づけ',
    summary:
      '主要指標から、日本が世界のなかでどの位置にいるのかを俯瞰します。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-sky-900/40',
    dataResources: [
    ],
    filters: ['人口・社会', '経済', '環境', '人間開発'],
  },
  {
    id: 'regions',
    level: '2段目',
    scope: '都道府県視点',
    title: '広域自治体で俯瞰する地域ポートフォリオ',
    summary:
      '都道府県別のデータをもとに、地域の強みと課題を一目で比較できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-emerald-900/40',
    dataResources: [
      {
        name: 'SSDSE（教育用標準データセット）',
        source: '独立行政法人 統計センター',
        sourceUrl: 'https://www.nstac.go.jp/use/literacy/ssdse/',
        description: 'データ分析のための汎用素材として、独立行政法人統計センターが作成・公開している統計データです。',
        filterTags: ['統計','家計','社会','気候'],
        downloadLinks: [
          {
            label: 'SSDSE C・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1J1PMktKcNssBfz_W-0YfuLQdAODwevG84GvlVSpjWLw/edit?usp=sharing',
          },
          {
            label: 'SSDSE E・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1qg4vJxdkOGdjI3DPwTNfdfLdqItYTFvnDy2AtNdGUqU/edit?usp=sharing',
          },
        ],
      }
    ],
    filters: ['統計','家計','社会','気候'],
  },
  {
    id: 'municipalities',
    level: '3段目',
    scope: '市区町村視点',
    title: '基礎自治体から見る暮らしの構造',
    summary:
      '市区町村別のデータをもとに、地域の強みや課題などを把握できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-indigo-900/70 to-indigo-900/30',
    dataResources: [
      {
        name: 'Airbnb 物件リスト',
        source: 'Get the Data | Inside Airbnb',
        sourceUrl: 'https://insideairbnb.com/get-the-data/',
        description: 'AirBnB で公開されている東京の物件リストの概要情報と指標。',
        filterTags: ['住居','旅行'],
        downloadLinks: [
          {
            label: '東京都・Dropbox',
            href: 'https://www.dropbox.com/scl/fo/jsdzqj0tixssf44p47ovp/AKNt7z29Kr84TG8pFx4BgpE?rlkey=ftu6986fs00na7w3tf2c6nihb&dl=0',
          },
        ],
      },
      {
        name: 'Starbucks 店舗リスト',
        source: '店舗検索｜スターバックス コーヒー ジャパン',
        sourceUrl: 'https://store.starbucks.co.jp/',
        description: '公式サイトで公開されている東京都における店舗情報（緯度経度は含みません）。',
        filterTags: ['飲食'],
        downloadLinks: [
          {
            label: '特別区23区・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1braD7p5SRfQKxLTOOKmTpy7-sCcdB7naFkrjyon35Fs/edit?usp=sharing',
          },
          {
            label: '多摩地区・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1CNqgp-hWcrYe1Bg0LJwpuKzGyUwoseL8SAbsDdCsyes/edit?usp=sharing',
          }
        ],
      }
    ],
    filters: ['住居','旅行','飲食'],
  },
  {
    id: 'neighborhoods',
    level: '4段目',
    scope: '町丁視点',
    title: '町丁レベルで観測する都市の鼓動',
    summary:
      '身の回りの小さな区域の特性を理解しよう。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1689075326462-581d7705c0ef?auto=format&fit=crop&w=1920&q=80&blend=0f172a&blend-mode=multiply',
    overlay: 'from-slate-900/70 via-amber-700/30 to-white/10',
    dataResources: [
    ],
    filters: ['人口密度', 'モビリティ', '防災', '都市計画'],
  },
  {
    id: 'communities',
    level: '5段目',
    scope: 'コミュニティ視点',
    title: 'ローカルアクションを束ねる知',
    summary:
      '地域コミュニティや民間プロジェクトが公開するオープンデータを集め、草の根の取り組みやニーズを把握します。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-rose-900/70 to-orange-900/40',
    dataResources: [
      {
        name: 'IBM 従業員の離職率とパフォーマンス',
        source: 'Kaggle',
        sourceUrl: 'https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset',
        description: 'IBMのデータサイエンティストが作成した架空のデータセット。従業員の様々な属性を一つの表データにしています。',
        filterTags: ['人事'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/employee/employee.csv',
          },
        ],
      },
      {
        name: 'Spotifyで公開されている楽曲の特徴',
        source: 'Kaggle',
        sourceUrl: 'https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset/data',
        description: 'さまざまなジャンルのSpotifyの曲とそのオーディオ特徴のデータセット',
        filterTags: ['音楽'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/spotify/spotify.csv',
          },
        ],
      }
    ],
    filters: ['人事','音楽'],
  },
]

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
}) => (
  <nav
    aria-label="セクション内移動"
    className="pointer-events-none fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
  >
    {sectionsList.map((section, index) => {
      const isActive = activeId === section.id
      return (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group pointer-events-auto flex items-center gap-3 text-xs tracking-[0.3em] transition ${
            isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-10 transition-all ${
              isActive ? 'bg-white' : 'bg-white/40 group-hover:w-12'
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
        提供:{' '}
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
          <p className="text-sm font-medium text-accent">{section.scope}</p>
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{section.title}</h2>
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
                  className={`rounded-full border px-4 py-1 transition ${
                    isActive
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
                クリア
              </button>
            )}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {section.dataResources.length === 0 ? (
            <p className="col-span-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-white/70">
              この粒度に紐づくデータソースはまだ登録されていません。近日中に公開予定です。
            </p>
          ) : filteredResources.length ? (
            filteredResources.map((resource) => (
              <DataResourceCard key={`${section.id}-${resource.name}`} resource={resource} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-white/70">
              選択されたフィルターに一致するデータセットがありません。条件を緩めてください。
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

const App = () => {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="relative overflow-x-hidden bg-midnight text-white">
      <a
        href="#global"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
      >
        メインコンテンツへ移動
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-midnight/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Data Portal</p>
            <p className="font-serif text-xl">Japan Insight Hub</p>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 md:hidden">
            Menu
          </button>
        </div>
      </header>

      <SectionNavigation sectionsList={sections} activeId={activeSection} />

      <main className="pt-16">
        {sections.map((section) => (
          <DataSection key={section.id} section={section} />
        ))}
      </main>

      <footer id="footer" className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-white/50">
        <p>© <a href="https://visualizing.jp/" target="_blank">Visualizing.JP</a> | <a href="https://www.dataviz.jp/" target="_blank">Dataviz.JP</a></p>
      </footer>

      <MobileStepper sectionsList={sections} />
    </div>
  )
}

export default App
