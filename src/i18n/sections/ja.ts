import type { SectionInfo } from '../types'

export const sections: SectionInfo[] = [
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
    dataResources: [],
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
        name: 'Gapminder',
        source: 'Plotly',
        sourceUrl:
          'https://github.com/data-visualization-lectures/plotly-datasets?tab=readme-ov-file',
        description: '戦後以降の長期間における国力（GDPや平均寿命）の国際比較',
        filterTags: ['人口・社会', '経済'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/1_global/gapminder/gapminder_unfiltered.csv',
          },
        ],
      },
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
        name: '日本地図',
        source: '国土交通省 国土地理院',
        sourceUrl: '',
        description: '使いやすく手入れされた都道府県別の日本地図。',
        filterTags: ['地図'],
        downloadLinks: [
          {
            label: 'GeoJSON',
            href: '/datasets/2_regions/land/japan.geojson',
          },
        ],
      },
      {
        name: 'SSDSE（教育用標準データセット）',
        source: '独立行政法人 統計センター',
        sourceUrl: 'https://www.nstac.go.jp/use/literacy/ssdse/',
        description:
          'データ分析のための汎用素材として、独立行政法人統計センターが作成・公開している統計データです。',
        filterTags: ['統計', '家計', '社会', '気候'],
        downloadLinks: [
          {
            label: 'SSDSE C・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/17GxwwUxYJWrbX_Lsx8zoN2hPuImjmwFfcDo5hBnrRyk/edit?usp=sharing',
          },
          {
            label: 'SSDSE E・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1yQN9UEITh9prtWi-gMZJbf7j30ExUXzGTTPncKjVlMc/edit?usp=sharing',
          },
        ],
      },
    ],
    filters: ['統計', '家計', '社会', '気候', '地図'],
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
        name: 'Starbucks 店舗リスト',
        source: '店舗検索｜スターバックス コーヒー ジャパン',
        sourceUrl: 'https://store.starbucks.co.jp/',
        description:
          '公式サイトで公開されている東京都における店舗情報（緯度経度は含みません）。',
        filterTags: ['飲食'],
        downloadLinks: [
          {
            label: '特別区23区・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1qILkYLhNJ6Hzu8uO-MTKJndNAkij6pf9eqmfGUnu3Pk/edit?usp=sharing',
          },
          {
            label: '多摩地区・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1UfyW3cGp9eAfSpNJPtsGxxxSYb95_-o4Z7M_gHIxn54/edit?usp=sharing',
          },
        ],
      },
    ],
    filters: ['住居', '旅行', '飲食', '地図'],
  },
  {
    id: 'neighborhoods',
    level: '4段目',
    scope: '町丁視点',
    title: '町丁レベルで観測する都市の鼓動',
    summary: '身の回りの小さな区域の特性を理解しよう。',
    backgroundUrl:
      'https://images.unsplash.com/photo-1689075326462-581d7705c0ef?auto=format&fit=crop&w=1920&q=80&blend=0f172a&blend-mode=multiply',
    overlay: 'from-slate-900/70 via-amber-700/30 to-white/10',
    dataResources: [],
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
        name: 'Spotifyで公開されている楽曲の特徴',
        source: 'Kaggle',
        sourceUrl:
          'https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset/data',
        description:
          'さまざまなジャンルのSpotifyの曲とそのオーディオ特徴のデータセット。',
        filterTags: ['音楽'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/spotify/spotify.csv',
          },
        ],
      },
      {
        name: '手塚治虫 - MW',
        source: '収集：矢崎裕一',
        sourceUrl: '',
        description:
          '漫画MWの登場人物と彼ら同士の関係性をネットワーク・データにしたものです。',
        filterTags: ['漫画', 'ネットワーク'],
        downloadLinks: [
          {
            label: '1ファイル版・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1TNn_HiKVKuVwIojqvRF6u1_uZD67pm-fGJtNsLAwb2Q/edit?usp=sharing',
          },
          {
            label: '2ファイル版・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/15Z8Y9TIe4Lx17U_IOYp0UfWrKevzz-3CiospEBIE3WU/edit?usp=sharing',
          },
        ],
      },
      {
        name: '甲子園出場者の出身地',
        source: '',
        sourceUrl: '',
        description: '甲子園出場校のベンチ入り20名がどの都道府県出身なのか',
        filterTags: ['スポーツ', 'ネットワーク'],
        downloadLinks: [
          {
            label: '1ファイル版・Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1HdfkDOGBovb-YT1kOxqdu5mFr3KGKXbreD0c8HyjxOU/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'IBM 従業員の離職率とパフォーマンス',
        source: 'Kaggle',
        sourceUrl:
          'https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset',
        description:
          'IBMのデータサイエンティストが作成した架空のデータセット。従業員の様々な属性を一つの表データにしています。',
        filterTags: ['人事'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/employee/employee.csv',
          },
        ],
      },
    ],
    filters: [
      '音楽',
      '書籍',
      '漫画',
      '人事',
      'スポーツ',
      'ツリー',
      'ネットワーク',
    ],
  },
]
