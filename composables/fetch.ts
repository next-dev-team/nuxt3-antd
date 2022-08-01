import { $fetch } from 'ohmyfetch'
import { storeToRefs } from 'pinia'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/',
  async onRequest({ options }) {
    const requestData = options.method === 'get' ? options.params : options.body
    const { count } = storeToRefs(useCount())
    options.headers = {
      ...options.headers,
      customs: `count: ${count.value}`,
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
