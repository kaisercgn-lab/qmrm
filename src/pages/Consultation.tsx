import { CardGrid } from '../components/CardGrid'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Consultation = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.consultation.hero.eyebrow}
        title={t.consultation.hero.title}
        subtitle={t.consultation.hero.subtitle}
        image={stockImages.consultationHero}
      />

      <Section title={t.consultation.hero.title}>
        <CardGrid items={t.consultation.offerings} />
      </Section>
    </div>
  )
}
