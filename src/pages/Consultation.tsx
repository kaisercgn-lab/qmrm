import { CardGrid } from '../components/CardGrid'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Consultation = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.consultation.hero.eyebrow}
        title={t.consultation.hero.title}
        subtitle={t.consultation.hero.subtitle}
        image={stockImages.consultationHero}
      />

      <Section title={t.consultation.hero.title}>
        <CardGrid items={t.consultation.offerings} />
      </Section>

      {(t.consultation as any).upload && (
        <Section title={(t.consultation as any).upload.title}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              {(t.consultation as any).upload.text}
            </p>
            <div style={{ padding: '1rem', marginBottom: '2rem', backgroundColor: 'rgba(255, 69, 0, 0.05)', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', textAlign: 'left' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>
                <strong>Wichtig:</strong> {(t.consultation as any).upload.requirement}
              </p>
            </div>
            
            <div style={{ 
              border: '2px dashed var(--border-color)', 
              borderRadius: '12px', 
              padding: '4rem 2rem',
              backgroundColor: 'var(--bg-card)',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, background-color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text)' }}>{(t.consultation as any).upload.button}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {(t.consultation as any).upload.dropzone || 'DICOM .zip'}
              </p>
            </div>
          </div>
        </Section>
      )}
    </div>
  )
}
