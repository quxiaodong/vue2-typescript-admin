/* eslint-disable */

const tokens = {
  admin: 'admin-token',
  guest: 'guest-token'
}

const admin = {
  id: 'admin-id',
  name: 'administrator',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  menus: [
    { path: '/list', title: '列表' },
    { path: '/list/content', title: '内容列表' },
    { path: '/list/content/article', title: '文章内容列表' },
    { path: '/list/content/project', title: '项目内容列表' },
    { path: '/list/content/application', title: '应用内容列表' },
    { path: '/list/basic', title: '基础列表' },
    { path: '/form', title: '表单' },
    { path: '/form/step', title: '步骤表单' },
    { path: '/form/basic', title: '基础表单' },
    { path: '/form/advanced', title: '高级表单' }
  ],
  buttons: [
    {
      path: '/list/basic',
      type: 'search'
    },
    {
      path: '/list/basic',
      type: 'add'
    }
  ]
}

const guest = {
  id: 'guest-id',
  name: 'guest',
  avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  menus: [
    { path: '/list', title: '列表' },
    { path: '/list/content', title: '内容列表' },
    { path: '/list/content/article', title: '文章内容列表' },
    { path: '/list/content/project', title: '项目内容列表' },
    { path: '/list/basic', title: '基础列表' },
    { path: '/form', title: '表单' },
    { path: '/form/step', title: '步骤表单' },
    { path: '/form/basic', title: '基础表单' }
  ],
  buttons: [
    {
      path: '/list/basic',
      type: 'search'
    }
  ]
}

export default [
  {
    path: '/user/login',
    method: 'post',
    response: options => {
      const body = JSON.parse(options.body)
      const token = tokens[body.account]
      if (!token || body.password !== '123456') {
        return { code: 3000, message: '账号或密码不正确' }
      }
      return { code: 2000, data: { token }, message: '操作成功' }
    }
  },
  {
    path: '/user/info',
    method: 'get',
    response: options => {
      const token = localStorage.getItem('Token')
      if (token === tokens.admin) {
        return { code: 2000, data: admin, message: '操作成功' }
      }
      return { code: 2000, data: guest, message: '操作成功' }
    }
  }
]
