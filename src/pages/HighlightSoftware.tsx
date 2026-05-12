import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const HighlightSoftware = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'MR-Max Ausbildungssoftware' : 'MR-Max Training Software'
  const pageSubtitle = locale === 'de' 
    ? 'Ihre interaktive Bibliothek für die Mamma-MRT.' 
    : 'Your interactive library for breast MRI.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Software' : 'Software'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Diagnostische Sicherheit durch Training' : 'Diagnostic Confidence through Training'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  MR-Max ist unsere eigens entwickelte Ausbildungssoftware, die speziell darauf ausgelegt ist, Radiologinnen und Radiologen in der komplexen Befundung der Mamma-MRT zu trainieren.
                </p>
                <p>
                  Mit über 1.000 histologisch verifizierten und strukturiert aufbereiteten Datensätzen bietet die Plattform eine einzigartige Möglichkeit, die eigene Mustererkennung an realen klinischen Fällen zu schärfen. Das Training basiert auf dem "passiven Lernen" am Goldstandard der Pathologie, wodurch die diagnostische Lernkurve drastisch verkürzt wird.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  MR-Max is our proprietary training software specifically designed to train radiologists in the complex reporting of breast MRI.
                </p>
                <p>
                  With over 1,000 histologically verified and structured datasets, the platform offers a unique opportunity to sharpen pattern recognition on real clinical cases. The training is based on "passive learning" against the gold standard of pathology, drastically shortening the diagnostic learning curve.
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Kernfunktionen' : 'Core Features'}
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: 'var(--text)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Interaktive Fallbibliothek mit BI-RADS® Systematik' : 'Interactive case library with BI-RADS® systematics'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Strukturierte Self-Assessments und Prüfungen' : 'Structured self-assessments and exams'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Zugriff auf etablierte Protokolle und Sequenzparameter' : 'Access to established protocols and sequence parameters'}</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
