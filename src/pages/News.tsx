import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, stockImages } from '../content'
import { useLocale } from '../i18n'

export const News = () => {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <div className="page">
      <PageHero
        eyebrow={t.news.hero.eyebrow}
        title={t.news.hero.title}
        subtitle={t.news.hero.subtitle}
        image={stockImages.newsHero}
      />

      <Section title={t.news.hero.title}>
        <div className="news-grid">
          {t.news.items.map((item) => (
            <article key={item.title} className="news-card">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button type="button" className="ghost-button">
                Lorem ipsum
              </button>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}
