<script lang="ts" setup>
import { userLoginApi } from '~~/api/user'

interface IState {
  type: 'email' | 'phone'
  email?: string
  password?: string
  phone_country?: string
  loadingLogin?: boolean

}
const state = reactive<IState>({
  type: 'email',
})
const userStore = useUserStore()
const { replace } = useRouter()

const isEmail = computed(() => state.type === 'email')

const onFinish = (values: IState) => {
  state.loadingLogin = true
  userLoginApi({ email: values.email, type: state.type, password: values.password }).then((res) => {
    const token = res?.data?.token
    userStore.setToken(token)
    token && replace('/')
  })
    .finally(() => {
      state.loadingLogin = false
    })
}
</script>

<template>
  <LayoutSection>
    <div class="max-w-lg mx-auto py-24">
      <a-typography-title :level="2">
        UMPAY Login
      </a-typography-title>
      <ASpace class="mt-8">
        <AButton :type="isEmail ? 'primary' : 'text'" size="large" @click="state.type = 'email'">
          Email
        </AButton>
        <AButton :type="isEmail ? 'text' : 'primary'" size="large" @click="state.type = 'phone'">
          Phone Number
        </AButton>
      </ASpace>
      <div class="mt-7">
        <a-form :model="state" name="normal_login" layout="vertical" @finish="onFinish">
          <a-form-item
            v-if="isEmail" label="email" name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input v-model:value="state.email">
              <template #prefix>
                <mail-outlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            v-else
            label="Phone Number" name="phone"
            :rules="[{ required: true, message: 'Please input your phone!' }]"
          >
            <a-select
              v-model:value="state.phone_country"
              clear-icon placeholder="please select your zone"
            >
              <template #suffixIcon>
                <smile-outlined class="ant-select-suffix" />
              </template>
              <a-select-option value="shanghai">
                <span role="img" aria-label="China">🇨🇳</span>
                Zone one
              </a-select-option>
              <a-select-option value="beijing">
                Zone two
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            label="Password" name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="state.password">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button :loading="state.loadingLogin" size="large" type="primary" html-type="submit" block>
              Log in
            </a-button>
          </a-form-item>
          <div>
            <NuxtLink to="/forgot-password" class="pointer-events-none cursor-pointer">
              Forgot password
            </NuxtLink>
          </div>
        </a-form>
      </div>
    </div>
  </LayoutSection>
</template>

