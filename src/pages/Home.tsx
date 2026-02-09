import { Link } from 'react-router-dom'
import { CardGrid } from '../components/CardGrid'
import { Section } from '../components/Section'
import { content, logoUrl, sharedContent } from '../content'
import { useLocale } from '../i18n'

export const Home = () => {
  const { locale } = useLocale()
  const t = content[locale]
  const professor = sharedContent.professor

  return (
    <div className="page">
      <section className="brand-hero">
        <div className="brand-hero-content">
          <img className="brand-logo" src={logoUrl} alt="QMRM GmbH" />
          <span className="brand-eyebrow">{t.home.hero.eyebrow}</span>
          <h1>{t.home.hero.title}</h1>
          <p className="brand-lead">{t.home.hero.subtitle}</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/certification">
              {t.home.hero.primaryCta}
            </Link>
            <Link className="ghost-button" to="/consultation">
              {t.home.hero.secondaryCta}
            </Link>
          </div>
          <div className="brand-badges">
            {t.home.hero.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
        <div className="brand-portrait">
          <img
            src={professor.imageUrl}
            alt={`Portrait of ${professor.name}`}
          />
          <div className="brand-portrait-body">
            <span className="brand-portrait-label">
              {t.home.hero.portraitLabel}
            </span>
            <h3>{professor.name}</h3>
            <p className="brand-portrait-role">
              {locale === 'de' ? professor.titleDe : professor.titleEn}
            </p>
            <p>{professor.affiliation}</p>
            <p className="brand-portrait-quote">
              “{locale === 'de' ? professor.quoteDe : professor.quoteEn}”
            </p>
          </div>
        </div>
      </section>

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
              <Link to="/news">Lorem ipsum</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}
