import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, sharedContent, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Contact = () => {
  const { locale } = useLocale()
  const t = content[locale]
  const company = sharedContent.company

  return (
    <div className="page">
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
        image={stockImages.contactHero}
      />

      <Section title={t.contact.hero.title}>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>{company.name}</h3>
            <p>{company.addressLines.join(', ')}</p>
            <p>{company.phone}</p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <div className="contact-badges">
              {t.contact.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <ContactForm labels={t.contact.form} mailTo={company.email} />
        </div>
      </Section>
    </div>
  )
}
