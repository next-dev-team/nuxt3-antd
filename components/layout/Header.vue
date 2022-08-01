<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <a-layout-header>
    <div class="logo" />
    <a-menu
      :selected-keys="[route.path]"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="/">
        <nuxt-link to="/">
          首页
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="/course-list">
        <nuxt-link to="/course-list">
          课程中心
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="/member-vip">
        <nuxt-link to="/member-vip">
          超级会员
        </nuxt-link>
      </a-menu-item>
      <a-sub-menu key="/one-to-one">
        <template #title>
          一对一辅导
        </template>
        <a-menu-item key="/one-to-one/qd">
          <nuxt-link to="/one-to-one/qd">
            前端一对一
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="/one-to-one/hd">
          <nuxt-link to="/one-to-one/hd">
            后端一对一
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="/tool">
        <nuxt-link to="/tool">
          工具
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style lang="less" scoped>
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
