<template>
  <transition
    enter-active-class="transition-opacity"
    leave-active-class="transition-opacity"
    enter-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showModal"
      @click="setCollapse(!collapse)"
      class="fixed top-0 left-0 right-0 bottom-0 z-1100 bg-black bg-opacity-25"
    ></div>
  </transition>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { ClientSizes } from '@/config/enums'
import type { ClientSize } from '@/config/types'

@Component
export default class extends Vue {
  @Getter('app/collapse') collapse!: boolean
  @Getter('app/clientSize') clientSize!: ClientSize
  @Action('app/setCollapse') setCollapse!: (value: boolean) => void

  get showModal (): boolean {
    return this.clientSize === ClientSizes.xs && !this.collapse
  }
}
</script>
