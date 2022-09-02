<template>
  <el-submenu :index="path" :popper-append-to-body="false">
    <template slot="title">
      <i v-if="menu.meta && menu.meta.icon" :class="menu.meta.icon"></i>
      <span v-if="menu.meta">{{menu.meta.title}}</span>
    </template>
    <template v-for="(item, index) in list">
      <SubMenu
        v-if="item.children"
        :key="index"
        :menu="item"
        :path="path + '/' + item.path"
      ></SubMenu>
      <MenuItem
        v-else
        :key="index"
        :item="item"
        :path="path + '/' + item.path"
      ></MenuItem>
    </template>
  </el-submenu>
</template>

<script lang="ts">
import { RouteConfig } from 'vue-router'
import { Component, Prop, Vue } from 'vue-property-decorator'
import MenuItem from './MenuItem.vue'

@Component({
  name: 'SubMenu',
  components: { MenuItem }
})
export default class SubMenu extends Vue {
  @Prop() readonly menu!: RouteConfig
  @Prop() readonly path!: string

  get list (): RouteConfig[] {
    if (this.menu.children) {
      return this.menu.children.filter((menu: RouteConfig) => !menu.meta?.hide)
    }
    return []
  }
}
</script>
