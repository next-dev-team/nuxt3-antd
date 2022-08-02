<template>
  <a-layout id="layout">
    <layout-header />
    <a-layout-content id="content">
      <div class=" flex ">
        <layout-side-menu />
        <main class="flex-1 min-w-0 overflow-auto h-[92.7vh]">
          <slot />
        </main>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped>
#layout {
  height: 100%;

  #content {
    height: 100%;
  }
}
</style>
