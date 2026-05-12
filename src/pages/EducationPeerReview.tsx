import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const EducationPeerReview = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Peer-Review Sessions' : 'Peer-Review Sessions'
  const pageSubtitle = locale === 'de' 
    ? 'Gemeinsam zu optimalen Untersuchungsprotokollen.' 
    : 'Together towards optimal examination protocols.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Kurse' : 'Education'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Interdisziplinärer Austausch auf Augenhöhe' : 'Interdisciplinary Exchange at Eye Level'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die QMRM Peer-Review Sessions bieten Radiologinnen und Radiologen sowie MTRAs eine Plattform, um schwierige Fälle, technische Herausforderungen und Workflow-Optimierungen in einem kollegialen Umfeld zu diskutieren. 
                </p>
                <p>
                  Unter der Moderation unserer Fachexperten werden reale Fragestellungen aus Ihrer klinischen Routine analysiert. Wir konzentrieren uns auf konkrete Lösungsansätze für die Patientenlagerung, die Vermeidung typischer Artefakte und die feine Abstimmung der Sequenzparameter.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The QMRM Peer-Review Sessions offer radiologists and radiographers a platform to discuss difficult cases, technical challenges, and workflow optimizations in a collegial environment.
                </p>
                <p>
                  Moderated by our experts, real-world questions from your clinical routine are analyzed. We focus on concrete solutions for patient positioning, avoiding typical artifacts, and fine-tuning sequence parameters.
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Schwerpunkte der Sessions' : 'Session Focus Areas'}
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: 'var(--text)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Fallbesprechungen: Von unklaren Befunden bis zu komplexen Karzinomen' : 'Case discussions: From unclear findings to complex carcinomas'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Troubleshooting: Artefakt-Analyse und Bildoptimierung' : 'Troubleshooting: Artifact analysis and image optimization'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Best Practices: Tipps und Tricks für die Patientenlagerung' : 'Best Practices: Tips and tricks for patient positioning'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Aktuelle Leitlinien: Umsetzung neuer Standards in die Praxis' : 'Current Guidelines: Implementing new standards into practice'}</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
