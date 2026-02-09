import { useEffect, useRef, useState } from 'react'
import './timeline-hero.css'

export type TimelinePerson = {
  name: string
  yearsOrTagline: string
  subtitleLine: string
  subtitleLine2: string
}

export type TimelineEvent = {
  year: string
  title: string
  text: string
  side?: 'top' | 'bottom'
  thumb?: string
}

type TimelineHeroProps = {
  person: TimelinePerson
  events: ReadonlyArray<TimelineEvent>
  backgroundImage: string
  ariaLabel?: string
  details?: React.ReactNode
}

export const TimelineHero = ({
  person,
  events,
  backgroundImage,
  ariaLabel = 'Career timeline',
  details,
}: TimelineHeroProps) => {
  const heroRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const dragState = useRef({ startX: 0, startScroll: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const positionedEvents = events.map((event, index) => ({
    ...event,
    side: event.side ?? (index % 2 === 0 ? 'top' : 'bottom'),
  }))

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let direction = 1
    const tick = () => {
      const maxScroll = track.scrollWidth - track.clientWidth
      if (maxScroll > 0 && !isDragging) {
        const current = track.scrollLeft
        const next = current + direction * 0.35
        if (next <= 0) {
          track.scrollTo({ left: 0 })
          direction = 1
          return
        }
        if (next >= maxScroll) {
          track.scrollTo({ left: maxScroll })
          direction = -1
          return
        }
        track.scrollTo({ left: next })
      }
    }

    const interval = window.setInterval(tick, 20)
    return () => window.clearInterval(interval)
  }, [isDragging, events.length])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleToggle = () => {
      const anyOpen = hero.querySelector('details[open]') !== null
      setIsExpanded(anyOpen)
    }

    hero.addEventListener('toggle', handleToggle, true)
    return () => hero.removeEventListener('toggle', handleToggle, true)
  }, [])

  return (
    <section
      ref={heroRef}
      className={`timeline-hero${isExpanded ? ' expanded' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="timeline-hero-inner">
        <div className="timeline-hero-copy">
          <p className="timeline-hero-kicker">{person.yearsOrTagline}</p>
          <h1 className="timeline-hero-name">{person.name}</h1>
          <p className="timeline-hero-sub">{person.subtitleLine}</p>
          <p className="timeline-hero-sub">{person.subtitleLine2}</p>
        </div>

        <div className="timeline-hero-timeline" aria-label={ariaLabel}>
          <ol
            className={`timeline-track${isDragging ? ' dragging' : ''}`}
            role="list"
            ref={trackRef}
            onPointerDown={(event) => {
              const track = trackRef.current
              if (!track || event.button !== 0) return
              event.preventDefault()
              setIsDragging(true)
              dragState.current = {
                startX: event.clientX,
                startScroll: track.scrollLeft,
              }
              track.setPointerCapture(event.pointerId)
            }}
            onPointerMove={(event) => {
              const track = trackRef.current
              if (!track || !isDragging) return
              const delta = event.clientX - dragState.current.startX
              track.scrollLeft = dragState.current.startScroll - delta
            }}
            onPointerUp={(event) => {
              const track = trackRef.current
              if (!track) return
              setIsDragging(false)
              track.releasePointerCapture(event.pointerId)
            }}
            onPointerCancel={() => setIsDragging(false)}
            onPointerLeave={(event) => {
              const track = trackRef.current
              if (track) {
                track.releasePointerCapture(event.pointerId)
              }
              setIsDragging(false)
            }}
          >
            {positionedEvents.map((event) => (
              <li
                key={`${event.year}-${event.title}`}
                className={`timeline-event ${event.side}`}
              >
                <div className="timeline-event-card">
                  <span className="timeline-event-year">{event.year}</span>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-event-text">{event.text}</p>
                  {event.thumb ? (
                    <img
                      className="timeline-event-thumb"
                      src={event.thumb}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {details ? <div className="timeline-hero-details">{details}</div> : null}
      </div>
    </section>
  )
}
