<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { Layouts } from '@/config/enums'
import type { Layout } from '@/config/types'

@Component
export default class extends Vue {
  @Getter('app/layout') readonly layout!: Layout
  @Action('app/setLayout') setLayout!: (value: Layout) => void

  render (h: CreateElement): VNode {
    return h(
      'div',
      {
        class: ['mb-5']
      },
      [
        h(
          'div',
          {
            class: ['_color-primary mb-3 text-sm font-medium']
          },
          this.$t('setting.navigation-mode').toString()
        ),
        h(
          'div',
          {
            class: ['flex']
          },
          Object.keys(Layouts).map(layout => {
            return h(
              'el-tooltip',
              {
                props: {
                  placement: 'top',
                  content: this.$t(`setting.navigation-mode:${layout}`)
                }
              },
              [
                h(
                  'div',
                  {
                    on: {
                      click: () => this.setLayout(layout as Layout)
                    },
                    class: [layout, 'list-item']
                  },
                  [
                    layout === this.layout && h('i', { class: ['el-icon-check'] })
                  ]
                )
              ]
            )
          })
        )
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  @apply relative w-11 h-9 mr-4 overflow-hidden rounded cursor-pointer shadow;

  &::before {
    content: '';
    @apply absolute top-0 left-0 w-1/4 h-full;
  }

  &::after {
    content: '';
    @apply absolute top-0 left-0 w-full h-1/4;
  }

  .el-icon-check {
    @apply absolute right-1 bottom-1;
  }
}

.side-menu-layout {
  @apply bg-slate-50 dark:bg-slate-400;

  &::before {
    @apply bg-slate-900 z-10;
  }

  &::after {
    @apply bg-white dark:bg-slate-700;
  }
}

.top-menu-layout {
  @apply bg-slate-50 dark:bg-slate-400;

  &::after {
    @apply bg-slate-900;
  }
}

.mix-menu-layout {
  @apply bg-slate-50 dark:bg-slate-400;

  &::before {
    @apply bg-white dark:bg-slate-700;
  }

  &::after {
    @apply bg-slate-900 z-10;
  }
}
</style>
