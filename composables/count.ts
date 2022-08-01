import { defineStore } from 'pinia'

export const useCount = defineStore('count', () => {
  const count = ref<number>(0)

  function inc() {
    count.value++
  }
  function dec() {
    count.value--
  }

  return {
    count, inc, dec,
  }
}, { persist: true })
