import { NavLink } from 'react-router-dom'
import { LanguageToggle } from './LanguageToggle'

export type NavItem = {
  path: string
  label: string
}

type SiteHeaderProps = {
  logoUrl: string
  tagline: string
  navItems: NavItem[]
}

export const SiteHeader = ({ logoUrl, tagline, navItems }: SiteHeaderProps) => {
  return (
    <header className="site-header">
      <div className="top-bar">
        <span>{tagline}</span>
        <LanguageToggle />
      </div>
      <div className="nav-row">
        <NavLink to="/" className="logo" aria-label="Home">
          <img src={logoUrl} alt="QMRM GmbH Logo" />
        </NavLink>
        <nav className="main-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
