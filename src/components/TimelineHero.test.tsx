/** @jest-environment jsdom */
import { render, act } from '@testing-library/react'
import { expect, test, describe, beforeAll, afterAll } from 'bun:test'
import { GlobalRegistrator } from '@happy-dom/global-registrator'
import { TimelineHero } from './TimelineHero'

beforeAll(() => {
  GlobalRegistrator.register()
})

afterAll(() => {
  GlobalRegistrator.unregister()
})

const mockPerson = {
  name: 'Test Person',
  yearsOrTagline: '2000 - 2024',
  subtitleLine: 'Subtitle 1',
  subtitleLine2: 'Subtitle 2',
}

const mockEvents = [
  {
    year: '2010',
    title: 'Event 1',
    text: 'Description 1',
  },
  {
    year: '2015',
    title: 'Event 2',
    text: 'Description 2',
    side: 'bottom' as const,
    thumb: 'thumb.jpg',
  },
]

describe('TimelineHero', () => {
  test('renders person information correctly', () => {
    const { getByText } = render(<TimelineHero person={mockPerson} events={[]} backgroundImage="bg.jpg" />)

    expect(getByText('Test Person')).toBeTruthy()
    expect(getByText('2000 - 2024')).toBeTruthy()
    expect(getByText('Subtitle 1')).toBeTruthy()
    expect(getByText('Subtitle 2')).toBeTruthy()
  })

  test('renders events correctly', () => {
    const { getByText, getByRole } = render(<TimelineHero person={mockPerson} events={mockEvents} backgroundImage="bg.jpg" />)

    expect(getByText('2010')).toBeTruthy()
    expect(getByText('Event 1')).toBeTruthy()
    expect(getByText('Description 1')).toBeTruthy()

    expect(getByText('2015')).toBeTruthy()
    expect(getByText('Event 2')).toBeTruthy()
    expect(getByText('Description 2')).toBeTruthy()

    const img = getByRole('presentation', { hidden: true }) as HTMLImageElement
    expect(img.src).toContain('thumb.jpg')
  })

  test('renders background image correctly', () => {
    const { container } = render(<TimelineHero person={mockPerson} events={[]} backgroundImage="bg.jpg" />)
    const section = container.querySelector('section')
    // JSDOM sometimes adds quotes around urls
    expect(section?.style.backgroundImage).toMatch(/url\(["']?bg\.jpg["']?\)/)
  })

  test('renders details when provided', () => {
    const { getByTestId, getByText } = render(
      <TimelineHero
        person={mockPerson}
        events={[]}
        backgroundImage="bg.jpg"
        details={<div data-testid="details-content">Details Content</div>}
      />
    )

    expect(getByTestId('details-content')).toBeTruthy()
    expect(getByText('Details Content')).toBeTruthy()
  })

  test('handles details expansion state', () => {
    const { container } = render(
      <TimelineHero
        person={mockPerson}
        events={[]}
        backgroundImage="bg.jpg"
        details={
          <details>
            <summary>More Info</summary>
            <div>Expanded Content</div>
          </details>
        }
      />
    )

    const section = container.querySelector('section')
    expect(section?.className).not.toContain('expanded')

    const detailsEl = container.querySelector('details')

    act(() => {
      detailsEl?.setAttribute('open', '')
      detailsEl?.dispatchEvent(new Event('toggle'))
    })

    expect(section?.className).toContain('expanded')

    act(() => {
      detailsEl?.removeAttribute('open')
      detailsEl?.dispatchEvent(new Event('toggle'))
    })

    expect(section?.className).not.toContain('expanded')
  })
})
