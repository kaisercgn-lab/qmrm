import React from 'react'
import { useLocale } from '../i18n'

export const LanguageToggle = () => {
  const { locale, setLocale } = useLocale()

  return (
    <div className="language-toggle" role="group" aria-label="Language toggle">
      {(['de', 'en', 'ru', 'tr', 'fr', 'es'] as const).map((lang, index, arr) => (
        <React.Fragment key={lang}>
          <button
            type="button"
            className={locale === lang ? 'active' : ''}
            onClick={() => setLocale(lang)}
            aria-pressed={locale === lang}
          >
            {lang.toUpperCase()}
          </button>
          {index < arr.length - 1 && <span aria-hidden="true">/</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
