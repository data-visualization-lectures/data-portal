import { useEffect, useMemo, useState } from 'react'

type Metric = {
  label: string
  value: string
  detail: string
  trend?: string
}

type ActionLink = {
  label: string
  href: string
  variant?: 'primary' | 'ghost'
}

type SectionInfo = {
  id: string
  level: string
  scope: string
  title: string
  summary: string
  backgroundUrl: string
  overlay: string
  metrics: Metric[]
  focusAreas: string[]
  tags: string[]
  filters?: string[]
  actions: ActionLink[]
}

const sections: SectionInfo[] = [
  {
    id: 'global',
    level: '1段目',
    scope: '世界視点',
    title: '世界の中の日本',
    summary:
      '人口動態・GDP・温室効果ガスといった主要指標から、日本が世界のなかでどの位置にいるのかを俯瞰します。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-sky-900/40',
    metrics: [
      {
        label: '世界人口に占める割合',
        value: '1.6%',
        trend: '+0.1pt / 10年',
        detail: '1億2,437万人 (2024推計)',
      },
      {
        label: 'GDPシェア',
        value: '4.0%',
        trend: '世界4位',
        detail: 'IMF 2023',
      },
      {
        label: '再エネ導入量',
        value: '90GW',
        trend: '+12% / 年',
        detail: 'IEA 2024',
      },
      {
        label: '人間開発指数',
        value: '0.925',
        trend: '上昇基調',
        detail: 'UNDP 2023',
      },
    ],
    focusAreas: ['人口動態', '経済・貿易', 'サステナビリティ'],
    tags: ['World Bank', 'IMF', 'IEA'],
    filters: ['データソース', '指標カテゴリ', 'ユニット'],
    actions: [
      { label: 'グローバル指標ダッシュボード', href: '#global', variant: 'primary' },
      { label: 'データ辞書', href: '#footer', variant: 'ghost' },
    ],
  },
  {
    id: 'regions',
    level: '2段目',
    scope: '広域自治体 (都道府県)',
    title: '地域ブロックでみる日本',
    summary:
      '道府県別の経済規模や産業構成、エネルギー需給、観光データを集約し、地域間の強みと課題を一目で比較できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-emerald-900/40',
    metrics: [
      {
        label: '域内総生産トップ',
        value: '東京 ¥112兆',
        trend: '+4.8% / 年',
        detail: '名目 (2022)',
      },
      {
        label: '高齢化率中央値',
        value: '29.1%',
        trend: '最小: 東京23区',
        detail: '地方構造調査',
      },
      {
        label: '再エネ自給率',
        value: '38% 北海道',
        trend: '前年比 +3pt',
        detail: 'エネ庁 2023',
      },
      {
        label: '訪日客消費',
        value: '¥5.5兆',
        trend: '+24% / 年',
        detail: '観光庁 2024Q2',
      },
    ],
    focusAreas: ['マクロ経済', '産業集積', 'モビリティ'],
    tags: ['RESAS', '観光庁', '経産省'],
    filters: ['地方区分', '人口規模', '産業クラスター'],
    actions: [
      { label: '都道府県比較プレイグラウンド', href: '#regions', variant: 'primary' },
      { label: '指標セットをエクスポート', href: '#', variant: 'ghost' },
    ],
  },
  {
    id: 'municipalities',
    level: '3段目',
    scope: '基礎自治体 (市区町村)',
    title: '都市とコミュニティの姿',
    summary:
      '財政指標、教育・福祉、モビリティデータを掛け合わせ、市区町村のポートフォリオを探索・比較できます。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-indigo-900/70 to-indigo-900/30',
    metrics: [
      {
        label: '住民基本台帳人口',
        value: '1,724市区町村',
        trend: '-0.5% / 年',
        detail: '2024年1月1日時点',
      },
      {
        label: '財政健全化判断比率',
        value: '3.1%',
        trend: '警戒ライン 14%',
        detail: '総務省 2023',
      },
      {
        label: '待機児童ゼロ自治体',
        value: '68%',
        trend: '+5pt / 年',
        detail: '厚労省 2024',
      },
      {
        label: '公共交通充足率',
        value: '79路線',
        trend: '減便幅 ▲2%',
        detail: '国交省 2023',
      },
    ],
    focusAreas: ['財政・行政サービス', '子育て・教育', '都市交通'],
    tags: ['e-Stat', '国交省', '総務省'],
    filters: ['政令市', '中核市', '町村'],
    actions: [
      { label: '自治体プロフィールを見る', href: '#municipalities', variant: 'primary' },
      { label: 'CSVでダウンロード', href: '#', variant: 'ghost' },
    ],
  },
  {
    id: 'neighborhoods',
    level: '4段目',
    scope: '町丁・字レベル',
    title: '暮らしの肌感に迫る粒度',
    summary:
      '街区単位の人口密度や土地利用、災害リスク、商業集積を重ね合わせ、都市計画・エリアマネジメントに役立つ洞察を提供します。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80&sat=-60&blend=111827&blend-mode=overlay',
    overlay: 'from-slate-950/95 via-purple-900/70 to-fuchsia-900/40',
    metrics: [
      {
        label: '町丁・字数',
        value: '217,256',
        trend: '国勢調査 2020',
        detail: '可視化対象エリア',
      },
      {
        label: '昼夜間人口差',
        value: '最大 4.8倍',
        trend: '大都市圏',
        detail: '携帯位置情報 2024',
      },
      {
        label: '建物耐震指標',
        value: '偏差 ±0.12',
        trend: '更新率 +3pt',
        detail: '国交省 2023',
      },
      {
        label: '商業集積スコア',
        value: '82/100',
        trend: '伸長中',
        detail: 'POS + ナビログ',
      },
    ],
    focusAreas: ['人口密度ヒートマップ', '生活インフラ', '防災・レジリエンス'],
    tags: ['街区レベルメッシュ', '携帯位置情報', '建物台帳'],
    filters: ['昼夜間', '用途地域', '災害リスク'],
    actions: [
      { label: 'ヒートマップを開く', href: '#neighborhoods', variant: 'primary' },
      { label: 'ジオJSONを取得', href: '#', variant: 'ghost' },
    ],
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

const ActionButton = ({ action }: { action: ActionLink }) => {
  const baseClass =
    'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

  if (action.variant === 'ghost') {
    return (
      <a
        href={action.href}
        className={`${baseClass} border border-white/30 text-white/80 hover:border-white/60 hover:text-white`}
      >
        {action.label}
      </a>
    )
  }

  return (
    <a href={action.href} className={`${baseClass} bg-white text-slate-900 hover:bg-accent/90`}>
      {action.label}
    </a>
  )
}

const MetricCard = ({ metric }: { metric: Metric }) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-card backdrop-blur">
    <p className="text-xs uppercase tracking-[0.4em] text-white/70">{metric.label}</p>
    <p className="font-serif text-4xl font-semibold text-white">{metric.value}</p>
    {metric.trend && <p className="text-sm text-emerald-300">{metric.trend}</p>}
    <p className="text-xs text-white/70">{metric.detail}</p>
  </div>
)

const DataSection = ({ section }: { section: SectionInfo }) => (
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
      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
        <span className="rounded-full border border-white/30 px-4 py-1">{section.level}</span>
        <span>{section.scope}</span>
      </div>

      <div className="space-y-5">
        <p className="text-sm font-medium text-accent">{section.scope}</p>
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{section.title}</h2>
        <p className="max-w-3xl text-base text-white/80 sm:text-lg">{section.summary}</p>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-white/80">
        {section.focusAreas.map((focus) => (
          <span key={focus} className="rounded-full bg-white/10 px-4 py-1">
            {focus}
          </span>
        ))}
      </div>

      {section.filters && (
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
          {section.filters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-white/20 px-4 py-1 transition hover:border-white hover:text-white"
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {section.metrics.map((metric) => (
          <MetricCard key={`${section.id}-${metric.label}`} metric={metric} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
        {section.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/20 px-4 py-1">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {section.actions.map((action) => (
          <ActionButton key={`${section.id}-${action.label}`} action={action} />
        ))}
      </div>
    </div>
  </section>
)

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
        <p>© {new Date().getFullYear()} Data Portal Prototype. データソースの詳細は各セクションのタグを参照してください。</p>
      </footer>

      <MobileStepper sectionsList={sections} />
    </div>
  )
}

export default App
