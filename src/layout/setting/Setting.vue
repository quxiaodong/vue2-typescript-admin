<template>
  <Drawer
    :visible.sync="visible"
    :width="drawerWidth"
    :show-close="false"
    :fixed="true"
  >
    <div
      slot="handle"
      @click="visible = !visible"
      class="absolute top-60 -left-12 flex items-center justify-center w-12 h-12 rounded-l cursor-pointer bg-blue-500"
    >
      <i :class="[visible ? 'el-icon-close' : 'el-icon-setting', 'text-xl text-white']"></i>
    </div>
    <div class="_background-primary h-full p-5">
      <ColorScheme></ColorScheme>
      <el-divider></el-divider>
      <NavigationMode></NavigationMode>
      <ContentWidth></ContentWidth>
      <FixedHeader></FixedHeader>
      <FixedAside></FixedAside>
      <SplitMenus></SplitMenus>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { Getter } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ClientSizes } from '@/config/enums'
import type { ClientSize } from '@/config/types'
import Drawer from '@/components/drawer/Drawer.vue'
import ColorScheme from '@/layout/setting/components/ColorScheme.vue'
import NavigationMode from '@/layout/setting/components/NavigationMode.vue'
import ContentWidth from '@/layout/setting/components/ContentWidth.vue'
import FixedHeader from '@/layout/setting/components/FixedHeader.vue'
import FixedAside from '@/layout/setting/components/FixedAside.vue'
import SplitMenus from '@/layout/setting/components/SplitMenus.vue'

@Component({
  components: {
    Drawer,
    ColorScheme,
    NavigationMode,
    ContentWidth,
    FixedHeader,
    FixedAside,
    SplitMenus
  }
})
export default class extends Vue {
  @Getter('app/clientSize') readonly clientSize!: ClientSize

  visible: boolean = false

  get drawerWidth (): string {
    if (this.clientSize === ClientSizes.xs) { // mobile
      return '70%'
    }
    return '300px'
  }
}
</script>
