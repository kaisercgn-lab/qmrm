import { CardGrid } from '../components/CardGrid'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Education = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.education.hero.eyebrow}
        title={t.education.hero.title}
        subtitle={t.education.hero.subtitle}
        image={stockImages.educationHero}
      />

      <Section title={t.education.hero.title}>
        <CardGrid items={t.education.tracks} />
      </Section>
    </div>
  )
}
