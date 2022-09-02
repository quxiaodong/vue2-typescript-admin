<template>
  <div :style="asideStyle" :class="asideClass">
    <div class="h-full pb-10 box-border">
      <el-scrollbar class="h-full">
        <Logo :showTitle="showTitle" class="pl-5"></Logo>
        <Menu></Menu>
      </el-scrollbar>
    </div>
    <CollapseButton class="border-t absolute left-0 bottom-0 w-full h-10 _background-primary"></CollapseButton>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { Layouts, ClientSizes } from '@/config/enums'
import type { Layout, ClientSize } from '@/config/types'
import Logo from '@/layout/logo/Logo.vue'
import Menu from '@/layout/aside/components/Menu.vue'
import CollapseButton from '@/layout/collapse-button/CollapseButton.vue'
import config from '@/config/config'

interface Style {
  [key: string]: string
}

const {
  AsideOpenedWidth,
  AsideClosedWidth
} = config

@Component({
  components: {
    Logo,
    Menu,
    CollapseButton
  }
})
export default class extends Vue {
  @Getter('app/collapse') collapse!: boolean
  @Getter('app/clientSize') clientSize!: ClientSize
  @Getter('app/layout') layout!: Layout
  @Getter('app/fixedAside') fixedAside!: boolean

  get asideStyle (): Style {
    const style: Style = {}

    if (this.clientSize === ClientSizes.xs) {
      style.width = '70%'
    } else {
      style.width = `${this.collapse ? AsideClosedWidth : AsideOpenedWidth}px`
    }

    if (this.clientSize === ClientSizes.xs && this.collapse) {
      style.left = '-70%'
    } else if (this.layout === Layouts['top-menu-layout']) {
      style.left = `-${AsideOpenedWidth}px`
    } else {
      style.left = '0'
    }

    return style
  }

  get asideClass (): string[] {
    const classList = ['top-0 bottom-0 flex flex-col shadow transition-left _background-primary']

    classList.push(this.fixedAside || this.clientSize === ClientSizes.xs ? 'fixed' : 'absolute')

    if (this.clientSize === ClientSizes.xs) {
      classList.push('z-1200')
    } else if (this.layout === Layouts['side-menu-layout']) {
      classList.push('z-999')
    } else {
      classList.push('z-500')
    }

    return classList
  }

  get showTitle (): boolean {
    return this.clientSize === ClientSizes.xs
      ? true
      : !this.collapse
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-scrollbar__wrap {
  @apply overflow-x-hidden;
}
</style>
