import { Section } from '../components/Section'
import { TimelineHero } from '../components/TimelineHero'
import { content, sharedContent } from '../content'
import { useLocale } from '../i18n'

export const About = () => {
  const { locale } = useLocale()
  const t = content[locale]
  const professor = sharedContent.professor
  const team = t.about.team
  const timeline = t.about.timeline

  return (
    <div className="page">
      <TimelineHero
        backgroundImage={`${import.meta.env.BASE_URL}clemens-hero.png`}
        person={timeline.person}
        events={timeline.events}
        ariaLabel={locale === 'de' ? 'Vita Zeitachse' : 'Career timeline'}
        details={
          <div className="timeline-details">
            <div className="timeline-details-panel">
              <span className="timeline-details-label">{team.leadLabel}</span>
              <p className="timeline-details-role">
                {locale === 'de' ? professor.titleDe : professor.titleEn}
              </p>
              <p className="timeline-details-role">{professor.affiliation}</p>
              <p className="timeline-details-role">{professor.credentials}</p>
              <div className="timeline-details-meta">
                <span>
                  <strong>{t.about.profile.phoneLabel}:</strong> {professor.phone}
                </span>
                <span>
                  <strong>{t.about.profile.emailLabel}:</strong>{' '}
                  <a href={`mailto:${professor.email}`}>{professor.email}</a>
                </span>
                <span>
                  <strong>{t.about.profile.linkedinLabel}:</strong>{' '}
                  <a href={professor.linkedinUrl} target="_blank" rel="noreferrer">
                    {professor.linkedinUrl}
                  </a>
                </span>
              </div>
              <ul className="timeline-details-highlights">
                {team.leadHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <details className="timeline-details-toggle">
              <summary>{team.detailsLeadSummary}</summary>
              <div className="timeline-details-content">
                {t.about.sections.map((section) => {
                  const isLong = 'variant' in section && section.variant === 'long'
                  return (
                    <details key={section.title} className="timeline-details-nested">
                      <summary>{section.title}</summary>
                      <ul
                        className={`timeline-details-list${
                          isLong ? ' scroll' : ''
                        }`}
                      >
                        {section.entries.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </details>
                  )
                })}
              </div>
            </details>
          </div>
        }
      />

      <Section title={team.title} subtitle={team.subtitle}>
        <div className="team-grid">
          <article className="team-card">
            <div className="team-placeholder">AA</div>
            <span className="team-label">{team.assistantLabel}</span>
            <h3>{locale === 'de' ? 'Name folgt' : 'Name to be added'}</h3>
            <ul className="team-highlights">
              {team.assistantHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <details className="profile-details">
              <summary>{team.detailsAssistantSummary}</summary>
              <div className="profile-details-content">
                <p>{team.detailsPlaceholderText}</p>
                <ul>
                  {team.assistantHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          </article>

          <article className="team-card">
            <div className="team-placeholder">FR</div>
            <span className="team-label">{team.radiologistsLabel}</span>
            <h3>{locale === 'de' ? 'Team folgt' : 'Team to be added'}</h3>
            <ul className="team-highlights">
              {team.radiologistHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <details className="profile-details">
              <summary>{team.detailsRadiologistsSummary}</summary>
              <div className="profile-details-content">
                <p>{team.detailsPlaceholderText}</p>
                <ul>
                  {team.radiologistHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          </article>
        </div>
      </Section>

      <Section title={team.partnersTitle} subtitle={team.partnersSubtitle}>
        <div className="partners-grid">
          {team.partners.map((partner) => (
            <article key={partner.name} className="partner-card">
              <div className="partner-placeholder">PA</div>
              <div className="partner-body">
                <span className="team-label">{partner.name}</span>
                <p className="partner-role">{partner.role}</p>
                <p className="partner-affiliation">{partner.affiliation}</p>
                <ul className="partner-focus">
                  {partner.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="partner-link"
                  href={partner.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {partner.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}
