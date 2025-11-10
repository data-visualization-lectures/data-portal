import { useEffect, useMemo, useState } from 'react'

type DataResource = {
  label: string
  name: string
  href: string
  source: string
  description: string
  filterTags?: string[]
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
    title: '軌道上から俯瞰する地球の脈動',
    summary:
      '人工衛星や深宇宙ミッションが捉える観測データを通じて、地球規模のダイナミクスと日本の存在を宇宙視点から理解します。',
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
      {
        label: '国際比較指標',
        name: 'World Development Indicators (Japan subset)',
        href: 'https://databank.worldbank.org/source/world-development-indicators',
        source: 'World Bank',
        description: 'GDP・人口・CO₂排出・貿易など200+指標を1960年以降の時系列で取得できます。',
        filterTags: ['人口・社会', '経済'],
      },
      {
        label: '地球環境',
        name: 'Global Carbon Atlas – Japan Emissions',
        href: 'https://globalcarbonatlas.org/en/CO2-emissions',
        source: 'Global Carbon Project',
        description: '化石燃料・セメント起源のCO₂排出量とプロジェクションを国別にダウンロード可能。',
        filterTags: ['環境'],
      },
      {
        label: '国際経済',
        name: 'IMF World Economic Outlook Dataset',
        href: 'https://www.imf.org/en/Publications/WEO',
        source: 'International Monetary Fund',
        description: '世界190経済のGDP・インフレ・需要項目を年2回更新のExcel/CSVで提供。',
        filterTags: ['経済'],
      },
      {
        label: '人間開発',
        name: 'UNDP Human Development Reports',
        href: 'https://hdr.undp.org/data-center/documentation-and-downloads',
        source: 'United Nations Development Programme',
        description: 'HDI、平均就学年数、ジェンダー指数など社会指標を国際比較できます。',
        filterTags: ['人間開発', '人口・社会'],
      },
    ],
    filters: ['人口・社会', '経済', '環境', '人間開発'],
  },
  {
    id: 'regions',
    level: '2段目',
    scope: '広域自治体 (都道府県)',
    title: '広域自治体で俯瞰する地域ポートフォリオ',
    summary:
      '道府県別のデータをもとに、地域の強みと課題を一目で比較できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-emerald-900/40',
    dataResources: [
      {
        label: '道府県経済',
        name: '県民経済計算（SNA）',
        href: 'https://www.esri.cao.go.jp/jp/sna/kenmin/kenmin_top.html',
        source: '内閣府 経済社会総合研究所',
        description: '都道府県別の名目・実質GDP、所得、雇用指標を1975年以降で提供。',
        filterTags: ['経済'],
      },
      {
        label: '産業構造',
        name: 'RESAS 都道府県別産業分析',
        href: 'https://resas.go.jp/#/growth/indicators',
        source: '内閣官房 地域活性化推進室',
        description: '事業所数・付加価値・雇用シェアを業種×地域でビジュアライズ/CSV取得。',
        filterTags: ['産業', '経済'],
      },
      {
        label: '観光・モビリティ',
        name: '訪日外国人消費動向調査（都道府県別）',
        href: 'https://www.mlit.go.jp/kankocho/siryou/toukei/inbound.html',
        source: '観光庁',
        description: '旅行目的、消費単価、滞在地別の観光統計を四半期更新で公開。',
        filterTags: ['観光'],
      },
      {
        label: 'エネルギー需給',
        name: '再生可能エネルギー出力抑制等情報',
        href: 'https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/renewable/restriction/',
        source: '資源エネルギー庁',
        description: 'エリア別の再エネ導入量・出力制御実績を日別CSVでダウンロード可能。',
        filterTags: ['エネルギー'],
      },
    ],
    filters: ['経済', '産業', '観光', 'エネルギー'],
  },
  {
    id: 'municipalities',
    level: '3段目',
    scope: '基礎自治体 (市区町村)',
    title: '市区町村プロファイルから見る暮らしの構造',
    summary:
      '財政指標、教育・福祉、モビリティデータを掛け合わせ、市区町村のポートフォリオを探索・比較できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-indigo-900/70 to-indigo-900/30',
    dataResources: [
      {
        label: '人口・世帯',
        name: 'e-Stat 住民基本台帳人口移動報告',
        href: 'https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00200241',
        source: '総務省 統計局',
        description: '市区町村別の人口・世帯数・転入転出を年次/四半期でダウンロード。',
        filterTags: ['人口・世帯'],
      },
      {
        label: '財政',
        name: '自治体財政状況資料集',
        href: 'https://www.soumu.go.jp/iken/zaisei/financial_data/index.html',
        source: '総務省 自治財政局',
        description: '経常収支比率や公債費負担比率など財政健全化指標を決算ベースで提供。',
        filterTags: ['財政'],
      },
      {
        label: '子育て・福祉',
        name: '保育所等関連状況取りまとめ',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000061023.html',
        source: '厚生労働省',
        description: '待機児童数、保育定員、認可施設一覧を自治体別に参照・取得可能。',
        filterTags: ['福祉'],
      },
      {
        label: 'モビリティ',
        name: '地域公共交通確保維持改善計画データ',
        href: 'https://www.mlit.go.jp/sogoseisaku/transport/sosei_transport_tk_000080.html',
        source: '国土交通省',
        description: '各自治体の交通ネットワーク、路線維持策、利用者数推移をまとめた資料。',
        filterTags: ['交通'],
      },
    ],
    filters: ['人口・世帯', '財政', '福祉', '交通'],
  },
  {
    id: 'neighborhoods',
    level: '4段目',
    scope: '町丁・字レベル',
    title: '町丁レベルで観測する都市の鼓動',
    summary:
      '身の回りの小さい単位で地域の特性を知ることができます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-purple-900/70 to-fuchsia-900/40',
    dataResources: [
      {
        label: '国勢調査',
        name: '町丁・字等別集計（人口・世帯）',
        href: 'https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00200521',
        source: '総務省 統計局',
        description: '町丁字レベルで人口・世帯・年齢構成を確認できる国勢調査の詳細集計。',
        filterTags: ['人口密度'],
      },
      {
        label: 'モビリティ',
        name: '人流オープンデータ（500mメッシュ）',
        href: 'https://www.mlit.go.jp/pri/od2/',
        source: '国土交通省 × 携帯キャリア各社',
        description: '匿名化した携帯位置情報を用いた昼夜間人口・移動量のメッシュデータ。',
        filterTags: ['モビリティ', '人口密度'],
      },
      {
        label: '防災・リスク',
        name: 'ハザードマップポータルデータセット',
        href: 'https://disaportal.gsi.go.jp/hazardmap/download.html',
        source: '国土地理院',
        description: '洪水・土砂災害・高潮など複数ハザードのポリゴン/ラスターデータを一括取得。',
        filterTags: ['防災'],
      },
      {
        label: '都市計画',
        name: '都市計画基礎調査（土地利用・建物用途）',
        href: 'https://www.mlit.go.jp/toshi/city_plan/toshi_city_plan_tk_000035.html',
        source: '国土交通省 都市局',
        description: '建物用途、容積率、公共施設など都市計画の基礎情報を街区単位で公開。',
        filterTags: ['都市計画'],
      },
    ],
    filters: ['人口密度', 'モビリティ', '防災', '都市計画'],
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

const DataResourceCard = ({ resource }: { resource: DataResource }) => (
  <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur">
    <p className="text-xs uppercase tracking-[0.4em] text-white/60">{resource.label}</p>
    <a
      href={resource.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-start gap-2 font-serif text-2xl font-semibold text-white transition hover:text-accent"
    >
      <span>{resource.name}</span>
      <span aria-hidden="true" className="text-base transition group-hover:translate-x-1">
        ↗
      </span>
    </a>
    <p className="text-sm text-white/60">提供: {resource.source}</p>
    <p className="text-sm leading-relaxed text-white/80">{resource.description}</p>
    {resource.filterTags && resource.filterTags.length > 0 && (
      <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
        {resource.filterTags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    )}
  </article>
)

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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Data Portal</p>
            <p className="font-serif text-xl">Japan Insight Deck</p>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 md:hidden">
            Menu
          </button>
        </div>
      </header>

      <SectionNavigation sectionsList={sections} activeId={activeSection} />

      <main className="pt-24">
        {sections.map((section) => (
          <DataSection key={section.id} section={section} />
        ))}
      </main>

      <footer id="footer" className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-white/50">
        <p>© Visualizing.JP. データソースの詳細は各セクションを参照してください。</p>
      </footer>

      <MobileStepper sectionsList={sections} />
    </div>
  )
}

export default App
