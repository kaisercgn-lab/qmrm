import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const EducationBasics = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Grundlagenmodul' : 'Foundations Module'
  const pageSubtitle = locale === 'de' 
    ? 'Der sichere Einstieg in die Mamma-MRT.' 
    : 'A secure introduction to breast MRI.'

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
            {locale === 'de' ? 'Basiswissen für den klinischen Alltag' : 'Basic Knowledge for Clinical Practice'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Das Grundlagenmodul richtet sich an Ärztinnen und Ärzte in der Weiterbildung sowie MTRAs, die systematisch in die Methodik der Mamma-MRT eingeführt werden möchten. In diesem Modul legen wir das Fundament für eine sichere und standardisierte Arbeitsweise.
                </p>
                <p>
                  Wir behandeln die Kernaspekte der Indikationsstellung, die Auswahl korrekter Untersuchungssequenzen und die grundlegende Systematik der BI-RADS® Klassifikation. Ziel ist es, Ihnen das nötige Rüstzeug zu geben, um Routinefälle sicher zu meistern und Artefakte frühzeitig zu erkennen.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The foundations module is aimed at physicians in training and radiographers who want a systematic introduction to breast MRI methodology. In this module, we lay the foundation for secure and standardized workflows.
                </p>
                <p>
                  We cover the core aspects of establishing indications, selecting correct examination sequences, and the basic systematics of the BI-RADS® classification. The goal is to equip you with the necessary tools to confidently master routine cases and detect artifacts early on.
                </p>
              </>
            )}
          </div>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Inhalte des Moduls' : 'Module Contents'}
          </h3>
          <ul style={{ marginLeft: '1.5rem', color: 'var(--text)', lineHeight: 1.6 }}>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Klinische Indikationen und Patientenselektion' : 'Clinical indications and patient selection'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Gerätetechnik und Spulenauswahl (1.5T vs. 3T)' : 'Device technology and coil selection (1.5T vs. 3T)'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Standardprotokolle und Kontrastmittel-Timing' : 'Standard protocols and contrast media timing'}</li>
            <li style={{ marginBottom: '0.5rem' }}>{locale === 'de' ? 'Grundzüge der BI-RADS® Befundung' : 'Basics of BI-RADS® reporting'}</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
