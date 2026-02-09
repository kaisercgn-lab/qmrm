type CardItem = {
  title: string
  text: string
}

type CardGridProps = {
  items: ReadonlyArray<CardItem>
}

export const CardGrid = ({ items }: CardGridProps) => {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}
