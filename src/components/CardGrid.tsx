import { Link } from 'react-router-dom'

type CardItem = {
  title: string
  text: string
  link?: string
}

type CardGridProps = {
  items: ReadonlyArray<CardItem>
}

export const CardGrid = ({ items }: CardGridProps) => {
  return (
    <div className="card-grid">
      {items.map((item) => {
        const innerContent = (
          <>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </>
        )

        return item.link ? (
          <Link key={item.title} to={item.link} className="card" style={{ display: 'block', color: 'inherit' }}>
            {innerContent}
          </Link>
        ) : (
          <article key={item.title} className="card">
            {innerContent}
          </article>
        )
      })}
    </div>
  )
}
