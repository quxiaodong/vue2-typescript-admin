import { RouteConfig, Route, RawLocation } from 'vue-router'

import form from './form'
import list from './list'
import account from './account'

// loaded based on user roles
export const localRoutes: RouteConfig[] = [
  form,
  list
]

// every user has these pages
export const commonRoutes: RouteConfig[] = [
  account,
  {
    path: '*',
    redirect: (to: Route): RawLocation => {
      console.log('页面不存在', to.fullPath)
      return '/account/center'
    }
  }
]
