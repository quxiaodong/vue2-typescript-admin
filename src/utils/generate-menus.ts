import { RouteConfig } from 'vue-router'
import { IMenuItem } from '@/apis/user'

// TODO
type TRouteConfig = {
  path: string
  [key: string]: unknown
}

// localRoutes: 前端菜单
// menus: 后端菜单
export const generateMenus = (
  localRoutes: RouteConfig[],
  menus: IMenuItem[],
  prefix: string
): RouteConfig[] => {
  return localRoutes.reduce((prev: RouteConfig[], next: RouteConfig) => {
    const { path, children, meta } = next
    // 从后端传过来的菜单寻找
    const item: IMenuItem | undefined = menus.find(menu => menu.path === prefix + path)

    if (item) {
      const route: TRouteConfig = {
        path,
        meta: Object.assign({}, meta || {}, { title: item.title })
      }

      if ('component' in next) {
        route.component = next.component
      }

      if (children) {
        route.children = generateMenus(children, menus, prefix + path + '/')
      }

      prev.push(route)
    }

    return prev
  }, [])
}
