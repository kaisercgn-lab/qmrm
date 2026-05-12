import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLocale } from '../i18n'
import { stockImages } from '../content'
import { SEO } from '../components/SEO'

export const EducationMasterclass = () => {
  const { locale } = useLocale()

  const pageTitle = 'Masterclass MR-Mammographie'
  const pageSubtitle = locale === 'de' 
    ? 'Das Bindeglied Ihrer Expertise.' 
    : 'The missing link in your expertise.'

  const modules = [
    {
      title: locale === 'de' ? '1. Methodik & technische Standards' : '1. Methodology & Technical Standards',
      text: locale === 'de' 
        ? 'Erfahren Sie alles über technische Qualitätssicherung, die optimale Spulenauswahl, präzise Sequenzparameter und die Steuerung der Kontrastmitteldynamik, um Protokolle auch für schwierige Fälle wie die dichte Brust zu optimieren.'
        : 'Learn everything about technical quality assurance, optimal coil selection, precise sequence parameters, and controlling contrast dynamics to optimize protocols even for difficult cases like dense breasts.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      )
    },
    {
      title: locale === 'de' ? '2. Benigne Diagnostik' : '2. Benign Diagnostics',
      text: locale === 'de' 
        ? 'Erwerben Sie Sicherheit in der Identifikation gutartiger Läsionen. Wir lehren die eindeutige Differenzierung von Fibroadenomen, Zysten und hormonellen Parenchymveränderungen zur Vermeidung unnötiger Überdiagnostik.'
        : 'Gain confidence in identifying benign lesions. We teach the clear differentiation of fibroadenomas, cysts, and hormonal parenchymal changes to avoid unnecessary overdiagnosis.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      )
    },
    {
      title: locale === 'de' ? '3. Maligne Morphologie' : '3. Malignant Morphology',
      text: locale === 'de' 
        ? 'Vertiefen Sie Ihr Wissen über die Kinetik und Architektur von Karzinomen. Ein Schwerpunkt liegt auf der komplexen Differenzierung zwischen Mass- und Non-Mass-Enhancement sowie der Beurteilung von High-Grade- versus Low-Grade-Läsionen.'
        : 'Deepen your knowledge of the kinetics and architecture of carcinomas. A focus is on the complex differentiation between mass and non-mass enhancement as well as the assessment of high-grade versus low-grade lesions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      )
    },
    {
      title: locale === 'de' ? '4. Risikomanagement & Pitfalls' : '4. Risk Management & Pitfalls',
      text: locale === 'de' 
        ? 'In der QMRM-Methodik ist Fehlerminimierung Systemarbeit. Wir analysieren systematisch typische Fehlinterpretationen und implementieren proaktive Qualitätskontrollen direkt in Ihren Befund-Workflow.'
        : 'In the QMRM methodology, minimizing errors is systematic work. We systematically analyze typical misinterpretations and implement proactive quality controls directly into your reporting workflow.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      )
    },
    {
      title: locale === 'de' ? '5. Workflow-Exzellenz' : '5. Workflow Excellence',
      text: locale === 'de' 
        ? '"How to scan 40 patients a day and talk to them all": Effizienz ist kein Widerspruch zu einer menschlichen Medizin. Wir zeigen Ihnen praxiserprobte Strategien aus dem Hochdurchsatz-Alltag des MMZ. Dazu gehören strukturierte Patientenkommunikation, optimierte Vorbefund-Akquise und Delegationstraining im Team.'
        : '"How to scan 40 patients a day and talk to them all": Efficiency does not contradict humane medicine. We show you proven strategies from the high-throughput daily routine of the MMZ, including structured patient communication and team delegation training.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      )
    }
  ]

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
          
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '3rem' }}>
            {locale === 'de' ? (
              <>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>Das Bindeglied Ihrer Expertise</p>
                <p style={{ marginBottom: '1rem' }}>
                  In der modernen senologischen Diagnostik ist die MRT unverzichtbar geworden. Doch die Lücke zwischen theoretischem Basiswissen und der souveränen Handhabung komplexer klinischer Fälle sowie hocheffizienter Workflows ist oft groß.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Die QMRM Masterclass, unter der Leitung von Prof. Dr. med. Clemens Kaiser (Sektionsleiter Mammadiagnostik am Universitätsmedizin Mannheim), fungiert als essenzielles Bindeglied zwischen Einsteiger-Seminaren und der Experten-Stufe. In enger Kooperation mit dem zertifizierten Mammazentrum Mannheim (MMZ) repräsentiert dieser Kurs den aktuellen State-of-the-Art der interdisziplinären Diagnostik.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>The missing link in your expertise</p>
                <p style={{ marginBottom: '1rem' }}>
                  In modern senological diagnostics, MRI has become indispensable. However, the gap between basic theoretical knowledge and the confident handling of complex clinical cases and highly efficient workflows is often large.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  The QMRM Masterclass, directed by Prof. Dr. med. Clemens Kaiser (Head of Breast Imaging at University Medical Center Mannheim), acts as an essential link between beginner seminars and the expert level. In close cooperation with the certified Mannheim Breast Center (MMZ), this course represents the current state-of-the-art in interdisciplinary diagnostics.
                </p>
              </>
            )}
          </div>

          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Das didaktische Konzept: Hybrides Lernen' : 'The Didactic Concept: Hybrid Learning'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6, marginBottom: '3rem', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--teal-main)' }}>
            {locale === 'de' ? (
              <p>
                Theorie allein schafft keine diagnostische Sicherheit. Unser innovatives Hybrid-Modell kombiniert einen intensiven Präsenz-Workshop zur Vermittlung von Strategie und Workflow mit einem zeitlich flexiblen Online-Selbststudium. Das Herzstück unseres Kursmaterials ist der exklusive Zugang zum <strong>MR-Max Online-Campus</strong>. Hier trainieren Teilnehmer an über 1.000 histologisch verifizierten Datensätzen. Dieses passive Training am Goldstandard der pathologischen Wahrheit ermöglicht eine massive Verkürzung der diagnostischen Lernkurve und schult die Mustererkennung auf höchstem Niveau.
              </p>
            ) : (
              <p>
                Theory alone does not create diagnostic confidence. Our innovative hybrid model combines an intensive face-to-face workshop for teaching strategy and workflow with flexible online self-study. The core of our course material is exclusive access to the <strong>MR-Max Online Campus</strong>. Here, participants train on over 1,000 histologically verified datasets. This passive training against the gold standard of pathological truth enables a massive shortening of the diagnostic learning curve and trains pattern recognition at the highest level.
              </p>
            )}
          </div>

          <h3 style={{ marginBottom: '2rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Das 5-Säulen-Curriculum' : 'The 5-Pillar Curriculum'}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {modules.map((mod, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <div style={{ background: 'var(--teal-main)', color: 'white', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {mod.icon}
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--text)' }}>{mod.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{mod.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
            {locale === 'de' ? 'Abschluss und Zertifizierung' : 'Graduation and Certification'}
          </h3>
          <div style={{ color: 'var(--text)', lineHeight: 1.6 }}>
            {locale === 'de' ? (
              <p>
                Die Masterclass ist mit CME-Punkten zertifiziert. Mit dem erfolgreichen Abschluss erlangen Teilnehmer nicht nur wertvolle Fortbildungspunkte, sondern auch den Status in der MR-Max Experten-Community. Werden Sie Teil eines Netzwerks, das klinische Exzellenz, wissenschaftliche Fundierung durch das Kaisercgn-Lab und wirtschaftliche Effizienz synergetisch vereint.
              </p>
            ) : (
              <p>
                The Masterclass is certified with CME points. Upon successful completion, participants gain not only valuable continuing education credits but also status in the MR-Max expert community. Become part of a network that synergistically combines clinical excellence, scientific foundation by the Kaisercgn-Lab, and economic efficiency.
              </p>
            )}
          </div>

        </div>
      </Section>
    </div>
  )
}
