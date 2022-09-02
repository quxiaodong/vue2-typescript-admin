import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ClientSizes } from '@/config/enums'
import type { ClientSize } from '@/config/types'
import config from '@/config/config'
import { debounce } from '@/utils/debounce-throttle'

@Component
export default class ResizeMixin extends Vue {
  @Getter('app/clientSize') clientSize!: ClientSize
  @Action('app/setCollapse') setCollapse!: (value: boolean) => void
  @Action('app/setClientSize') setClientSize!: (value: ClientSize) => void

  private resize (): void {
    const rect: DOMRect = document.body.getBoundingClientRect()

    const client: string | undefined = Object.keys(ClientSizes).find(
      (key: string): boolean => {
        let result: boolean = true
        const item: { min?: number, max?: number } = config.totalClientSize[key as ClientSize]

        item.min && (result = rect.width >= item.min)
        item.max && (result = rect.width <= item.max)

        return result
      }
    )

    if (client === this.clientSize) return

    if (client === ClientSizes.xs) { // mobile
      this.setCollapse(true)
    } else if (client === ClientSizes.sm) { // pad
      this.setCollapse(true)
    } else { // big screen
      this.setCollapse(false)
    }

    client && this.setClientSize(client as ClientSize)
  }

  mounted (): void {
    let resize = this.resize
    resize = debounce<typeof resize>(resize)

    window.addEventListener('resize', resize)

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', resize)
    })

    resize()
  }
}
