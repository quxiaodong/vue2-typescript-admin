import { VueConstructor } from 'vue'
import auth from './auth'

export default {
  install (Vue: VueConstructor): void {
    Vue.directive('auth', auth)
  }
}
