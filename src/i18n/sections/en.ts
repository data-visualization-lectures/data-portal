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
    dataResources: [],
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
    dataResources: [],
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
            href: 'https://docs.google.com/spreadsheets/d/1TNn_HiKVKuVwIojqvRF6u1_uZD67pm-fGJtNsLAwb2Q/edit?usp=sharing',
          },
          {
            label: 'Two Files - Spreadsheet',
            href: 'https://docs.google.com/spreadsheets/d/15Z8Y9TIe4Lx17U_IOYp0UfWrKevzz-3CiospEBIE3WU/edit?usp=sharing',
          },
        ],
      },
    ],
    filters: ['Music', 'Books', 'Manga', 'HR', 'Sports', 'Tree', 'Network'],
  },
]
