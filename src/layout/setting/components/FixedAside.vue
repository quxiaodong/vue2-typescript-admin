<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Getter('app/fixedAside') readonly fixedAside!: boolean
  @Action('app/setFixedAside') setFixedAside!: (value: boolean) => void

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
          this.$t('setting.fixed-aside').toString()
        ),
        h(
          'el-switch',
          {
            props: {
              value: this.fixedAside
            },
            on: {
              change: this.setFixedAside
            }
          }
        )
      ]
    )
  }
}
</script>
