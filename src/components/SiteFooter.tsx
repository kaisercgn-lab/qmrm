import { NavLink } from 'react-router-dom'
import type { NavItem } from './SiteHeader'

type SiteFooterProps = {
  navItems: NavItem[]
  companyName: string
  addressLines: string[]
  phone: string
  email: string
  navigationLabel: string
  impressumLabel: string
  taxNumberLabel: string
}

export const SiteFooter = ({
  navItems,
  companyName,
  addressLines,
  phone,
  email,
  navigationLabel,
  impressumLabel,
  taxNumberLabel,
}: SiteFooterProps) => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>{companyName}</h4>
          <p>{addressLines.join(', ')}</p>
          {phone && <p>{phone}</p>}
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div>
          <h4>{navigationLabel}</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {companyName}</span>
        <div className="footer-bottom-links">
          <NavLink to="/impressum">{impressumLabel}</NavLink>
          <span>{taxNumberLabel}: 000/000/00000</span>
        </div>
      </div>
    </footer>
  )
}
