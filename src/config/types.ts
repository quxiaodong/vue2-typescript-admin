import {
  ElementSizes,
  Layouts,
  Locales,
  Schemes,
  ContentWidths,
  ClientSizes
} from '@/config/enums'

export type ElementSize = keyof typeof ElementSizes

export type Layout = keyof typeof Layouts

export type Locale = keyof typeof Locales

export type Scheme = keyof typeof Schemes

export type ContentWidth = keyof typeof ContentWidths

export type ClientSize = keyof typeof ClientSizes
