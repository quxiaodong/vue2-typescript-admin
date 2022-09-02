<template>
  <div
    @click="setCollapse(!collapse)"
    class="_color-primary flex items-center justify-center p-3 box-border cursor-pointer"
  >
    <i :class="[collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold', 'text-base']"></i>
  </div>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Getter('app/collapse') collapse!: boolean
  @Action('app/setCollapse') setCollapse!: (value: boolean) => void
}
</script>
