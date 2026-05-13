import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useMemo, Suspense, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { LocaleProvider, useLocale } from './i18n'
import { NewsBanner } from './components/NewsBanner'
import { content, logoUrl, sharedContent } from './content'
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const MrMax = lazy(() => import('./pages/MrMax').then(m => ({ default: m.MrMax })))
const MrMaxLibrary = lazy(() => import('./pages/MrMaxLibrary').then(m => ({ default: m.MrMaxLibrary })))
const MrMaxAssessments = lazy(() => import('./pages/MrMaxAssessments').then(m => ({ default: m.MrMaxAssessments })))
const MrMaxProtocols = lazy(() => import('./pages/MrMaxProtocols').then(m => ({ default: m.MrMaxProtocols })))
const Certification = lazy(() => import('./pages/Certification').then(m => ({ default: m.Certification })))
const CertificationOverview = lazy(() => import('./pages/CertificationOverview').then(m => ({ default: m.CertificationOverview })))
const CertificationCriteria = lazy(() => import('./pages/CertificationCriteria').then(m => ({ default: m.CertificationCriteria })))
const CertificationAudit = lazy(() => import('./pages/CertificationAudit').then(m => ({ default: m.CertificationAudit })))
const Education = lazy(() => import('./pages/Education').then(m => ({ default: m.Education })))
const EducationBasics = lazy(() => import('./pages/EducationBasics').then(m => ({ default: m.EducationBasics })))
const EducationMasterclass = lazy(() => import('./pages/EducationMasterclass').then(m => ({ default: m.EducationMasterclass })))
const EducationPeerReview = lazy(() => import('./pages/EducationPeerReview').then(m => ({ default: m.EducationPeerReview })))
const Consultation = lazy(() => import('./pages/Consultation').then(m => ({ default: m.Consultation })))
const ConsultationAnalysis = lazy(() => import('./pages/ConsultationAnalysis').then(m => ({ default: m.ConsultationAnalysis })))
const ConsultationProcess = lazy(() => import('./pages/ConsultationProcess').then(m => ({ default: m.ConsultationProcess })))
const ConsultationQuality = lazy(() => import('./pages/ConsultationQuality').then(m => ({ default: m.ConsultationQuality })))
const PathwayKickoff = lazy(() => import('./pages/PathwayKickoff').then(m => ({ default: m.PathwayKickoff })))
const PathwayTraining = lazy(() => import('./pages/PathwayTraining').then(m => ({ default: m.PathwayTraining })))
const PathwayCertification = lazy(() => import('./pages/PathwayCertification').then(m => ({ default: m.PathwayCertification })))
const PathwayQuality = lazy(() => import('./pages/PathwayQuality').then(m => ({ default: m.PathwayQuality })))
const HighlightSoftware = lazy(() => import('./pages/HighlightSoftware').then(m => ({ default: m.HighlightSoftware })))
const HighlightPortal = lazy(() => import('./pages/HighlightPortal').then(m => ({ default: m.HighlightPortal })))
const HighlightCertification = lazy(() => import('./pages/HighlightCertification').then(m => ({ default: m.HighlightCertification })))
const HighlightEducation = lazy(() => import('./pages/HighlightEducation').then(m => ({ default: m.HighlightEducation })))
const HighlightProtocols = lazy(() => import('./pages/HighlightProtocols').then(m => ({ default: m.HighlightProtocols })))
const HighlightConsulting = lazy(() => import('./pages/HighlightConsulting').then(m => ({ default: m.HighlightConsulting })))
const News = lazy(() => import('./pages/News').then(m => ({ default: m.News })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Impressum = lazy(() => import('./pages/Impressum').then(m => ({ default: m.Impressum })))

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const AppShell = () => {
  const { locale } = useLocale()
  const t = content[locale]

  const mainNavItems = useMemo(() => [
    { path: '/', label: t.nav.home },
    { path: '/mr-max', label: t.nav.mrmax },
    { path: '/consultation', label: t.nav.consultation },
    { path: '/certification', label: t.nav.certification },
    { path: '/education', label: t.nav.education },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ], [t])

  const footerNavItems = useMemo(() => [
    ...mainNavItems,
    { path: '/impressum', label: t.nav.impressum }
  ], [mainNavItems, t])

  return (
    <div className="app">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <SiteHeader logoUrl={logoUrl} tagline={t.meta.siteTagline} navItems={mainNavItems} />
      <main className="main-content">
        <Suspense fallback={<div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Lade...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mr-max" element={<MrMax />} />
            <Route path="/mr-max/library" element={<MrMaxLibrary />} />
            <Route path="/mr-max/assessments" element={<MrMaxAssessments />} />
            <Route path="/mr-max/protocols" element={<MrMaxProtocols />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/certification/overview" element={<CertificationOverview />} />
            <Route path="/certification/criteria" element={<CertificationCriteria />} />
            <Route path="/certification/audit" element={<CertificationAudit />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/basics" element={<EducationBasics />} />
            <Route path="/education/masterclass" element={<EducationMasterclass />} />
            <Route path="/education/peer-review" element={<EducationPeerReview />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/consultation/analysis" element={<ConsultationAnalysis />} />
            <Route path="/consultation/process" element={<ConsultationProcess />} />
            <Route path="/consultation/quality" element={<ConsultationQuality />} />
            <Route path="/pathway/kickoff" element={<PathwayKickoff />} />
            <Route path="/pathway/training" element={<PathwayTraining />} />
            <Route path="/pathway/certification" element={<PathwayCertification />} />
            <Route path="/pathway/quality" element={<PathwayQuality />} />
            <Route path="/highlights/software" element={<HighlightSoftware />} />
            <Route path="/highlights/portal" element={<HighlightPortal />} />
            <Route path="/highlights/certification" element={<HighlightCertification />} />
            <Route path="/highlights/education" element={<HighlightEducation />} />
            <Route path="/highlights/protocols" element={<HighlightProtocols />} />
            <Route path="/highlights/consulting" element={<HighlightConsulting />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Suspense>
      </main>
      <NewsBanner />
      <SiteFooter
        navItems={footerNavItems}
        companyName={sharedContent.company.name}
        addressLines={sharedContent.company.addressLines}
        phone={sharedContent.company.phone}
        email={sharedContent.company.email}
        navigationLabel={t.footer.navigation}
        impressumLabel={t.footer.impressumLabel}
        taxNumberLabel={t.footer.taxNumberLabel}
      />
    </div>
  )
}

const App = () => (
  <HelmetProvider>
    <LocaleProvider>
      <HashRouter>
        <ScrollToTop />
        <AppShell />
      </HashRouter>
    </LocaleProvider>
  </HelmetProvider>
)

export default App
