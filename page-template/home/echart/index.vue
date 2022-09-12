<template>
  <ACard title="EchartJs Pie Chart" :loading="loading">
    <ClientOnly>
      <div ref="chartRef" :style="{ width, height }"></div>
    </ClientOnly>
  </ACard>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

const props = defineProps({
  loading: Boolean,
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '300px',
  },
});

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

watch(
  () => props.loading,
  () => {
    if (props.loading) {
      return;
    }
    setOptions({
      tooltip: {
        trigger: 'item',
      },

      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 500, name: 'Electronics' },
            { value: 310, name: 'clothing' },
            { value: 274, name: 'cosmetics' },
            { value: 400, name: 'home' },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 400;
          },
        },
      ],
    });
  },
  { immediate: true },
);
</script>
