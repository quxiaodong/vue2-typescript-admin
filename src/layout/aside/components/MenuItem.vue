<template>
  <el-menu-item :index="path">
    <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
    <span v-if="item.meta">{{item.meta.title}}</span>
  </el-menu-item>
</template>

<script lang="ts">
import { RouteConfig } from 'vue-router'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() readonly item!: RouteConfig
  @Prop() readonly path!: string
}
</script>
