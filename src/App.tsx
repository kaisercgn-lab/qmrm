import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useMemo, Suspense, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { LocaleProvider, useLocale } from './i18n'
import { content, logoUrl, sharedContent } from './content'
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const MrMax = lazy(() => import('./pages/MrMax').then(m => ({ default: m.MrMax })))
const Certification = lazy(() => import('./pages/Certification').then(m => ({ default: m.Certification })))
const Education = lazy(() => import('./pages/Education').then(m => ({ default: m.Education })))
const Consultation = lazy(() => import('./pages/Consultation').then(m => ({ default: m.Consultation })))
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
            <Route path="/certification" element={<Certification />} />
            <Route path="/education" element={<Education />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter
        navItems={footerNavItems}
        companyName={sharedContent.company.name}
        addressLines={sharedContent.company.addressLines}
        phone={sharedContent.company.phone}
        email={sharedContent.company.email}
        navigationLabel={t.footer.navigation}
        newsletterTitle={t.footer.newsletterTitle}
        newsletterText={t.footer.newsletterText}
        newsletterCta={t.footer.newsletterCta}
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
