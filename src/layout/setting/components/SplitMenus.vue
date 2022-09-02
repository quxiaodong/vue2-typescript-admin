<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Getter('app/splitMenus') readonly splitMenus!: boolean
  @Action('app/setSplitMenus') setSplitMenus!: (value: boolean) => void

  render (h: CreateElement): VNode {
    return h(
      'div',
      {
        class: ['flex items-center justify-between py-3']
      },
      [
        h(
          'span',
          {
            class: ['_color-primary text-sm']
          },
          this.$t('setting.split-menus').toString()
        ),
        h(
          'el-switch',
          {
            props: {
              value: this.splitMenus
            },
            on: {
              change: this.setSplitMenus
            }
          }
        )
      ]
    )
  }
}
</script>
