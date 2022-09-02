<template>
  <div class="aside-menu-wrapper">
    <el-menu
      router
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
    >
      <template v-for="(item, index) in list">
        <SubMenu v-if="item.children" :key="index" :menu="item" :path="item.path"></SubMenu>
        <MenuItem v-else :key="index" :item="item" :path="item.path"></MenuItem>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { RouteConfig } from 'vue-router'
import { Getter } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ClientSizes } from '@/config/enums'
import type { ClientSize } from '@/config/types'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'

@Component({
  components: {
    SubMenu,
    MenuItem
  }
})
export default class extends Vue {
  @Getter('app/collapse') collapse!: boolean
  @Getter('app/clientSize') clientSize!: ClientSize
  @Getter('user/formatMenus') formatMenus!: RouteConfig[]

  get isCollapse (): boolean {
    return this.clientSize === ClientSizes.xs
      ? false
      : this.collapse
  }

  get list (): RouteConfig[] {
    return this.formatMenus.filter(menu => !menu.meta?.hide)
  }
}
</script>

<style lang="scss" scoped>
.aside-menu-wrapper ::v-deep .el-menu {
  border-right: 0;
  border: none!important;
  @apply bg-white dark:bg-slate-800;

  .el-submenu__title {
    height: 40px;
    line-height: 40px;
    @apply text-slate-500 dark:text-slate-400;

    &:hover,
    &:focus {
      @apply bg-slate-50 dark:bg-slate-900;
    }

    i {
      color: inherit;
    }
  }

  .el-submenu.is-active > .el-submenu__title {
    color: #409EFF;
  }

  .el-menu-item {
    height: 40px;
    line-height: 40px;
    @apply text-slate-500 dark:text-slate-400;

    &:hover,
    &:focus {
      @apply bg-slate-50 dark:bg-slate-900;
    }

    &.is-active {
      color: #409EFF;
    }
  }
}
</style>
