import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const ConsultationProcess = () => {
  const { locale } = useLocale()
  const t = content[locale]

  const pageTitle = locale === 'de' ? 'Prozessdesign' : 'Process Design'
  const pageSubtitle = locale === 'de' 
    ? 'Entwicklung reibungsloser Workflows von der Terminvergabe bis zur strukturierten Befundübermittlung.' 
    : 'Development of smooth workflows from scheduling to structured report delivery.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Beratung' : 'Consulting'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.consultationHero}
      />

      <Section title={pageTitle}>
        <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--cream)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--teal-dark)' }}>
            {locale === 'de' ? 'In Kürze verfügbar' : 'Coming Soon'}
          </h3>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            {locale === 'de' 
              ? 'Detaillierte Informationen zu unserem Prozessdesign folgen bald.'
              : 'Detailed information regarding our process design will be available soon.'}
          </p>
        </div>
      </Section>
    </div>
  )
}
