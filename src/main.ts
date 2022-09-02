import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementUI from './element-ui'
import directives from './directives'
import '@/router/permission'
import '@/assets/styles/index.scss'

/**
 * mock api service
 */
import '../mock/index.js'

Vue.use(ElementUI)
Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
