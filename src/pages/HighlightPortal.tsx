import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const HighlightPortal = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Zweitmeinungsportal' : 'Second-Opinion Portal'
  const pageSubtitle = locale === 'de' 
    ? 'Standardisierte Zweitbefundung durch unsere Experten.' 
    : 'Standardized second reads by our experts.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Beratung' : 'Consultation'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.consultationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Gewissheit in komplexen Fällen' : 'Certainty in Complex Cases'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Nicht jeder Befund in der Mamma-MRT ist auf den ersten Blick eindeutig. Unser Zweitmeinungsportal bietet Ihnen die Möglichkeit, unklare oder hochkomplexe Fälle von den Experten des QMRM begutachten zu lassen.
                </p>
                <p>
                  Sie übermitteln die DICOM-Daten sicher und datenschutzkonform über unser Portal. Unsere Spezialisten analysieren die Bilder systematisch und stellen Ihnen innerhalb kürzester Zeit eine strukturierte Zweitmeinung inklusive klarer Handlungs- und Therapieempfehlungen zur Verfügung. So vermeiden Sie unnötige Biopsien und geben Ihren Patientinnen die größtmögliche Sicherheit.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Not every finding in breast MRI is clear at first glance. Our second-opinion portal offers you the opportunity to have unclear or highly complex cases reviewed by QMRM experts.
                </p>
                <p>
                  You transmit the DICOM data securely and in compliance with data protection laws via our portal. Our specialists systematically analyze the images and provide you with a structured second opinion, including clear action and therapy recommendations, in the shortest possible time. This helps avoid unnecessary biopsies and gives your patients the greatest possible certainty.
                </p>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
