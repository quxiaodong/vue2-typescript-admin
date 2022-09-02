import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Layout.vue'

const form: RouteConfig = {
  path: '/form',
  component: Layout,
  meta: {
    icon: 'el-icon-document'
  },
  children: [
    {
      path: 'step',
      component: () => import(/* webpackChunkName: "form-step" */ '@/views/form/Step.vue')
    },
    {
      path: 'basic',
      component: () => import(/* webpackChunkName: "form-basic" */ '@/views/form/Basic.vue')
    },
    {
      path: 'advanced',
      component: () => import(/* webpackChunkName: "form-advanced" */ '@/views/form/Advanced.vue')
    }
  ]
}

export default form
