import Vue from 'vue'

import Vuex, {
  Store,
  StoreOptions,
  GetterTree,
  MutationTree,
  ActionTree,
  ModuleTree
} from 'vuex'

import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export interface RootState {}

const state: RootState = {}

const getters: GetterTree<RootState, RootState> = {}

const mutations: MutationTree<RootState> = {}

const actions: ActionTree<RootState, RootState> = {}

const modules: ModuleTree<RootState> = { app, user }

const storeOptions: StoreOptions<RootState> = {
  state, getters, mutations, actions, modules
}

const store: Store<RootState> = new Store(storeOptions)

export default store
