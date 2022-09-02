<template>
  <div :style="headerStyle" :class="headerClass">
    <div class="flex-shrink-0 h-full flex items-center">
      <Logo v-show="showLogo" :showTitle="!showCollapseButton" class="pl-5"></Logo>
      <CollapseButton v-if="showCollapseButton" class="header-item ml-2"></CollapseButton>
    </div>
    <div class="flex-grow"></div>
    <div class="flex-shrink-0 h-full flex items-center">
      <Notice class="header-item"></Notice>
      <UserInfo class="header-item"></UserInfo>
      <Language class="header-item"></Language>
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ClientSizes, Layouts } from '@/config/enums'
import type { Layout, ClientSize } from '@/config/types'
import Logo from '@/layout/logo/Logo.vue'
import CollapseButton from '@/layout/collapse-button/CollapseButton.vue'
import Notice from '@/layout/header/components/Notice.vue'
import UserInfo from '@/layout/header/components/UserInfo.vue'
import Language from '@/components/language/Language.vue'
import config from '@/config/config'

interface Style {
  [key: string]: string
}

const {
  HeaderHeight
} = config

@Component({
  components: {
    Logo,
    CollapseButton,
    Notice,
    UserInfo,
    Language
  }
})
export default class extends Vue {
  @Getter('app/layout') layout!: Layout
  @Getter('app/clientSize') clientSize!: ClientSize
  @Getter('app/fixedHeader') fixedHeader!: boolean

  get headerStyle (): Style {
    const style: Style = {
      height: `${HeaderHeight}px`
    }

    return style
  }

  get headerClass (): string[] {
    const classList = ['top-0 left-0 right-0 flex items-center pr-2 box-border shadow _background-primary']

    classList.push(this.fixedHeader ? 'fixed' : 'absolute')

    if (
      this.layout === Layouts['top-menu-layout'] ||
      this.layout === Layouts['mix-menu-layout']
    ) {
      classList.push('z-999')
    } else {
      classList.push('z-500')
    }

    return classList
  }

  get showCollapseButton (): boolean {
    return this.clientSize === ClientSizes.xs
  }

  get showLogo (): boolean {
    return !(this.layout === Layouts['side-menu-layout']) || this.clientSize === ClientSizes.xs
  }
}
</script>

<style lang="scss" scoped>
.header-item {
  @apply h-full hover:bg-slate-50 dark:hover:bg-slate-900;
}
</style>
