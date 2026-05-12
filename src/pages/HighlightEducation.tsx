import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'
import { Link } from 'react-router-dom'

export const HighlightEducation = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Kurse & Workshops' : 'Courses & Workshops'
  const pageSubtitle = locale === 'de' 
    ? 'Praxisnahe Fortbildung für höchste Diagnosequalität.' 
    : 'Practical training for the highest diagnostic quality.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={pageTitle}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Fortbildungen, die den Unterschied machen' : 'Training that makes a difference'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Wir bieten ein modulares und evidenzbasiertes Kursprogramm für Radiologinnen, Radiologen und MTRAs. Vom soliden Grundlagenwissen bis hin zur exklusiven Masterclass decken wir das gesamte Spektrum der Mamma-MRT ab.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Besonders hervorzuheben ist unsere Masterclass, in der das Konzept des hybriden Lernens zum Tragen kommt. Durch passives Training an verifizierten Fällen im MR-Max Campus und tiefgehende Praxisworkshops vermitteln wir Ihnen Strategien für einen sicheren und effizienten Hochdurchsatz-Alltag.
                </p>
                <Link to="/education/masterclass" className="primary-button">
                  Zur Masterclass
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  We offer a modular and evidence-based course program for radiologists and radiographers. From solid foundational knowledge to the exclusive Masterclass, we cover the entire spectrum of breast MRI.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Particularly noteworthy is our Masterclass, which utilizes the concept of hybrid learning. Through passive training on verified cases in the MR-Max Campus and in-depth practical workshops, we teach you strategies for a secure and efficient high-throughput daily routine.
                </p>
                <Link to="/education/masterclass" className="primary-button">
                  View the Masterclass
                </Link>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
