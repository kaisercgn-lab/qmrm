import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const HighlightCertification = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Zertifizierung' : 'Certification'
  const pageSubtitle = locale === 'de' 
    ? 'Qualitätssicherung und Auditierung von Zentren.' 
    : 'Quality assurance and auditing of centers.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={pageTitle}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.certificationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Das QMRM Qualitätssiegel' : 'The QMRM Quality Seal'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die QMRM-Zertifizierung ist mehr als nur ein Zertifikat an der Wand. Sie ist der Nachweis dafür, dass Ihr Zentrum modernste Untersuchungstechniken, exzellente Bildqualität und standardisierte Befundungsprozesse nach höchsten akademischen und klinischen Maßstäben etabliert hat.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Wir begleiten Sie vom ersten Kick-off über die Anpassung Ihrer Protokolle bis hin zum finalen Audit (remote oder vor Ort). Werden Sie Teil eines Netzwerks von Exzellenzzentren und dokumentieren Sie Ihre Qualität transparent nach außen.
                </p>
                <Link to="/certification/overview" className="primary-button">
                  Mehr zum Ablauf erfahren
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The QMRM certification is more than just a certificate on the wall. It is proof that your center has established state-of-the-art examination techniques, excellent image quality, and standardized reporting processes according to the highest academic and clinical standards.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  We guide you from the initial kick-off through adjusting your protocols to the final audit (remote or on-site). Become part of a network of centers of excellence and transparently document your quality to the outside world.
                </p>
                <Link to="/certification/overview" className="primary-button">
                  Learn more about the process
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
