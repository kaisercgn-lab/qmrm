import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const MrMaxLibrary = () => {
  const { locale } = useLocale()
  const t = content[locale]

  // We can reuse the title from the features item
  const pageTitle = locale === 'de' ? 'Interaktive Fallbibliothek' : 'Interactive Case Library'
  const pageSubtitle = locale === 'de' 
    ? 'Realistische Befundungsszenarien mit verifizierten Experten-Diagnosen.' 
    : 'Realistic reporting scenarios with verified expert diagnoses.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow="MR-Max"
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--cream)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--teal-dark)' }}>
            {locale === 'de' ? 'In Kürze verfügbar' : 'Coming Soon'}
          </h3>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            {locale === 'de' 
              ? 'Wir bereiten unsere interaktive Fallbibliothek aktuell für Sie vor. Bald finden Sie hier umfangreiche Befundungsszenarien.'
              : 'We are currently preparing our interactive case library. Comprehensive reporting scenarios will be available here soon.'}
          </p>
        </div>
      </Section>
    </div>
  )
}
