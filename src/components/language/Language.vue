<template>
  <el-dropdown @command="setLocale">
    <div class="flex items-center h-full p-3 box-border">
      <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"
        class="fill-current _color-primary"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
      </svg>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(value, key) in locales"
        :key="key"
        :command="key"
        :disabled="key === locale"
      >
        {{ value }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { Locales } from '@/config/enums'
import type { Locale } from '@/config/types'

@Component
export default class extends Vue {
  @Getter('app/locale') readonly locale!: Locale
  @Action('app/setLocale') setLocale!: (value: Locale) => void

  locales = Locales
}
</script>
