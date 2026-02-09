import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Impressum = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.impressum.hero.eyebrow}
        title={t.impressum.hero.title}
        subtitle={t.impressum.hero.subtitle}
        image={stockImages.impressumHero}
      />

      <Section title={t.impressum.hero.title}>
        <div className="legal-grid">
          {t.impressum.legal.sections.map((section) => (
            <div key={section.title} className="legal-card">
              <h3>{section.title}</h3>
              {section.text.split('\n').map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
