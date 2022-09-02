<template>
  <div :style="mainStyle" class="min-h-screen box-border transition-padding flex flex-col">
    <div :style="contentStyle" class="flex-grow w-full mx-auto">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { Layouts, ClientSizes, ContentWidths } from '@/config/enums'
import type { Layout, ClientSize, ContentWidth } from '@/config/types'
import Footer from '@/layout/footer/Footer.vue'
import config from '@/config/config'

interface Style {
  [key: string]: string
}

const {
  HeaderHeight,
  AsideOpenedWidth,
  AsideClosedWidth
} = config

@Component({
  components: { Footer }
})
export default class extends Vue {
  @Getter('app/collapse') collapse!: boolean
  @Getter('app/layout') layout!: Layout
  @Getter('app/clientSize') clientSize!: ClientSize
  @Getter('app/contentWidth') contentWidth!: ContentWidth

  get mainStyle (): Style {
    const style: Style = {
      paddingTop: `${HeaderHeight}px`
    }

    if (
      this.clientSize === ClientSizes.xs ||
      this.layout === Layouts['top-menu-layout']
    ) {
      style.paddingLeft = '0'
    } else {
      style.paddingLeft = `${this.collapse ? AsideClosedWidth : AsideOpenedWidth}px`
    }

    return style
  }

  get contentStyle (): Style {
    const style: Style = {
      maxWidth: this.contentWidth === ContentWidths.fluid ? 'unset' : '1200px'
    }

    return style
  }
}
</script>
