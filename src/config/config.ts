import {
  ElementSizes,
  Layouts,
  Locales,
  Schemes,
  ContentWidths,
  ClientSizes
} from '@/config/enums'

import type {
  ElementSize,
  Layout,
  Locale,
  Scheme,
  ContentWidth
} from '@/config/types'

import {
  getCollapse,
  getElementSize,
  getLayout,
  getLocale,
  getScheme,
  getContentWidth,
  getFixedHeader,
  getFixedAside,
  getSplitMenus
} from '@/utils/storage'

interface Config {
  HeaderHeight: number
  AsideOpenedWidth: number
  AsideClosedWidth: number

  totalClientSize: {
    [key in ClientSizes]: { min?: number, max?: number }
  }

  getCollapse: () => boolean

  getElementSize: () => ElementSize

  getElementZIndex: () => number

  getLayout: () => Layout

  getLocale: () => Locale

  getScheme: () => Scheme

  getContentWidth: () => ContentWidth

  getFixedHeader: () => boolean

  getFixedAside: () => boolean

  getSplitMenus: () => boolean
}

const config: Config = {
  HeaderHeight: 48,
  AsideOpenedWidth: 200,
  AsideClosedWidth: 64,

  totalClientSize: { // this is same between tailwind and element-ui
    [ClientSizes.xs]: { max: 767 },
    [ClientSizes.sm]: { min: 768, max: 991 },
    [ClientSizes.md]: { min: 992, max: 1199 },
    [ClientSizes.lg]: { min: 1200, max: 1919 },
    [ClientSizes.xl]: { min: 1920 }
  },

  getCollapse (): boolean {
    const collapse: string = getCollapse()
    if (collapse === '') {
      return false
    }
    return !!+collapse
  },

  getElementSize (): ElementSize {
    const size: string = getElementSize()
    if (Object.keys(ElementSizes).includes(size)) {
      return size as ElementSize
    }
    return ElementSizes.small
  },

  getElementZIndex (): number {
    return 3000
  },

  getLayout (): Layout {
    const layout: string = getLayout()
    if (Object.keys(Layouts).includes(layout)) {
      return layout as Layout
    }
    return Layouts['side-menu-layout']
  },

  getLocale (): Locale {
    const locale: string = getLocale()
    if (Object.keys(Locales).includes(locale)) {
      return locale as Locale
    }
    return 'en'
  },

  getScheme (): Scheme {
    const scheme: string = getScheme()
    if (Object.keys(Schemes).includes(scheme)) {
      return scheme as Scheme
    }
    return Schemes['no-preference']
  },

  getContentWidth (): ContentWidth {
    const width: string = getContentWidth()
    if (Object.keys(ContentWidths).includes(width)) {
      return width as ContentWidth
    }
    return ContentWidths.fluid
  },

  getFixedHeader (): boolean {
    const fixedHeader: string = getFixedHeader()
    if (fixedHeader === '') {
      return true
    }
    return !!+fixedHeader
  },

  getFixedAside (): boolean {
    const fixedSidebar: string = getFixedAside()
    if (fixedSidebar === '') {
      return true
    }
    return !!+fixedSidebar
  },

  getSplitMenus (): boolean {
    const splitMenus: string = getSplitMenus()
    if (splitMenus === '') {
      return true
    }
    return !!+splitMenus
  }
}

export default config
