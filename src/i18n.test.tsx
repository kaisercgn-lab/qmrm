import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { test, expect, beforeEach, afterEach, describe } from 'bun:test'
import { LocaleProvider, useLocale } from './i18n'
import { content } from './content'
import { GlobalRegistrator } from '@happy-dom/global-registrator'
GlobalRegistrator.register()
describe('i18n', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.lang = ''
    document.title = ''
  })
  afterEach(() => {
    window.localStorage.clear()
  })
  test('useLocale throws an error when used outside LocaleProvider', () => {
    // Need to suppress React's error logging for expected errors in tests
    const consoleError = console.error
    console.error = () => {}
    expect(() => renderHook(() => useLocale())).toThrow(
      'useLocale must be used within LocaleProvider'
    )
    console.error = consoleError
  })
  test('default locale is "de" when localStorage is empty', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LocaleProvider>{children}</LocaleProvider>
    )
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('de')
    expect(document.documentElement.lang).toBe('de')
    expect(document.title).toBe(content['de'].meta.siteTitle)
    expect(window.localStorage.getItem('locale')).toBe('de')
  })
  test('reads "en" locale from localStorage', () => {
    window.localStorage.setItem('locale', 'en')
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LocaleProvider>{children}</LocaleProvider>
    )
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe(content['en'].meta.siteTitle)
  })
  test('falls back to "de" when localStorage has an invalid value', () => {
    window.localStorage.setItem('locale', 'fr')
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LocaleProvider>{children}</LocaleProvider>
    )
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('de')
    expect(document.documentElement.lang).toBe('de')
    expect(document.title).toBe(content['de'].meta.siteTitle)
    expect(window.localStorage.getItem('locale')).toBe('de')
  })
  test('setLocale updates the locale, localStorage, document.lang, and document.title', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LocaleProvider>{children}</LocaleProvider>
    )
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('de')
    act(() => {
      result.current.setLocale('en')
    })
    expect(result.current.locale).toBe('en')
    expect(window.localStorage.getItem('locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe(content['en'].meta.siteTitle)
  })
})
