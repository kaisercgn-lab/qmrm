import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const PathwayKickoff = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Kick-off & Bestandsaufnahme' : 'Kick-off & Baseline Review'
  const pageSubtitle = locale === 'de' 
    ? 'Der erste Schritt zu einem optimierten Mamma-MRT Angebot.' 
    : 'The first step to an optimized breast MRI service.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Prozess' : 'Process'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.consultationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Ihre individuelle Ausgangslage' : 'Your Individual Starting Point'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Jede radiologische Einrichtung bringt eigene technische Voraussetzungen und personelle Strukturen mit. Zu Beginn unserer Zusammenarbeit steht daher eine detaillierte und strukturierte Bestandsaufnahme.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Im Rahmen eines gemeinsamen Kick-offs analysieren wir Ihre eingesetzte Hardware (1.5T oder 3T), das Spulen-Setup, Ihre bestehenden Untersuchungsprotokolle und die aktuellen Arbeitsabläufe. So identifizieren wir gezielt Optimierungspotenziale und definieren die Meilensteine für die weitere Zusammenarbeit.
                </p>
                <Link to="/contact" className="primary-button">
                  Kick-off Termin vereinbaren
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Every radiological facility has its own technical prerequisites and personnel structures. Therefore, our collaboration begins with a detailed and structured baseline review.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  During a joint kick-off, we analyze your hardware (1.5T or 3T), coil setup, existing examination protocols, and current workflows. This allows us to specifically identify optimization potential and define the milestones for our future collaboration.
                </p>
                <Link to="/contact" className="primary-button">
                  Schedule a kick-off meeting
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
