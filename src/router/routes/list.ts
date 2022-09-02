import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Layout.vue'

const list: RouteConfig = {
  path: '/list',
  component: Layout,
  meta: {
    icon: 'el-icon-tickets'
  },
  children: [
    {
      path: 'content',
      component: () => import(/* webpackChunkName: "list-content" */ '@/views/list/Content.vue'),
      children: [
        {
          path: 'article',
          component: () => import(/* webpackChunkName: "list-content-article" */ '@/views/list/content/Article.vue')
        },
        {
          path: 'project',
          component: () => import(/* webpackChunkName: "list-content-project" */ '@/views/list/content/Project.vue')
        },
        {
          path: 'application',
          component: () => import(/* webpackChunkName: "list-content-application" */ '@/views/list/content/Application.vue')
        }
      ]
    },
    {
      path: 'basic',
      component: () => import(/* webpackChunkName: "list-basic" */ '@/views/list/Basic.vue')
    }
  ]
}

export default list
