import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { LocaleProvider, useLocale } from './i18n'
import { content, logoUrl, sharedContent } from './content'
import { Home } from './pages/Home'
import { Certification } from './pages/Certification'
import { Education } from './pages/Education'
import { Consultation } from './pages/Consultation'
import { News } from './pages/News'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Impressum } from './pages/Impressum'

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
  const mainNavItems = [
    { path: '/', label: t.nav.home },
    { path: '/consultation', label: t.nav.consultation },
    { path: '/certification', label: t.nav.certification },
    { path: '/education', label: t.nav.education },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ]
  const footerNavItems = [...mainNavItems, { path: '/impressum', label: t.nav.impressum }]

  return (
    <div className="app">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <SiteHeader logoUrl={logoUrl} tagline={t.meta.siteTagline} navItems={mainNavItems} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/education" element={<Education />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
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
  <LocaleProvider>
    <HashRouter>
      <ScrollToTop />
      <AppShell />
    </HashRouter>
  </LocaleProvider>
)

export default App
