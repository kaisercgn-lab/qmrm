import { PageHero } from '../components/PageHero'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'
import { SEO } from '../components/SEO'

export const MrMax = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <SEO title={t.nav.mrmax} description={t.mrMax.hero.subtitle} />

      <PageHero
        eyebrow={t.mrMax.hero.eyebrow}
        title={t.mrMax.hero.title}
        subtitle={t.mrMax.hero.subtitle}
        image={stockImages.educationHero}
        actions={<a href="/#/contact" className="button primary">{t.mrMax.hero.cta}</a>}
      />

      <Section title={t.mrMax.features.title} subtitle={t.mrMax.features.subtitle}>
        <CardGrid items={t.mrMax.features.items} />
      </Section>
    </div>
  )
}
