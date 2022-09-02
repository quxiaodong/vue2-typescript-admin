export default {
  setting: {
    'navigation-mode': 'Navigation Mode',
    'navigation-mode:side-menu-layout': 'Side Menu Layout',
    'navigation-mode:top-menu-layout': 'Top Menu Layout',
    'navigation-mode:mix-menu-layout': 'Mix Menu Layout',
    // -
    'color-scheme': 'Page Color Scheme',
    'color-scheme:dark': 'Dark Style',
    'color-scheme:light': 'Light Style',
    'color-scheme:no-preference': 'Follow System',
    // -
    'content-width': 'Content Width',
    'content-width:fixed': 'Fixed',
    'content-width:fluid': 'Fluid',
    // -
    'fixed-header': 'Fixed Header',
    'fixed-aside': 'Fixed Aside',
    'split-menus': 'Split Menus'
  },
  'login-page': {
    'account-login:label': 'Account Login',
    'account-login:account-placeholder': 'Username: admin or guest',
    'account-login:account-error-message': 'Please input your username!',
    'account-login:password-placeholder': 'Password: 123456',
    'account-login:password-error-message': 'Please input your password!',
    // -
    'phone-login:label': 'Phone Login',
    'phone-login:phone-placeholder': 'Phone Number',
    'phone-login:phone-error-message': 'Please input your phone number!',
    'phone-login:code-placeholder': 'Verification Code',
    'phone-login:code-error-message': 'Please input verification code!',
    'phone-login:get-code': 'Get Code',
    // -
    'remember-me': 'Remember me',
    'forgot-password': 'Forgot Password ?',
    // -
    'login-btn': 'Login'
  },
  'unauthorized-dialog': {
    title: 'Your token is expired, Please log in again.',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  ...require('element-ui/lib/locale/lang/en')
}
