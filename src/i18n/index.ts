import Vue from 'vue'
import VueI18n, { I18nOptions } from 'vue-i18n'
import config from '@/config/config'

import en from './locale/en'
import cn from './locale/cn'

Vue.use(VueI18n)

const i18nOptions: I18nOptions = {
  locale: config.getLocale(),
  messages: { en, cn }
}

const i18n: VueI18n = new VueI18n(i18nOptions)

export default i18n
