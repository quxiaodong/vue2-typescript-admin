import { DirectiveOptions } from 'vue'
import { IButtonItem } from '@/apis/user'
import store from '@/store'

const auth: DirectiveOptions = {
  inserted (el, binding, vnode) {
    const path = vnode.context?.$route.path
    const type = binding.arg
    const index: number = store.getters['user/formatButtons'].findIndex(
      (v: IButtonItem): boolean => v.type === type && v.path === path
    )
    /* eslint-disable no-unused-expressions */
    index === -1 && el.parentNode?.removeChild(el)
  }
}

export default auth
