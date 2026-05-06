import { useLocale } from '../i18n'
import { content } from '../content'

export const NewsBanner = () => {
  const { locale } = useLocale()
  const t = content[locale]
  
  if (!t.news || !t.news.items || t.news.items.length === 0) return null

  const items = t.news.items
  
  return (
    <div className="news-banner-wrapper">
      <div className="news-marquee">
        <div className="news-marquee-content">
          {items.map((item, i) => (
            <span key={i} className="news-marquee-item">
              <strong>{item.date}</strong>: {item.title}
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="news-marquee-item">
              <strong>{item.date}</strong>: {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
