<template>
  <div>
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }"
    >
      <a-card bordered title="Antd Feedback" size="small">
        <a-space>
          <a-button type="primary" @click="_message.info('hello')"
            >Message</a-button
          >
          <a-button
            danger
            @click="
              _notification.success({
                message: 'hello',
                description: 'hello Notification',
              })
            "
            >Notification</a-button
          >
          <g-button
            color="success"
            @click="_modal.info({ title: 'Modal', content: 'Hello Modal' })"
            >Modal custom btn</g-button
          >
        </a-space>
      </a-card>

      <a-card bordered title="Auto Import Icons" size="small">
        <template #extra>
          <NuxtLink
            to="https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones"
            target="_blank"
          >
            Icons here
          </NuxtLink>
        </template>
        <a-space>
          <SmileOutlined style="font-size: 24px; color: green" />
          <IconLogosFacebook style="font-size: 18px" />
          <IconEmojioneFlagForCambodia style="font-size: 19px" />
        </a-space>
      </a-card>

      <a-card bordered title="Antd Form" size="small">
        <a-space>
          <a-form
            :model="formState"
            name="horizontal_login"
            layout="inline"
            autocomplete="off"
            @finish="onFinish"
          >
            <a-form-item
              label="Username"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.username">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
              label="Password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password v-model:value="formState.password">
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item name="date-picker" label="DatePicker">
              <a-date-picker
                v-model:value="formState['date-picker']"
                value-format="YYYY-MM-DD"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit">Log in</a-button>
            </a-form-item>
          </a-form>
        </a-space>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = (values: FormState) => {
  _modal.info({
    title: 'Form results',
    content: JSON.stringify(values),
  });
};
</script>
