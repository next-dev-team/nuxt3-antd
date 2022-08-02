import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', () => {
  const token = ref('')

  const setToken = (newToken: string) => {
    token.value = newToken
  }

  return {
    token, setToken,
  }
}, {
  persist: {
    paths: ['token'], // whitelist
  },
})

