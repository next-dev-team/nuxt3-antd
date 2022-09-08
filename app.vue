<template>
  <div :style="{ padding: '4rem' }">
    <a-config-provider>
      <a-row justify="space-between">
        <a-typography-title :level="3">
          Wellcome to {{ dp.name }}
        </a-typography-title>
      </a-row>
      <a-space size="small" style="margin-bottom: 30px">
        <a-tag color="cyan"> Nuxt: {{ dp.devDependencies.nuxt }} </a-tag>
        <a-tag color="magenta"> Antd: {{ dp.dependencies['ant-design-vue'] }} </a-tag>
      </a-space>

      <NuxtPage />
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
</script>
