<script lang="ts" setup>
import type { SizeType } from 'ant-design-vue/es/config-provider'
import { useCount } from '~~/composables/count'
const count = useCount()
const { count: countValue, inc, dec } = toRefs(count)

const btnSize: SizeType = 'small'
</script>

<template>
  <div class="horizontal">
    <a-button type="primary" :size="btnSize" @click="inc()">
      <template #icon>
        <plus-circle-two-tone />
      </template>
    </a-button>
    <div> count: {{ countValue }} </div>
    <a-button type="link" :size="btnSize" @click="dec()">
      <template #icon>
        <minus-circle-two-tone />
      </template>
    </a-button>
  </div>
</template>

<style lang="less" scoped>
.horizontal {
  display: flex;
}
</style>
