<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <a-layout-header>
    <div
      class="flex items-center gap-8 h-full"
    >
      <div class="mr-6 flex items-center space-x-2 ">
        <NuxtLink to="/">
          <img src="/icons/logo.svg" class="w-10" />
        </NuxtLink>
        <h3 class="text-white text-2xl">
          UMPAY
        </h3>
        <h4 class="text-white font-normal">
          Merchant
        </h4>
      </div>

      <div class="flex items-center justify-end flex-1 md:justify-between">
        <nav class="hidden md:block" aria-labelledby="header-navigation">
          <h2 id="header-navigation" class="sr-only">
            Header navigation
          </h2>
          <a-menu v-show="useUserStore().token" class="flex items-center gap-6 text-sm" :selected-keys="[route.path]" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
            <a-menu-item key="/">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </a-menu-item>
          </a-menu>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:gap-4 sm:flex">
            <NuxtLink to="/">
              <img src="/icons/i18n.svg" class="w-10 text-white" />
            </NuxtLink>
          </div>

          <button
            class="block p-2.5 text-white bg-gray-800 rounded md:hidden hover:text-white/75 transition"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<style lang="less" scoped>
</style>
