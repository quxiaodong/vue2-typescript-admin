import Vue from 'vue'
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/account/center'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    meta: { auth: false }
  }
]

const routerOptions: RouterOptions = {
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
}

const createRouter = (): VueRouter => new VueRouter(routerOptions)

const router: VueRouter = createRouter()

export function resetRouter (): void {
  const newRouter: VueRouter = createRouter()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore next line
  router.matcher = newRouter.matcher
}

export default router
