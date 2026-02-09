import React from 'react'

type SectionProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}
