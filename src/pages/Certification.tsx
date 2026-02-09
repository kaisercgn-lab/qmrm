import { CardGrid } from '../components/CardGrid'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Certification = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.certification.hero.eyebrow}
        title={t.certification.hero.title}
        subtitle={t.certification.hero.subtitle}
        image={stockImages.certificationHero}
      />

      <Section title={t.certification.hero.title}>
        <CardGrid items={t.certification.sections} />
      </Section>
    </div>
  )
}
