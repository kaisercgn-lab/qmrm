import React from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  actions?: React.ReactNode
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
}: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero-content fade-in">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  )
}
