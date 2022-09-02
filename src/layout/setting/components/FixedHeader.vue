<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Getter('app/fixedHeader') readonly fixedHeader!: boolean
  @Action('app/setFixedHeader') setFixedHeader!: (value: boolean) => void

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
          this.$t('setting.fixed-header').toString()
        ),
        h(
          'el-switch',
          {
            props: {
              value: this.fixedHeader
            },
            on: {
              change: this.setFixedHeader
            }
          }
        )
      ]
    )
  }
}
</script>
