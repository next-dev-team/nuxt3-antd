import type { Router } from 'vue-router'
import { defineNuxtPlugin } from '#app'

const debug = false

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router

  router.beforeEach((to, from, next) => {
    debug && console.log('router interceptor before')
    next()
  })

  router.afterEach(() => {
    debug && console.log('router interceptor after')
  })
})
