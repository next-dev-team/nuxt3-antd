import type { Router } from 'vue-router'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router

  router.beforeEach((to, from, next) => {
    console.log('router interceptor before')
    next()
  })

  router.afterEach(() => {
    console.log('router interceptor after')
  })
})
