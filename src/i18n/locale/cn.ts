export default {
  setting: {
    'navigation-mode': '导航模式',
    'navigation-mode:side-menu-layout': '侧边菜单布局',
    'navigation-mode:top-menu-layout': '顶部菜单布局',
    'navigation-mode:mix-menu-layout': '混合菜单布局',
    // -
    'color-scheme': '页面外观',
    'color-scheme:dark': '深色',
    'color-scheme:light': '浅色',
    'color-scheme:no-preference': '跟随系统',
    // -
    'content-width': '内容区域宽度',
    'content-width:fixed': '定宽',
    'content-width:fluid': '流式',
    // -
    'fixed-header': '固定头部',
    'fixed-aside': '固定侧边栏',
    'split-menus': '分割菜单'
  },
  'login-page': {
    'account-login:label': '账号密码登陆',
    'account-login:account-placeholder': '用户名: admin or guest',
    'account-login:account-error-message': '用户名是必填项！',
    'account-login:password-placeholder': '密码: 123456',
    'account-login:password-error-message': '密码是必填项！',
    // -
    'phone-login:label': '手机号登录',
    'phone-login:phone-placeholder': '请输入手机号!',
    'phone-login:phone-error-message': '手机号是必填项！',
    'phone-login:code-placeholder': '请输入验证码!',
    'phone-login:code-error-message': '验证码是必填项！',
    'phone-login:get-code': '获取验证码',
    // -
    'remember-me': '自动登陆',
    'forgot-password': '忘记密码 ?',
    // -
    'login-btn': '登 陆'
  },
  'unauthorized-dialog': {
    title: '登陆信息已过期，请重新登陆。',
    confirm: '确认',
    cancel: '取消'
  },
  ...require('element-ui/lib/locale/lang/zh-CN')
}
