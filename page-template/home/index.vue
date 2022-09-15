<script lang="tsx" setup>
import Echart from './echart/index.vue';
import User from './user/index.vue';

const channel = _pusher.subscribe('private-umpay-gateway-payment');

onMounted(() => {
  channel.bind('private-umpay-gateway-payment', (res: any) => {
    _notification.info({ message: 'Pusher Test', description: res });
  });
});
</script>

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
          <IconAntDesignSmileOutlined style="font-size: 24px; color: green" />
          <IconLogosFacebook style="font-size: 18px" />
          <IconEmojioneFlagForCambodia style="font-size: 19px" />
        </a-space>
      </a-card>
      <User />
      <Test message="With TSX" />
      <Echart />
    </div>
  </div>
</template>
