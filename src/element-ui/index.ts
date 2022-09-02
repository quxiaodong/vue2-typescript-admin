import { VueConstructor } from 'vue'
import i18n from '@/i18n'
import config from '@/config/config'

import {
  Aside,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Col,
  Container,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Empty,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  Option,
  Popover,
  Row,
  Scrollbar,
  Select,
  Submenu,
  Switch,
  TabPane,
  Tabs,
  Tooltip
} from 'element-ui'

const components = [
  Aside,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Col,
  Container,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Empty,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  Option,
  Popover,
  Row,
  Scrollbar,
  Select,
  Submenu,
  Switch,
  TabPane,
  Tabs,
  Tooltip
]

export default {
  install (Vue: VueConstructor): void {
    Vue.prototype.$ELEMENT = {
      size: config.getElementSize(),
      zIndex: config.getElementZIndex(),
      i18n: (key: string, value: string): string => (i18n.t(key, value)).toString()
    }

    Vue.prototype.$loading = Loading.service

    Vue.use(Loading.directive)

    components.forEach(component => {
      Vue.use(component)
    })
  }
}
