import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const HighlightConsulting = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Beratung & Implementierung' : 'Consulting & Implementation'
  const pageSubtitle = locale === 'de' 
    ? 'Wir begleiten Sie auf dem Weg zur Mamma-MRT Exzellenz.' 
    : 'We guide you on the path to breast MRI excellence.'

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
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Von der Planung bis zur Routine' : 'From Planning to Routine'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Der erfolgreiche Aufbau oder die Umstrukturierung eines Mamma-MRT-Angebots in Ihrer radiologischen Einrichtung erfordert ein durchdachtes Konzept. Unsere Beratung setzt genau hier an: Wir unterstützen Sie strategisch bei der Implementierung.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Wir analysieren Ihre individuellen Gegebenheiten (Infrastruktur, Personal, Patientenaufkommen) und entwickeln gemeinsam mit Ihnen ein tragfähiges Prozessdesign. Wir schulen Ihr MTR-Personal in der optimalen Lagerung und begleiten Ihre ärztlichen Kollegen bei der Etablierung einer strukturierten und effizienten Befundungsroutine.
                </p>
                <Link to="/consultation" className="primary-button">
                  Alle Beratungsangebote ansehen
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Successfully setting up or restructuring a breast MRI service in your radiological facility requires a well-thought-out concept. Our consulting starts exactly here: We support you strategically during implementation.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  We analyze your individual circumstances (infrastructure, personnel, patient volume) and work with you to develop a viable process design. We train your radiography staff in optimal positioning and support your medical colleagues in establishing a structured and efficient reporting routine.
                </p>
                <Link to="/consultation" className="primary-button">
                  View all consulting services
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
