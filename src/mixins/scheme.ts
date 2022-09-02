import { Getter } from 'vuex-class'
import { Component, Watch, Vue } from 'vue-property-decorator'
import { Schemes } from '@/config/enums'
import type { Scheme } from '@/config/types'
import { hasClassName } from '@/utils/dom'

@Component
export default class SchemeMixin extends Vue {
  @Getter('app/scheme') readonly scheme!: Scheme

  @Watch('$route')
  @Watch('scheme', { immediate: true })
  onChangeScheme (): void {
    if (
      this.scheme === Schemes.dark ||
      (this.scheme === Schemes['no-preference'] && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      !hasClassName(document.documentElement, 'dark') && document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
