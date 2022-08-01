<script lang="ts" setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('This is an example of inline middleware')
    console.log('to', to, 'from', from)
  },
})
</script>

<template>
  <div>当前路由 - {{ $route.params.id }}</div>
</template>

<style lang="less">
</style>
