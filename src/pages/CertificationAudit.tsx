import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const CertificationAudit = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Audit & Begleitung' : 'Audit & Guidance'
  const pageSubtitle = locale === 'de' 
    ? 'Kontinuierliche Unterstützung und objektive Evaluation.' 
    : 'Continuous support and objective evaluation.'

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
            {locale === 'de' ? 'Das Zertifizierungsaudit' : 'The Certification Audit'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Nach Einreichung aller Unterlagen führen unsere Experten das formelle Audit durch. Dies kann, je nach Vereinbarung und Umfang, entweder vollständig "remote" (über unsere sichere Plattform) oder als Vor-Ort-Besuch in Ihrer Einrichtung stattfinden.
                </p>
                <p>
                  Während des Audits besprechen wir Stärken, identifizieren Optimierungspotenziale und geben konstruktives Feedback zur Verbesserung Ihrer klinischen Routinen. Unser Ansatz ist partnerschaftlich – wir möchten Sie dabei unterstützen, die bestmögliche Versorgungsqualität für Ihre Patientinnen zu erreichen.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  After all documents have been submitted, our experts conduct the formal audit. Depending on the agreement and scope, this can take place entirely remotely (via our secure platform) or as an on-site visit to your facility.
                </p>
                <p>
                  During the audit, we discuss strengths, identify potential for optimization, and provide constructive feedback to improve your clinical routines. Our approach is collaborative – we want to support you in achieving the best possible quality of care for your patients.
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Erfolgreicher Abschluss' : 'Successful Completion'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            <p>
              {locale === 'de' 
                ? 'Nach bestandenem Audit erhalten Sie das offizielle QMRM-Zertifikat. Dieses Gütesiegel ist für zwei Jahre gültig und dient Ihnen als Nachweis höchster fachlicher Kompetenz in der Mamma-MRT gegenüber Patientinnen und zuweisenden Ärzten. Für die Aufrechterhaltung begleiten wir Sie im Rahmen eines vereinfachten Re-Zertifizierungsprozesses.'
                : 'Upon passing the audit, you will receive the official QMRM certificate. This quality seal is valid for two years and serves as proof of the highest professional competence in breast MRI to patients and referring physicians. To maintain it, we guide you through a simplified re-certification process.'}
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
