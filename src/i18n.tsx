import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content, type Locale } from './content'

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
} | null>(null)

const readStoredLocale = (): Locale => {
  if (typeof window === 'undefined') return 'de'
  const stored = window.localStorage.getItem('locale')
  return stored === 'en' || stored === 'de' ? stored : 'de'
}

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem('locale', locale)
    document.title = content[locale].meta.siteTitle
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
