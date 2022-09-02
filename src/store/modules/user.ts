import {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
  Module
} from 'vuex'

import { RouteConfig } from 'vue-router'

import UserService, {
  ILoginRequest,
  ILoginResponse,
  IUserResponse,
  IButtonItem
} from '@/apis/user'

import {
  getToken,
  setToken,
  removeToken
} from '@/utils/storage'

import { RootState } from '@/store/index'
import { resetRouter } from '@/router'
import { localRoutes } from '@/router/routes'
import { generateMenus } from '@/utils/generate-menus'

interface State extends IUserResponse {
  token: string
}

const state: State = {
  token: getToken(),
  id: '',
  name: '',
  avatar: '',
  menus: [],
  buttons: []
}

const getters: GetterTree<State, RootState> = {
  token: (state: State): string => state.token,
  id: (state: State): string => state.id,
  name: (state: State): string => state.name,
  avatar: (state: State): string => state.avatar,
  formatMenus: (state: State): RouteConfig[] => {
    return generateMenus(localRoutes, state.menus, '')
  },
  formatButtons: (state: State): IButtonItem[] => state.buttons
}

const mutations: MutationTree<State> = {
  SET_TOKEN (state: State, payload: string): void {
    state.token = payload
    setToken(payload)
  },
  SET_LOGOUT (state: State): void {
    state.token = ''
    state.id = ''
    state.name = ''
    state.avatar = ''
    state.menus = []
    state.buttons = []
    resetRouter()
    removeToken()
  },
  SET_USER (state: State, payload: State): void {
    const { id, name, avatar, menus, buttons } = payload
    state.id = id
    state.name = name
    state.avatar = avatar
    state.menus = menus
    state.buttons = buttons
  }
}

const actions: ActionTree<State, RootState> = {
  async login (ctx: ActionContext<State, RootState>, payload: ILoginRequest): Promise<void | Error> {
    const response: ILoginResponse | undefined = await UserService.login(payload)
    if (response?.token) {
      ctx.commit('SET_TOKEN', response.token)
      return Promise.resolve()
    }
    return Promise.reject(new Error())
  },
  async logout (ctx: ActionContext<State, RootState>): Promise<void> {
    ctx.commit('SET_LOGOUT')
    return Promise.resolve()
  },
  async setUser (ctx: ActionContext<State, RootState>): Promise<void | Error> {
    const response: IUserResponse | undefined = await UserService.info()
    if (response?.id) {
      ctx.commit('SET_USER', response)
      return Promise.resolve()
    }
    return Promise.reject(new Error())
  }
}

const namespaced: boolean = true

const user: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

export default user
