<template>
  <div
    v-loading.fullscreen.lock="loading"
    class="_background-secondary relative"
  >
    <div v-show="!loading">
      <Header></Header>
      <Aside></Aside>
      <Main></Main>
      <Setting></Setting>
      <Modal></Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Header from '@/layout/header/Header.vue'
import Aside from '@/layout/aside/Aside.vue'
import Main from '@/layout/main/Main.vue'
import Modal from '@/layout/modal/Modal.vue'
import Setting from '@/layout/setting/Setting.vue'
import resize from '@/mixins/resize'
import scheme from '@/mixins/scheme'

@Component({
  components: {
    Header,
    Aside,
    Main,
    Setting,
    Modal
  }
})
export default class extends Mixins(resize, scheme) {
  loading: boolean = true

  mounted (): void {
    // 解决首次reisze时，侧边栏一闪而过的bug
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
