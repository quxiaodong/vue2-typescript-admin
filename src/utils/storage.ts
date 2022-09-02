import type {
  ElementSize,
  Layout,
  Locale,
  Scheme
} from '@/config/types'

/**
 * Collapse
 */
export const getCollapse = (): string => {
  return localStorage.getItem('Collapse') || ''
}

export const setCollapse = (value: number): void => {
  localStorage.setItem('Collapse', value + '')
}

/**
 * Element UI
 */
export const getElementSize = (): string => {
  return localStorage.getItem('ElementSize') || ''
}

export const setElementSize = (value: ElementSize): void => {
  localStorage.setItem('ElementSize', value)
}

/**
 * Layout
 */
export const getLayout = (): string => {
  return localStorage.getItem('Layout') || ''
}

export const setLayout = (value: Layout): void => {
  localStorage.setItem('Layout', value)
}

/**
 * Locale
 */
export const getLocale = (): string => {
  return localStorage.getItem('Locale') || ''
}

export const setLocale = (value: Locale): void => {
  localStorage.setItem('Locale', value)
}

/**
 * Color Scheme
 */
export const getScheme = (): string => {
  return localStorage.getItem('Scheme') || ''
}

export const setScheme = (value: Scheme): void => {
  localStorage.setItem('Scheme', value)
}

/**
 * ContentWidth
 */
export const getContentWidth = (): string => {
  return localStorage.getItem('ContentWidth') || ''
}

export const setContentWidth = (value: string): void => {
  localStorage.setItem('ContentWidth', value)
}

/**
 * FixedHeader
 */
export const getFixedHeader = (): string => {
  return localStorage.getItem('FixedHeader') || ''
}

export const setFixedHeader = (value: number): void => {
  localStorage.setItem('FixedHeader', value + '')
}

/**
 * FixedAside
 */
export const getFixedAside = (): string => {
  return localStorage.getItem('FixedAside') || ''
}

export const setFixedAside = (value: number): void => {
  localStorage.setItem('FixedAside', value + '')
}

/**
 * SplitMenus
 */
export const getSplitMenus = (): string => {
  return localStorage.getItem('SplitMenus') || ''
}

export const setSplitMenus = (value: number): void => {
  return localStorage.setItem('SplitMenus', value + '')
}

/**
 * Token
 */
export const getToken = (): string => {
  return localStorage.getItem('Token') || ''
}

export const setToken = (value: string): void => {
  localStorage.setItem('Token', value)
}

export const removeToken = (): void => {
  localStorage.removeItem('Token')
}
