export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()
  if (!userStore.token)
    return navigateTo('/login')
})
