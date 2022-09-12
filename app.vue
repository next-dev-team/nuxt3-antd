<template>
  <div :style="{ padding: '4rem' }">
    <a-config-provider>
      <a-row justify="space-between">
        <a-typography-title :level="3">
          Wellcome to {{ dp.name }}
        </a-typography-title>
      </a-row>
      <a-card title="Dependencies" size="small" style="margin-bottom: 30px">
        <a-space wrap>
          <a-tag
            v-for="(val, key, ind) of allDp"
            :key="key"
            :color="ind % 2 ? 'orange' : 'magenta'"
            style="cursor: pointer"
          >
            <NuxtLink
              :to="`https://www.npmjs.com/package/${key}`"
              target="_blank"
            >
              <span
                style="font-weight: bold"
                :style="{
                  color: 'rgb(65, 78, 112)',
                }"
              >
                {{ key }}:
              </span>
              {{ val }}
            </NuxtLink>
          </a-tag>
        </a-space>
      </a-card>

      <NuxtPage />
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
const allDp = _Omit({ ...dp.dependencies, ...dp.devDependencies }, 'serve');
</script>
