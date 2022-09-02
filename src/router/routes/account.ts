import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Layout.vue'

const account: RouteConfig = {
  path: '/account',
  component: Layout,
  meta: {
    hide: true
  },
  children: [
    {
      path: 'center',
      component: () => import(/* webpackChunkName: "account-center" */ '@/views/account/Center.vue')
    },
    {
      path: 'setting',
      component: () => import(/* webpackChunkName: "account-setting" */ '@/views/account/Setting.vue')
    }
  ]
}

export default account
