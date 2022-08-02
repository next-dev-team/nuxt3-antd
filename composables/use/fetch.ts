import { $fetch } from 'ohmyfetch'
import { storeToRefs } from 'pinia'
import { API_BASE_URL } from '~~/constants/env'

export const $useFetch = $fetch.create({
  baseURL: API_BASE_URL,
  async onRequest({ options }) {
    const requestData = options.method === 'get' ? options.params : options.body
    const { token } = storeToRefs(useUserStore())
    options.headers = {
      ...options.headers,
      authorization: `Bearer ${token.value}`,
    }
    console.log('[fetch request]', requestData)
  },
  async onResponse({ response }) {
    console.log('[fetch response]', response.status, response._data)
  },
  async onResponseError({ request, response }) {
    // Log error
    console.log('[fetch response error]', request, response.status, response.body)
  },
})
