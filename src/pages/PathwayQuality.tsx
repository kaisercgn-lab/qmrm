import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const PathwayQuality = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Qualitätssicherung & Zweitmeinungen' : 'Quality Assurance & Second Opinions'
  const pageSubtitle = locale === 'de' 
    ? 'Ihre Absicherung im klinischen Alltag.' 
    : 'Your safeguard in daily clinical routine.'

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
            {locale === 'de' ? 'Laufende Begleitung' : 'Ongoing Support'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die Zusammenarbeit endet nicht mit der Zertifizierung. Wir unterstützen Sie weiterhin bei der Sicherstellung einer konstant hohen Befundqualität.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Durch unser Zweitmeinungsportal können Sie bei komplexen und unklaren Fällen jederzeit auf die Expertise unserer Spezialisten zurückgreifen. Wir bieten regelmäßige Feedback-Runden (Peer-Reviews) und unterstützen Sie dabei, Ihre internen Qualitätsstandards dauerhaft hoch zu halten.
                </p>
                <Link to="/consultation" className="primary-button">
                  Zum Zweitmeinungsportal
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The collaboration does not end with certification. We continue to support you in maintaining a consistently high reporting quality.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Through our second-opinion portal, you can rely on the expertise of our specialists for complex and unclear cases at any time. We offer regular feedback sessions (peer reviews) and support you in maintaining your internal quality standards permanently high.
                </p>
                <Link to="/consultation" className="primary-button">
                  To the second-opinion portal
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
