<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ContentWidths } from '@/config/enums'
import type { ContentWidth } from '@/config/types'

@Component
export default class extends Vue {
  @Getter('app/contentWidth') readonly contentWidth!: ContentWidth
  @Action('app/setContentWidth') setContentWidth!: (value: ContentWidth) => void

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
          this.$t('setting.content-width').toString()
        ),
        h(
          'el-select',
          {
            props: {
              value: this.contentWidth
            },
            on: {
              change: this.setContentWidth
            },
            class: ['w-20']
          },
          Object.keys(ContentWidths).map(width => {
            return h(
              'el-option',
              {
                props: {
                  label: this.$t(`setting.content-width:${width}`),
                  value: width
                }
              }
            )
          })
        )
      ]
    )
  }
}
</script>
