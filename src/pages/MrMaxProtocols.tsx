import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const MrMaxProtocols = () => {
  const { locale } = useLocale()
  const t = content[locale]

  const pageTitle = locale === 'de' ? 'Protokollwissen' : 'Protocol Knowledge'
  const pageSubtitle = locale === 'de' 
    ? 'Detaillierte Anleitungen zu MRT-Protokollen und DWI-Strategien.' 
    : 'Detailed guides on MRI protocols and DWI strategies.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow="MR-Max"
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={locale === 'de' ? 'Downloads' : 'Downloads'}>
        <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--cream)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--teal-dark)' }}>
            {locale === 'de' ? 'Protokoll herunterladen' : 'Download Protocol'}
          </h3>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
            {locale === 'de' 
              ? 'Hier können Sie das Siemens 1.5T EDX Protokoll für die Mamma-MRT herunterladen.'
              : 'Here you can download the Siemens 1.5T EDX protocol for breast MRI.'}
          </p>
          <a 
            href={`${import.meta.env.BASE_URL}Kaiser1.5T_VD.edx`}
            download="Kaiser1.5T_VD.edx"
            className="primary-button" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {locale === 'de' ? 'Kaiser1.5T_VD.edx herunterladen' : 'Download Kaiser1.5T_VD.edx'}
          </a>
        </div>
      </Section>
    </div>
  )
}
