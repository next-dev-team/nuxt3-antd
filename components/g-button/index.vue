<script lang="ts" setup>
import { ButtonProp } from './props'

const props = defineProps(ButtonProp)

defineComponent({
  name: 'GButton',
  inheritAttrs: false,
})

// get component class
const attrs = useAttr({ excludeDefaultKeys: false })
const getButtonClass = computed(() => {
  const { color, disabled } = props
  return [
    {
      [`ant-btn-${color}`]: !!color,
      'is-disabled': disabled,
    },
    // _tw('hidden'),
  ]
})

// get inherit binding value
const getBindValue = computed(() => ({ ...unref(attrs), ...props }))
</script>

<template>
  <AButton v-bind="getBindValue" :class="getButtonClass">
    <template #default="data">
      <slot name="preIcon" />
      <slot v-bind="data || {}"></slot>
      <!-- <Icon v-if="postIcon" :icon="postIcon" :size="iconSize" /> -->
    </template>
  </AButton>
</template>
