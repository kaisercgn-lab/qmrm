import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const CertificationOverview = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Programmübersicht' : 'Program Overview'
  const pageSubtitle = locale === 'de' 
    ? 'Der Weg zur zertifizierten Mamma-MRT Exzellenz.' 
    : 'The path to certified breast MRI excellence.'

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
            {locale === 'de' ? 'Warum eine QMRM Zertifizierung?' : 'Why QMRM Certification?'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die QMRM-Zertifizierung zeichnet radiologische Institute und Kliniken aus, die höchste Standards in der Mamma-MRT erfüllen. Unser Ziel ist es, Ihnen nicht nur ein Siegel zu verleihen, sondern gemeinsam mit Ihnen Ihre diagnostische Qualität und Workflow-Effizienz auf das nächste Level zu heben.
                </p>
                <p>
                  Im ersten Schritt analysieren wir gemeinsam Ihre aktuelle Situation. Wir definieren konkrete Ziele hinsichtlich Bildqualität, Befundungszeiten und Patientenmanagement, die im Rahmen des Zertifizierungsprogramms erreicht werden sollen.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The QMRM certification distinguishes radiological institutes and clinics that meet the highest standards in breast MRI. Our goal is not just to award a seal, but to work with you to elevate your diagnostic quality and workflow efficiency to the next level.
                </p>
                <p>
                  In the first step, we analyze your current situation together. We define concrete goals regarding image quality, reporting times, and patient management that are to be achieved within the certification program.
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Der Ablauf' : 'The Process'}
          </h3>
          <ol style={{ marginLeft: '1.5rem', color: 'var(--text)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Initiale Bestandsaufnahme und Zieldefinition' : 'Initial assessment and goal definition'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Einreichung der notwendigen Dokumentation und Fallbeispiele' : 'Submission of necessary documentation and case studies'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Prüfung durch unsere Experten' : 'Review by our experts'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Audit (Remote oder vor Ort)' : 'Audit (Remote or on-site)'}</li>
            <li>{locale === 'de' ? 'Zertifikatsvergabe' : 'Awarding of the certificate'}</li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
