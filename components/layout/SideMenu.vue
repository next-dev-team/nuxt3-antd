<script lang="ts" setup>
import type { MenuProps } from 'ant-design-vue'
import { _common } from '~~/constants/common'

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
})
const { collapsed, openKeys, selectedKeys } = toRefs(state)

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  },
)

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}
</script>

<template>
  <div class="relative h-[92.9vh]">
    <a-menu
      id="admin-menu"
      mode="inline"
      :inline-collapsed="!collapsed"
      class="h-full md:hidden block"
      @click="handleClick"
    >
      <LayoutSideMenuItem />
    </a-menu>

    <a-menu
      id="admin-menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      class="h-full hidden md:block"
      mode="inline"
      :inline-collapsed="collapsed"
      @click="handleClick"
    >
      <LayoutSideMenuItem />
    </a-menu>
    <div class="absolute bottom-2 right-4 cursor-pointer" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </div>
  </div>
</template>

