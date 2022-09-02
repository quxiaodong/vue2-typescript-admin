import {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
  Module
} from 'vuex'

import type {
  Layout,
  Locale,
  Scheme,
  ContentWidth,
  ClientSize
} from '@/config/types'

import {
  setCollapse,
  setLayout,
  setLocale,
  setScheme,
  setContentWidth,
  setFixedHeader,
  setFixedAside,
  setSplitMenus
} from '@/utils/storage'

import config from '@/config/config'
import i18n from '@/i18n'
import { RootState } from '@/store/index'

interface State {
  clientSize: ClientSize | null,
  collapse: boolean
  layout: Layout
  locale: Locale
  scheme: Scheme,
  contentWidth: ContentWidth,
  fixedHeader: boolean,
  fixedAside: boolean,
  splitMenus: boolean
}

const state: State = {
  clientSize: null,
  collapse: config.getCollapse(),
  layout: config.getLayout(),
  locale: config.getLocale(),
  scheme: config.getScheme(),
  contentWidth: config.getContentWidth(),
  fixedHeader: config.getFixedHeader(),
  fixedAside: config.getFixedAside(),
  splitMenus: config.getSplitMenus()
}

const getters: GetterTree<State, RootState> = {
  clientSize: (state: State): ClientSize | null => state.clientSize,
  collapse: (state: State): boolean => state.collapse,
  layout: (state: State): Layout => state.layout,
  locale: (state: State): Locale => state.locale,
  scheme: (state: State): Scheme => state.scheme,
  contentWidth: (state: State): ContentWidth => state.contentWidth,
  fixedHeader: (state: State): boolean => state.fixedHeader,
  fixedAside: (state: State): boolean => state.fixedAside,
  splitMenus: (state: State): boolean => state.splitMenus
}

const mutations: MutationTree<State> = {
  SET_CLIENT_SIZE (state: State, payload: ClientSize): void {
    state.clientSize = payload
  },
  SET_COLLAPSE (state: State, payload: boolean): void {
    state.collapse = payload
    setCollapse(payload ? 1 : 0)
  },
  SET_LAYOUT (state: State, payload: Layout): void {
    state.layout = payload
    setLayout(payload)
  },
  SET_LOCALE (state: State, payload: Locale): void {
    state.locale = payload
    setLocale(payload)
    i18n.locale = payload
  },
  SET_SCHEME (state: State, payload: Scheme): void {
    state.scheme = payload
    setScheme(payload)
  },
  SET_CONTENT_WIDTH (state: State, payload: ContentWidth): void {
    state.contentWidth = payload
    setContentWidth(payload)
  },
  SET_FIXED_HEADER (state: State, payload: boolean): void {
    state.fixedHeader = payload
    setFixedHeader(payload ? 1 : 0)
  },
  SET_FIXED_ASIDE (state: State, payload: boolean): void {
    state.fixedAside = payload
    setFixedAside(payload ? 1 : 0)
  },
  SET_SPLIT_MENUS (state: State, payload: boolean): void {
    state.splitMenus = payload
    setSplitMenus(payload ? 1 : 0)
  }
}

const actions: ActionTree<State, RootState> = {
  setClientSize (ctx: ActionContext<State, RootState>, payload: ClientSize): void {
    ctx.commit('SET_CLIENT_SIZE', payload)
  },
  setCollapse (ctx: ActionContext<State, RootState>, payload: boolean): void {
    ctx.commit('SET_COLLAPSE', payload)
  },
  setLayout (ctx: ActionContext<State, RootState>, payload: Layout): void {
    ctx.commit('SET_LAYOUT', payload)
  },
  setLocale (ctx: ActionContext<State, RootState>, payload: Locale): void {
    ctx.commit('SET_LOCALE', payload)
  },
  setScheme (ctx: ActionContext<State, RootState>, payload: Scheme): void {
    ctx.commit('SET_SCHEME', payload)
  },
  setContentWidth (ctx: ActionContext<State, RootState>, payload: ContentWidth): void {
    ctx.commit('SET_CONTENT_WIDTH', payload)
  },
  setFixedHeader (ctx: ActionContext<State, RootState>, payload: boolean): void {
    ctx.commit('SET_FIXED_HEADER', payload)
  },
  setFixedAside (ctx: ActionContext<State, RootState>, payload: boolean): void {
    ctx.commit('SET_FIXED_ASIDE', payload)
  },
  setSplitMenus (ctx: ActionContext<State, RootState>, payload: boolean): void {
    ctx.commit('SET_SPLIT_MENUS', payload)
  }
}

const namespaced: boolean = true

const app: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

export default app
