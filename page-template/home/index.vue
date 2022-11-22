<script lang="ts" setup>
const activeKey = ref("1");
</script>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Graph QL">
      <TemplateHomeGraphQl />
      <IconAntDesignSmileOutlined style="font-size: 24px; color: green" />
      <IconLogosFacebook style="font-size: 18px" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="User CRUD">
      <TemplateHomeUser />
    </a-tab-pane>
    <a-tab-pane key="3" tab="EchatJs">
      <TemplateHomeEchart />
    </a-tab-pane>
  </a-tabs>
</template>
