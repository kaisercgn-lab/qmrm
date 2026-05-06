import { Link } from 'react-router-dom'
import { BrandHero } from '../components/BrandHero'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { content } from '../content'
import { useLocale } from '../i18n'

export const Home = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <BrandHero />

      <Section title={t.home.highlights.title} subtitle={t.home.highlights.subtitle}>
        <CardGrid items={t.home.highlights.items} />
      </Section>

      <Section title={t.home.pathways.title} subtitle={t.home.pathways.subtitle}>
        <ol className="steps">
          {t.home.pathways.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <Section title={t.home.news.title} subtitle={t.home.news.subtitle}>
        <div className="news-grid">
          {t.news.items.map((item) => (
            <article key={item.title} className="news-card">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/news">{locale === 'de' ? 'Mehr lesen' : 'Read more'}</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}
