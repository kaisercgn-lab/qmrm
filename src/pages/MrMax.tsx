import { PageHero } from '../components/PageHero'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const MrMax = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <SEO title={t.nav.mrmax} description={t.mrMax.hero.subtitle} />

      <PageHero
        eyebrow={t.mrMax.hero.eyebrow}
        title={t.mrMax.hero.title}
        subtitle={t.mrMax.hero.subtitle}
        image={stockImages.educationHero}
        actions={<a href="/#/contact" className="button primary">{t.mrMax.hero.cta}</a>}
      />

      <Section title={t.mrMax.features.title} subtitle={t.mrMax.features.subtitle}>
        <CardGrid items={t.mrMax.features.items} />
      </Section>

      {(t.mrMax as any).download && (
        <Section title={(t.mrMax as any).download.title} subtitle={(t.mrMax as any).download.text}>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href={(t.mrMax as any).download.fileUrl} 
              download 
              className="button primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              {(t.mrMax as any).download.button}
            </a>
          </div>
        </Section>
      )}
    </div>
  )
}
