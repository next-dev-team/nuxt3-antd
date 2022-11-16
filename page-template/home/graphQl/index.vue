<script lang="ts" setup>
const { result, loading, refetch } = useStockQuery();

watchEffect(() => {
  console.log("result", result.value?.stock);
});
const ASSETS = "https://dwmniez7.directus.app/assets/";
</script>

<template>
  <ACard size="small" title="Graph Ql with SSR">
    <template #extra>
      <!-- <IconMajesticonsReloadCircle
        class="text-2xl cursor-pointer hover:opacity-80"
        @click="refetch"
      /> -->
    </template>
    <ARow :gutter="[40, 40]">
      <ASkeleton :loading="loading">
        <a-col :span="6" v-for="(item, index) in result?.stock" :key="index">
          <div>
            <a
              href="#"
              class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
            >
              <img
                :src="ASSETS + item?.produc_thumnail?.id"
                loading="lazy"
                alt="Photo by Austin Wade"
                class="w-full h-full object-contain object-center group-hover:scale-110 transition duration-200"
              />

              <span
                class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5"
                >-50%</span
              >
            </a>

            <div
              class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4"
            >
              <div class="flex flex-col">
                <a
                  href="#"
                  class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >{{ item?.title }}</a
                >
                <span class="text-gray-500 text-sm lg:text-base"
                  >by Fancy Brand</span
                >
              </div>

              <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">$19.99</span>
                <span class="text-red-500 text-sm line-through">$39.99</span>
              </div>
            </div>
          </div>
        </a-col>
      </ASkeleton>
    </ARow>
  </ACard>
</template>
