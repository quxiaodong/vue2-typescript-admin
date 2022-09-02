import {
  Route,
  RouteConfig,
  NavigationGuardNext
} from 'vue-router'

import NProgress from 'nprogress'
import router from '@/router'
import store from '@/store'
import { commonRoutes } from '@/router/routes'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: Route, from: Route, next: NavigationGuardNext): Promise<void> => {
  NProgress.start()

  to?.meta?.title && (document.title = to.meta.title)

  if (!store.getters['user/token']) { // no token
    if (to.meta?.auth === false) { // go to the page do not need auth -> allow
      next()
    } else { // otherwise go to the login page
      next({ path: '/login', query: { redirect: to.fullPath } })
    }

    NProgress.done()
    return
  }

  if (!store.getters['user/id']) { // no user info
    try {
      await store.dispatch('user/setUser')

      store.getters['user/formatMenus'].forEach((route: RouteConfig): void => {
        router.addRoute(route)
      })

      commonRoutes.forEach((route: RouteConfig): void => {
        router.addRoute(route)
      })

      next({ path: to.fullPath, replace: true })
    } catch (error) {
      await store.dispatch('user/logout')

      next('/login')
    }

    NProgress.done()
    return
  }

  if (to.path === '/login') { // go login page -> redirect to /
    next('/')

    NProgress.done()
    return
  }

  next()
})

router.afterEach((): void => {
  NProgress.done()
})
