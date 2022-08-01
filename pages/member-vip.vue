<script lang="ts" setup>
import { deleteMockDataFetch, getMockDataFetch, postMockDataFetch, putMockDataFetch } from '~/api/fetchMock'
</script>

<template>
  <div>
    <button @click="getMockDataFetch()">
      Fetch Get
    </button>
    <button @click="postMockDataFetch()">
      Fetch Post
    </button>
    <button @click="putMockDataFetch()">
      Fetch Put
    </button>
    <button @click="deleteMockDataFetch()">
      Fetch Delete
    </button>
  </div>
</template>

<style lang="less">
</style>
