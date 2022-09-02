<template>
  <el-dropdown @command="onClick">
    <div class="h-full px-3 flex items-center">
      <el-avatar :size="24" :src="avatar" />
      <span class="_color-primary ml-2">{{ name }}</span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/account/center" class="flex items-center">
          <i class="el-icon-user"></i>
          <span class="ml-1">个人中心</span>
        </router-link>
      </el-dropdown-item>
      <el-dropdown-item>
        <router-link to="/account/setting" class="flex items-center">
          <i class="el-icon-setting"></i>
          <span class="ml-1">个人设置</span>
        </router-link>
      </el-dropdown-item>
      <el-dropdown-item command="logout" divided>
        <div class="flex items-center">
          <i class="el-icon-unlock"></i>
          <span class="ml-1">退出登录</span>
        </div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserInfo extends Vue {
  @Getter('user/name') readonly name!: string
  @Getter('user/avatar') readonly avatar!: string
  @Action('user/logout') logout!: () => Promise<void>

  onClick (command: string): void {
    switch (command) {
      case 'logout':
        this.logout().then(() => {
          this.$router.push('/login')
        })
        break
    }
  }
}
</script>
