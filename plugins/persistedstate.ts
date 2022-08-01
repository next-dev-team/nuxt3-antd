import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'
import { defineNuxtPlugin, useCookie } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie))
})
