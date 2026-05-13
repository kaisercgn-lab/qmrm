import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const PathwayTraining = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Schulung & MR-Max Training' : 'Training & MR-Max Education'
  const pageSubtitle = locale === 'de' 
    ? 'Praxisnahes Training für das gesamte Team.' 
    : 'Practical training for the entire team.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Prozess' : 'Process'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Wissenstransfer und Hands-on' : 'Knowledge Transfer and Hands-on'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Nachdem die technischen Grundlagen geschaffen sind, fokussieren wir uns auf das Team. Eine exzellente Mamma-MRT erfordert das perfekte Zusammenspiel von MTRA und Radiolog:innen.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Ihre MTRAs erhalten spezifische Schulungen zur optimalen Patientenlagerung und Sequenzdurchführung. Die ärztlichen Kolleginnen und Kollegen trainieren parallel intensiv in unserer MR-Max Ausbildungssoftware, um die diagnostische Sicherheit durch passives Lernen an hunderten von echten Fällen zu festigen.
                </p>
                <Link to="/education" className="primary-button">
                  Zu den Kursen
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Once the technical foundations are established, we focus on the team. An excellent breast MRI requires perfect coordination between radiographers and radiologists.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Your radiographers receive specific training on optimal patient positioning and sequence execution. Meanwhile, the medical colleagues train intensively in our MR-Max software to consolidate diagnostic confidence through passive learning on hundreds of real cases.
                </p>
                <Link to="/education" className="primary-button">
                  View courses
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
