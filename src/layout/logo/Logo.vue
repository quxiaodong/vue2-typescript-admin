<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import config from '@/config/config'

const {
  HeaderHeight
} = config

@Component
export default class extends Vue {
  @Prop({ default: true }) readonly showTitle!: boolean

  render (h: CreateElement): VNode {
    return h(
      'router-link',
      {
        props: {
          to: '/'
        },
        style: {
          height: `${HeaderHeight}px`
        },
        class: ['_color-primary flex items-center']
      },
      [
        h(
          'img',
          {
            attrs: {
              src: require('@/assets/images/element-ui.svg')
            },
            class: ['w-6 transition-all']
          }
        ),
        h(
          'transition',
          {
            props: {
              'enter-active-class': 'transition-all',
              'leave-active-class': 'transition-all',
              'enter-class': 'w-0 opacity-0',
              'leave-to-class': 'w-0 opacity-0'
            }
          },
          [
            h(
              'span',
              {
                style: { display: this.showTitle ? 'block' : 'none' },
                class: ['ml-3 w-28 whitespace-nowrap overflow-hidden text-xl font-serif']
              },
              'Element UI'
            )
          ]
        )
      ]
    )
  }
}
</script>
