import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import type { Locale, UITranslations, SectionInfo } from './types'
import { ui as jaUI } from './translations/ja'
import { ui as enUI } from './translations/en'
import { sections as jaSections } from './sections/ja'
import { sections as enSections } from './sections/en'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UITranslations
  sections: SectionInfo[]
}

const translationMap: Record<Locale, UITranslations> = { ja: jaUI, en: enUI }
const sectionsMap: Record<Locale, SectionInfo[]> = { ja: jaSections, en: enSections }

function detectLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored === 'ja' || stored === 'en') return stored
  return navigator.language.startsWith('en') ? 'en' : 'ja'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem('locale', newLocale)
    setLocaleState(newLocale)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translationMap[locale],
      sections: sectionsMap[locale],
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
