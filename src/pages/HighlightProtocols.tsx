import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const HighlightProtocols = () => {
  const { locale } = useLocale()

  const pageTitle = locale === 'de' ? 'Protokolle & Technik' : 'Protocols & Technology'
  const pageSubtitle = locale === 'de' 
    ? 'Optimierte Parameter für exzellente Bildergebnisse.' 
    : 'Optimized parameters for excellent imaging results.'

  return (
    <div className="page">
      <SEO title={pageTitle} description={pageSubtitle} />

      <PageHero
        eyebrow={locale === 'de' ? 'Technik' : 'Technology'}
        title={pageTitle}
        subtitle={pageSubtitle}
        image={stockImages.educationHero}
      />

      <Section title={pageTitle}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Perfektion in jedem Detail' : 'Perfection in Every Detail'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  Die technische Qualität der Bildakquise entscheidet über die diagnostische Aussagekraft der Mamma-MRT. Oftmals scheitern Befundungen nicht am Wissen, sondern an unzureichender räumlicher oder zeitlicher Auflösung, starken Artefakten oder falschen Kontrastmitteldynamiken.
                </p>
                <p>
                  Wir stellen Ihnen hochoptimierte und praxiserprobte MR-Protokolle zur Verfügung. Unabhängig davon, ob Sie ein 1.5T oder 3T System betreiben, zeigen wir Ihnen, wie Sie mit der richtigen Spulenpositionierung, optimierten DWI-Sequenzen und exaktem Kontrastmittel-Timing (inklusive SMS-Techniken) das Maximum aus Ihrem Scanner herausholen.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  The technical quality of image acquisition determines the diagnostic value of breast MRI. Often, diagnoses fail not due to a lack of knowledge, but due to insufficient spatial or temporal resolution, strong artifacts, or incorrect contrast dynamics.
                </p>
                <p>
                  We provide you with highly optimized and field-tested MRI protocols. Regardless of whether you operate a 1.5T or 3T system, we show you how to get the most out of your scanner with the right coil positioning, optimized DWI sequences, and exact contrast media timing (including SMS techniques).
                </p>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
