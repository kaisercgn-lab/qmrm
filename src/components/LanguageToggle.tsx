import { useLocale } from '../i18n'

export const LanguageToggle = () => {
  const { locale, setLocale } = useLocale()

  return (
    <div className="language-toggle" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={locale === 'de' ? 'active' : ''}
        onClick={() => setLocale('de')}
        aria-pressed={locale === 'de'}
      >
        DE
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === 'en' ? 'active' : ''}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
