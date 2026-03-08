import type { SectionInfo } from '../types'

export const sections: SectionInfo[] = [
  {
    id: 'cosmos',
    level: 'Level 0',
    scope: 'Cosmos',
    title: 'Observing the Pulse of Earth from Space',
    summary:
      'Understanding global dynamics and Japan\'s presence from a cosmic perspective.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-violet-900/70 to-indigo-900/40',
    dataResources: [],
    filters: ['Earth Observation', 'Climate', 'Space Weather', 'Satellite Data'],
  },
  {
    id: 'global',
    level: 'Level 1',
    scope: 'Global',
    title: 'Japan\'s Position in the World',
    summary:
      'An overview of where Japan stands globally through key indicators.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-sky-900/40',
    dataResources: [
      {
        name: 'Gapminder',
        source: 'Plotly',
        sourceUrl:
          'https://github.com/data-visualization-lectures/plotly-datasets?tab=readme-ov-file',
        description:
          'International comparison of national power (GDP, life expectancy) over the long term since the postwar era.',
        filterTags: ['Population & Society', 'Economy'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/1_global/gapminder/gapminder_unfiltered.csv',
          },
        ],
      },
    ],
    filters: ['Population & Society', 'Economy', 'Environment', 'Human Development'],
  },
  {
    id: 'regions',
    level: 'Level 2',
    scope: 'Prefectures',
    title: 'Regional Portfolio by Prefecture',
    summary:
      'Compare regional strengths and challenges at a glance using prefecture-level data.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-slate-900/70 to-emerald-900/40',
    dataResources: [
      {
        name: 'Japan Map',
        source: 'Geospatial Information Authority of Japan (GSI)',
        sourceUrl: '',
        description:
          'A well-maintained map of Japan by prefecture.',
        filterTags: ['Map'],
        downloadLinks: [
          {
            label: 'GeoJSON',
            href: '/datasets/2_regions/land/japan.geojson',
          },
        ],
      },
      {
        name: 'SSDSE (Standard Statistical Dataset for Education)',
        source: 'National Statistics Center',
        sourceUrl: 'https://www.nstac.go.jp/use/literacy/ssdse/',
        description:
          'Statistical data created and published by the National Statistics Center as general-purpose material for data analysis.',
        filterTags: ['Statistics', 'Household', 'Society', 'Climate'],
        downloadLinks: [
          {
            label: 'SSDSE C - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1J1PMktKcNssBfz_W-0YfuLQdAODwevG84GvlVSpjWLw/edit?usp=sharing',
          },
          {
            label: 'SSDSE E - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1qg4vJxdkOGdjI3DPwTNfdfLdqItYTFvnDy2AtNdGUqU/edit?usp=sharing',
          },
        ],
      },
    ],
    filters: ['Statistics', 'Household', 'Society', 'Climate', 'Map'],
  },
  {
    id: 'municipalities',
    level: 'Level 3',
    scope: 'Municipalities',
    title: 'Living Structures through Local Governments',
    summary:
      'Understand regional strengths and challenges using municipality-level data.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-indigo-900/70 to-indigo-900/30',
    dataResources: [
      {
        name: 'Airbnb Listings',
        source: 'Get the Data | Inside Airbnb',
        sourceUrl: 'https://insideairbnb.com/get-the-data/',
        description:
          'Summary information and metrics for Airbnb listings in Tokyo.',
        filterTags: ['Housing', 'Travel'],
        downloadLinks: [
          {
            label: 'Tokyo - Dropbox',
            href: 'https://www.dropbox.com/scl/fo/1ki93eloc09vzk64froln/AAI1vK_v5gfdONf-6ZIPqj8?rlkey=bbh0qljzvpl060vx53sxc5fnv&st=k94o51nz&dl=0',
          },
        ],
      },
      {
        name: 'Starbucks Store List',
        source: 'Store Locator | Starbucks Coffee Japan',
        sourceUrl: 'https://store.starbucks.co.jp/',
        description:
          'Store information in Tokyo published on the official website (coordinates not included).',
        filterTags: ['Food & Drink'],
        downloadLinks: [
          {
            label: '23 Special Wards - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1braD7p5SRfQKxLTOOKmTpy7-sCcdB7naFkrjyon35Fs/edit?usp=sharing',
          },
          {
            label: 'Tama Area - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1CNqgp-hWcrYe1Bg0LJwpuKzGyUwoseL8SAbsDdCsyes/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Tokyo (23 Wards & Tama) Map',
        source: 'Geospatial Information Authority of Japan (GSI)',
        sourceUrl: '',
        description:
          'A well-maintained map of Tokyo (23 Wards & Tama) by municipality.',
        filterTags: ['Map'],
        downloadLinks: [
          {
            label: 'GeoJSON',
            href: '/datasets/3_municipalities/land/13a.geojson',
          },
        ],
      },
      {
        name: 'Kanagawa Prefecture Map',
        source: 'Geospatial Information Authority of Japan (GSI)',
        sourceUrl: '',
        description:
          'A well-maintained map of Kanagawa Prefecture by municipality.',
        filterTags: ['Map'],
        downloadLinks: [
          {
            label: 'GeoJSON',
            href: '/datasets/3_municipalities/land/14.geojson',
          },
        ],
      },
    ],
    filters: ['Housing', 'Travel', 'Food & Drink', 'Map'],
  },
  {
    id: 'neighborhoods',
    level: 'Level 4',
    scope: 'Neighborhoods',
    title: 'Observing the Urban Pulse at Block Level',
    summary:
      'Understand the characteristics of small areas around you.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1689075326462-581d7705c0ef?auto=format&fit=crop&w=1920&q=80&blend=0f172a&blend-mode=multiply',
    overlay: 'from-slate-900/70 via-amber-700/30 to-white/10',
    dataResources: [],
    filters: ['Population Density', 'Mobility', 'Disaster Prevention', 'Urban Planning'],
  },
  {
    id: 'communities',
    level: 'Level 5',
    scope: 'Communities',
    title: 'Knowledge Uniting Local Actions',
    summary:
      'Collecting open data published by local communities and private projects to understand grassroots initiatives and needs.',
    backgroundUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1920&q=80',
    overlay: 'from-slate-950/95 via-rose-900/70 to-orange-900/40',
    dataResources: [
      {
        name: 'Spotify Track Features',
        source: 'Kaggle',
        sourceUrl:
          'https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset/data',
        description:
          'A dataset of Spotify tracks across various genres and their audio features.',
        filterTags: ['Music'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/spotify/spotify.csv',
          },
        ],
      },
      {
        name: 'Osamu Tezuka - MW',
        source: 'Collected by: Yuichi Yazaki',
        sourceUrl: '',
        description:
          'Network data of the characters in the manga MW and their relationships.',
        filterTags: ['Manga', 'Network'],
        downloadLinks: [
          {
            label: 'Single File - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/18q4P2B_DgP3ea8uS3QO8aXD79PzniasFh6NQb6Bj-4Y/edit?usp=sharing',
          },
          {
            label: 'Two Files - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1Okd9c5LNg_utk9u__snrJAaXARIurlvyFU-vpIIKgJY/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Koshien Players\' Hometowns',
        source: '',
        sourceUrl: '',
        description:
          'Where the 20 bench players of Koshien tournament teams come from by prefecture.',
        filterTags: ['Sports', 'Network'],
        downloadLinks: [
          {
            label: 'Single File - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1yyb7wgHJ8jBYt-RX6fvWomyEbVepPBVXBxEI-he3TTU/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'The Complete Guide to Data Visualization - Table of Contents',
        source: 'Shoeisha',
        sourceUrl: 'https://www.shoeisha.co.jp/book/detail/9784798183688',
        description:
          'The table of contents of this book structured as tree data.',
        filterTags: ['Books', 'Tree'],
        downloadLinks: [
          {
            label: 'Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1HGQcZ-3FdO7kiY7Nc7ECZOkvh5EJFKDrvw5I9IM3a-Q/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'IBM Employee Attrition & Performance',
        source: 'Kaggle',
        sourceUrl:
          'https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset',
        description:
          'A fictional dataset created by IBM data scientists. Various employee attributes consolidated in a single table.',
        filterTags: ['HR'],
        downloadLinks: [
          {
            label: 'CSV',
            href: '/datasets/5_communities/employee/employee.csv',
          },
        ],
      },
      {
        name: 'Amazon Reviews: The University of Money',
        source: 'Amazon',
        sourceUrl: '',
        description:
          'Review text and ratings data for this book.',
        filterTags: ['Books'],
        downloadLinks: [
          {
            label: 'Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1BngoaaBmLiYZmOP9Qep54Bo05Hs-il_b7KwkbsZBiaw/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Amazon Reviews: The Richest Man in Babylon (Manga)',
        source: 'Amazon',
        sourceUrl: '',
        description:
          'Review text and ratings data for this book.',
        filterTags: ['Books'],
        downloadLinks: [
          {
            label: 'Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/1iWj1gqls5wZvnyGMM4oyL_4rwSMH3_WK74jqwepjE6I/edit?usp=sharing',
          },
        ],
      },
    ],
    filters: ['Music', 'Books', 'Manga', 'HR', 'Sports', 'Tree', 'Network'],
  },
]
