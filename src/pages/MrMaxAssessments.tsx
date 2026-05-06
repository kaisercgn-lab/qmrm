import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const MrMaxAssessments = () => {
  const { locale } = useLocale()
  const t = content[locale]

  const pageTitle = locale === 'de' ? 'Strukturierte Prüfungen' : 'Structured Assessments'
  const pageSubtitle = locale === 'de' 
    ? 'Wissensabfragen und Zertifikate zur Dokumentation der Lernfortschritte.' 
    : 'Knowledge tests and certificates to document learning progress.'

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
              ? 'Unsere Prüfungs- und Zertifizierungsplattform befindet sich im Aufbau. Bald können Sie hier Ihr Wissen testen.'
              : 'Our assessment and certification platform is under construction. You will be able to test your knowledge here soon.'}
          </p>
        </div>
      </Section>
    </div>
  )
}
