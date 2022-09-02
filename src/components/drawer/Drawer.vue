<template>
  <div ref="drawer">
    <transition
      enter-active-class="transition-opacity"
      leave-active-class="transition-opacity"
      enter-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="syncedVisible && modal"
        @click="handleClickMask"
        :class="[fixed ? 'fixed' : 'absolute', 'top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 z-1000']"
      ></div>
    </transition>
    <div
      :style="{ width }"
      :class="[fixed ? 'fixed' : 'absolute', 'top-0 left-full bottom-0 z-1000']"
    >
      <div :class="[syncedVisible ? '-left-full' : 'left-0', 'transition-left relative top-0 w-full h-full']">
        <i
          v-if="showClose"
          @click="onClose"
          class="_color-primary el-icon-close absolute top-10 right-10 text-base cursor-pointer z-1000"
        ></i>
        <slot name="handle"></slot>
        <div class="w-full h-full overflow-hidden">
          <slot name="default"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, PropSync, Vue } from 'vue-property-decorator'
import { hasClassName } from '@/utils/dom'

@Component
export default class extends Vue {
  $refs!: {
    drawer: HTMLElement
  }

  @Prop({ default: '30%' }) readonly width!: string // 宽度
  @Prop({ default: false }) readonly fixed!: boolean // 是否fixed定位
  @Prop({ default: true }) readonly showClose!: boolean // 是否展示关闭按钮
  @Prop({ default: true }) readonly modal!: boolean // 只否展示遮罩层
  @Prop({ default: true }) readonly wrapperClosable!: boolean // 点击遮罩层是否关闭
  @Prop({ default: false }) readonly appendToBody!: boolean // 是否添加到body
  @Prop({ default: true }) readonly lockScroll!: boolean // 是否锁定滚动条
  @PropSync('visible', { type: Boolean, default: false }) syncedVisible!: boolean

  @Watch('syncedVisible')
  onVisibleChange (newValue: boolean): void {
    if (newValue) {
      this.addHiddenClass()
    } else {
      this.removeHiddenClss()
    }
  }

  mounted (): void {
    if (this.syncedVisible) {
      this.addHiddenClass()
    }
    if (this.appendToBody) {
      document.body.appendChild(this.$el)
    }
  }

  beforeDestroy (): void {
    if (this.lockScroll) {
      this.removeHiddenClss()
    }
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  addHiddenClass (): void {
    if (!this.lockScroll) return

    const el: HTMLElement | null = this.$refs.drawer.parentElement
    if (el) {
      !hasClassName(el, 'drawer-lock-scroll') && el.classList.add('drawer-lock-scroll')
    }
  }

  removeHiddenClss (): void {
    if (!this.lockScroll) return

    const el: HTMLElement | null = this.$refs.drawer.parentElement
    if (el) {
      hasClassName(el, 'drawer-lock-scroll') && el.classList.remove('drawer-lock-scroll')
    }
  }

  handleClickMask (): void {
    if (this.wrapperClosable) {
      this.onClose()
    }
  }

  onClose (): void {
    this.syncedVisible = false
  }
}
</script>
