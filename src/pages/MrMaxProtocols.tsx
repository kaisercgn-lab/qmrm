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
      <Section title={locale === 'de' ? 'Publikationen & Wissenschaft' : 'Publications & Science'}>
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            Full-scale vs. Abbreviated Sequences in MR Mammography - The best of both worlds
          </h3>
          
          <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>
              Kaiser, C. (2020). Full-scale vs. Abbreviated Sequences in MR Mammography - The best of both worlds. <strong>MAGNETOM Flash</strong>.
            </p>
          </div>

          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Zusammenfassung:</strong> Die MR-Mammographie ist eine hochsensitive Methode und erweist sich insbesondere für das Screening von Frauen mit dichtem Brustgewebe als äußerst effektiv, was zu einer signifikanten Reduktion von Intervallkarzinomen führt. 
                </p>
                <p>
                  Um Kosten und Untersuchungszeiten weiter zu optimieren, werden in der Fachwelt oftmals verkürzte Protokolle ("Abbreviated MRI" oder AB-MRI) diskutiert, bei denen auf essenzielle Sequenzen verzichtet wird. Dieser Artikel demonstriert jedoch, dass moderne 1.5T MRT-Systeme (wie der MAGNETOM Sola) in Kombination mit <em>Simultaneous Multi-Slice (SMS)</em> Technologie es ermöglichen, vollständige Hochauflösungsprotokolle ("Full-scale") in ähnlich kurzer Zeit zu akquirieren. Somit vereint dieser Ansatz die Kosteneffizienz der verkürzten Protokolle mit der überlegenen diagnostischen Sicherheit einer vollständigen Untersuchung.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Summary:</strong> MR Mammography is a highly sensitive method and proves to be extremely effective, especially for screening women with dense breast tissue, leading to a significant reduction in interval carcinomas.
                </p>
                <p>
                  To further optimize costs and examination times, abbreviated protocols (AB-MRI) are often discussed in the literature, which omit essential sequences. However, this article demonstrates that modern 1.5T MRI systems (such as the MAGNETOM Sola) in combination with <em>Simultaneous Multi-Slice (SMS)</em> technology allow for the acquisition of full-scale, high-resolution protocols in similarly short times. Thus, this approach combines the cost-efficiency of abbreviated protocols with the superior diagnostic confidence of a complete examination.
                </p>
              </>
            )}
          </div>

          <a 
            href={`${import.meta.env.BASE_URL}Kaiser_MR-Mammography_Magnetom_Flash.pdf`}
            download="Kaiser_MR-Mammography_Magnetom_Flash.pdf"
            className="secondary-button" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <polyline points="9 15 12 18 15 15"></polyline>
            </svg>
            {locale === 'de' ? 'Artikel als PDF herunterladen' : 'Download Article PDF'}
          </a>
        </div>
      </Section>
    </div>
  )
}
