<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { Schemes } from '@/config/enums'
import type { Scheme } from '@/config/types'

@Component
export default class extends Vue {
  @Getter('app/scheme') readonly scheme!: Scheme
  @Action('app/setScheme') setScheme!: (value: Scheme) => void

  render (h: CreateElement): VNode {
    return h(
      'div',
      [
        h(
          'div',
          {
            class: ['_color-primary mb-3 text-sm font-medium']
          },
          this.$t('setting.color-scheme').toString()
        ),
        h(
          'div',
          {
            class: ['flex']
          },
          Object.keys(Schemes).map(scheme => {
            return h(
              'el-tooltip',
              {
                props: {
                  placement: 'top',
                  content: this.$t(`setting.color-scheme:${scheme}`)
                }
              },
              [
                h(
                  'div',
                  {
                    on: {
                      click: () => this.setScheme(scheme as Scheme)
                    },
                    class: [scheme, 'list-item']
                  },
                  [
                    scheme === this.scheme && h('i', { class: ['el-icon-check'] })
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

.light {
  @apply bg-slate-50 dark:bg-slate-400;

  &::before {
    @apply bg-white dark:bg-slate-700 z-10;
  }

  &::after {
    @apply bg-white dark:bg-slate-700;
  }
}

.dark {
  @apply bg-slate-600;

  &::before {
    @apply bg-slate-800 dark:bg-slate-900;
  }

  &::after {
    @apply bg-slate-800 dark:bg-slate-900;
  }

  .el-icon-check {
    @apply text-white;
  }
}

.no-preference {
  @apply bg-slate-50 dark:bg-slate-400;

  &::before {
    @apply bg-white dark:bg-slate-700;
  }

  &::after {
    @apply bg-slate-900 z-10;
  }
}
</style>
