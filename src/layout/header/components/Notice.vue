<template>
  <el-popover
    placement="bottom"
    width="336"
    trigger="click"
    popper-class="p-0"
  >
    <el-tabs v-model="tab" stretch>
      <el-tab-pane :label="'通知' + (notificationCount ? `(${notificationCount})` : '')" name="notification">
        <notice-notification :count.sync="notificationCount"></notice-notification>
      </el-tab-pane>
      <el-tab-pane :label="'消息' + (messageCount ? `(${messageCount})` : '')" name="message">
        <notice-message :count.sync="messageCount"></notice-message>
      </el-tab-pane>
      <el-tab-pane :label="'待办' + (eventCount ? `(${eventCount})` : '')" name="event">
        <notice-event :count.sync="eventCount"></notice-event>
      </el-tab-pane>
    </el-tabs>
    <div
      slot="reference"
      class="h-full px-3 flex items-center relative z-10 cursor-pointer"
    >
      <el-badge :value="totalCount" :hidden="totalCount === 0">
        <i class="el-icon-bell _color-primary"></i>
      </el-badge>
    </div>
  </el-popover>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NoticeNotification from '@/layout/header/components/NoticeNotification.vue'
import NoticeMessage from '@/layout/header/components/NoticeMessage.vue'
import NoticeEvent from '@/layout/header/components/NoticeEvent.vue'

@Component({
  components: {
    NoticeNotification,
    NoticeMessage,
    NoticeEvent
  }
})
export default class Notice extends Vue {
  tab: string = 'notification'

  notificationCount: number = 0
  messageCount: number = 0
  eventCount: number = 0

  get totalCount (): number {
    return this.notificationCount + this.messageCount + this.eventCount
  }
}
</script>
