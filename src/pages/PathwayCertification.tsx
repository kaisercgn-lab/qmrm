import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const PathwayCertification = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Zertifizierung und Audits' : 'Certification and Audits'
  const pageSubtitle = locale === 'de' 
    ? 'Der Nachweis Ihrer hohen Qualitätsstandards.' 
    : 'Proof of your high quality standards.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Prozess' : 'Process'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.certificationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Erfolgreich auditiert' : 'Successfully Audited'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Wenn Technik, Personal und Prozesse optimal aufeinander abgestimmt sind, erfolgt das formale Audit. Wir bewerten anhand transparenter und evidenzbasierter Kriterien, ob Ihre Einrichtung die QMRM-Standards erfüllt.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Das Zertifikat dokumentiert gegenüber Patienten und Zuweisern Ihre besondere Expertise in der Mamma-MRT. Das Audit wird wahlweise remote oder vor Ort von erfahrenen Experten durchgeführt und schließt mit einem ausführlichen Bericht ab.
                </p>
                <Link to="/certification" className="primary-button">
                  Alles zur Zertifizierung
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  When technology, personnel, and processes are optimally aligned, the formal audit takes place. Using transparent and evidence-based criteria, we evaluate whether your facility meets the QMRM standards.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  The certificate documents your special expertise in breast MRI to patients and referring physicians. The audit is conducted either remotely or on-site by experienced experts and concludes with a detailed report.
                </p>
                <Link to="/certification" className="primary-button">
                  About the certification
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
