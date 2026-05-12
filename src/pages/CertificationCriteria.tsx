import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const CertificationCriteria = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Kriterien & Dokumentation' : 'Criteria & Documentation'
  const pageSubtitle = locale === 'de' 
    ? 'Klare Standards für höchste Diagnosequalität.' 
    : 'Clear standards for the highest diagnostic quality.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Zertifizierung' : 'Certification'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.certificationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Voraussetzungen für das Gütesiegel' : 'Requirements for the Quality Seal'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die Basis einer verlässlichen Zertifizierung bilden transparente und klinisch relevante Kriterien. Unsere Experten bewerten Ihre Infrastruktur und Befundung anhand international anerkannter Leitlinien sowie der QMRM-Standards.
                </p>
                <p>
                  Dazu gehört die Prüfung technischer Voraussetzungen wie die Feldstärke des MRT (mindestens 1.5T), Spulenqualität sowie die Einhaltung unserer spezifischen Messprotokolle für optimale räumliche und zeitliche Auflösung (z.B. mittels SMS-Technologie).
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The foundation of a reliable certification is formed by transparent and clinically relevant criteria. Our experts evaluate your infrastructure and reporting based on internationally recognized guidelines and QMRM standards.
                </p>
                <p>
                  This includes checking technical requirements such as the MRI field strength (minimum 1.5T), coil quality, and adherence to our specific measurement protocols for optimal spatial and temporal resolution (e.g., using SMS technology).
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Einzureichende Unterlagen' : 'Required Documentation'}
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: 'var(--text)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Detaillierte Scanner- und Spulenspezifikationen' : 'Detailed scanner and coil specifications'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Nachweis über das verwendete Untersuchungsprotokoll' : 'Proof of the examination protocol used'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Anonymisierte DICOM-Datensätze (mindestens 5 repräsentative Fälle)' : 'Anonymized DICOM datasets (at least 5 representative cases)'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Strukturierte Befundbeispiele gemäß BI-RADS®' : 'Structured reporting examples according to BI-RADS®'}</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
