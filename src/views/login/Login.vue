<template>
  <div class="login _background-secondary flex flex-col h-full bg-center bg-no-repeat bg-contain">
    <Language class="absolute top-4 right-4"></Language>
    <div class="flex-grow flex items-center justify-center">
      <div class="w-80">
        <div class="flex items-center justify-center mb-8">
          <img src="@/assets/images/element-ui.svg" class="mr-4 w-11">
          <span class="text-3xl font-medium _color-primary">Element UI</span>
        </div>
        <el-form ref="form" :model="model" :rules="rules">
          <el-tabs v-model="loginType" stretch>
            <el-tab-pane :label="$t('login-page.account-login:label')" name="account">
              <div v-if="loginType === 'account'">
                <el-form-item prop="account">
                  <el-input
                    v-model="model.account"
                    prefix-icon="el-icon-user"
                    :placeholder="$t('login-page.account-login:account-placeholder')"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="model.password"
                    prefix-icon="el-icon-lock"
                    :type="inputType"
                    :placeholder="$t('login-page.account-login:password-placeholder')"
                  >
                    <i
                      slot="suffix"
                      @click="toggleInputType"
                      class="cursor-pointer el-icon-view el-input__icon"
                      :class="[{'line-through': inputType === 'text'}]"
                    ></i>
                  </el-input>
                </el-form-item>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="$t('login-page.phone-login:label')" name="phone">
              <div v-if="loginType === 'phone'">
                <el-form-item prop="phone">
                  <el-input
                    v-model="model.phone"
                    prefix-icon="el-icon-mobile-phone"
                    :placeholder="$t('login-page.phone-login:phone-placeholder')"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-row :gutter="10">
                    <el-col :span="15">
                      <el-input
                        v-model="model.code"
                        prefix-icon="el-icon-key"
                        :placeholder="$t('login-page.phone-login:code-placeholder')"
                      ></el-input>
                    </el-col>
                    <el-col :span="9">
                      <el-button
                        :loading="loading"
                        :disabled="!!timer"
                        @click="getCode"
                        class="w-full"
                      >
                        {{ timer ? `${timer} sec(s)` : $t('login-page.phone-login:get-code') }}
                      </el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-form>
        <div class="flex items-center justify-between">
          <el-checkbox v-model="remember" class="font-normal">
            {{ $t('login-page.remember-me') }}
          </el-checkbox>
          <el-link type="primary" :underline="false" class="font-normal">
            {{ $t('login-page.forgot-password') }}
          </el-link>
        </div>
        <el-button
          type="primary"
          @click="onVerify"
          class="w-full mt-5"
        >
          {{ $t('login-page.login-btn') }}
        </el-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { TranslateResult } from 'vue-i18n'
import { IRule, IRules } from '@/config/interfaces'
import type { Form } from 'element-ui/types'
import Language from '@/components/language/Language.vue'
import Footer from '@/layout/footer/Footer.vue'
import { ILoginRequest } from '@/apis/user'

enum LoginType {
  account = 'account',
  phone = 'phone'
}

enum InputType {
  password = 'password',
  text = 'text'
}

const validateEmpty = (message: TranslateResult) =>
  (rule: IRule, value: unknown, callback: ((params?: Error) => void)) => {
    value = String(value).trim()
    if (value === '') {
      callback(new Error(message.toString()))
    }
    callback()
  }

@Component({
  components: {
    Language,
    Footer
  }
})
export default class Login extends Vue {
  @Action('user/login') login!: (value: ILoginRequest) => Promise<void>

  $refs!: {
    form: Form
  }

  model: ILoginRequest = {
    account: '',
    password: '',
    phone: '',
    code: ''
  }

  get rules (): IRules {
    if (this.loginType === LoginType.account) {
      return {
        account: [
          {
            required: true,
            validator: validateEmpty(this.$t('login-page.account-login:account-error-message')),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            validator: validateEmpty(this.$t('login-page.account-login:password-error-message')),
            trigger: 'blur'
          }
        ]
      }
    }
    return {
      phone: [
        {
          required: true,
          validator: validateEmpty(this.$t('login-page.phone-login:phone-error-message')),
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          validator: validateEmpty(this.$t('login-page.phone-login:code-error-message')),
          trigger: 'blur'
        }
      ]
    }
  }

  loading: boolean = false
  timer: number = 0

  loginType: keyof typeof LoginType = LoginType.account
  inputType: keyof typeof InputType = InputType.password

  remember: boolean = true

  onVerify (): void {
    this.$refs.form.validate(valid => {
      if (!valid) return

      const params: ILoginRequest = {}
      const { account, password, phone, code } = this.model

      if (this.loginType === LoginType.account) {
        params.account = account
        params.password = password
      } else if (this.loginType === LoginType.phone) {
        params.phone = phone
        params.code = code
      }

      this.onSubmit(params)
    })
  }

  onSubmit (params: ILoginRequest): void {
    if (this.loading) return
    this.loading = true

    this.login(params).then(() => {
      const redirect: string = decodeURIComponent((this.$route.query.redirect || '/').toString())
      this.$router.push({ path: redirect }).catch(error => console.log(error))
    }).finally(() => (this.loading = false))
  }

  toggleInputType (): void {
    this.inputType = this.inputType === InputType.password
      ? InputType.text
      : InputType.password
  }

  getCode (): void {
    this.loading = true

    setTimeout((): void => {
      this.loading = false
      this.timer = 60
      this.countDown()
    }, 3000)
  }

  countDown (): void {
    if (this.timer) {
      setTimeout((): void => {
        --this.timer
        this.countDown()
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.login {
  background-image: url(../../assets/images/background.svg);
}
</style>
