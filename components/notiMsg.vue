<script lang="ts" setup>
defineProps<{
  title: string | string[]
}>()
</script>

<template>
  <div class="flex flex-col gap-y-0.5">
    <a-typography-text v-if="typeof title === 'string'">
      {{ title }}
    </a-typography-text>
    <a-typography-text v-for="(item, index) in title" v-else :key="index">
      {{ item }}
    </a-typography-text>
  </div>
</template>
