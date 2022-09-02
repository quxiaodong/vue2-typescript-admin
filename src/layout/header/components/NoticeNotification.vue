<template>
  <div>
    <div v-if="syncedCount">
      <div class="list">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="flex items-start px-5 py-3"
        >
          <div
            :style="{ background: types[item.type] }"
            class="mr-4 w-8 h-8 flex items-center justify-center rounded-full"
          >
            <i :class="[item.type, 'text-white font-bold']"></i>
          </div>
          <div>
            <div
              class="mb-2 w-60 whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {{ item.title }}
            </div>
            <div>{{ item.time }}</div>
          </div>
        </div>
      </div>
      <div class="flex border-t border-solid border-inherit">
        <div class="leading-10 text-center w-2/4 border-r border-solid border-inherit cursor-pointer">清空通知</div>
        <div class="leading-10 text-center w-2/4 cursor-pointer">查看更多</div>
      </div>
    </div>
    <el-empty v-else description="暂无通知"></el-empty>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'

enum Types {
  'el-icon-message' = '#fe5d58',
  'el-icon-document' = '#3391e5',
  'el-icon-plus' = '#9cdddd',
  'el-icon-warning-outline' = '#ffce3d'
}

interface List {
  type: keyof typeof Types,
  title: string,
  time: string
}

@Component
export default class NoticeNotification extends Vue {
  @PropSync('count', { type: Number }) syncedCount!: number

  types = Types

  list: List[] = []

  created (): void {
    setTimeout(() => {
      this.list = [
        {
          type: 'el-icon-message',
          title: '你收到了 14 份新周报',
          time: '5 年前'
        },
        {
          type: 'el-icon-document',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          time: '5 年前'
        },
        {
          type: 'el-icon-plus',
          title: '这种模板可以区分多种通知类型',
          time: '5 年前'
        },
        {
          type: 'el-icon-warning-outline',
          title: '左侧图标用于区分不同的类型',
          time: '5 年前'
        },
        {
          type: 'el-icon-message',
          title: '内容不要超过两行字，超出时自动截断',
          time: '5 年前'
        }
      ]
      this.syncedCount = this.list.length
    }, 3000)
  }
}
</script>
