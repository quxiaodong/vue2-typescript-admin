<template>
  <div>
    <div v-if="syncedCount">
      <div class="list">
      </div>
      <div class="flex border-t border-solid border-inherit">
        <div class="leading-10 text-center w-2/4 border-r border-solid border-inherit cursor-pointer">清空通知</div>
        <div class="leading-10 text-center w-2/4 cursor-pointer">查看更多</div>
      </div>
    </div>
    <el-empty v-else description="暂无消息"></el-empty>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'

@Component
export default class NoticeMessage extends Vue {
  @PropSync('count', { type: Number }) syncedCount!: number
}
</script>
