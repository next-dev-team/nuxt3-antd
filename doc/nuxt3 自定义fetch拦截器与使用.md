# nuxt3 自定义fetch拦截器与使用

1. 在`composables`文件夹下新建一个`fetch.ts`的文件，在里面引入ohmyfetch的`$fetch`

```ts
import { $fetch } from 'ohmyfetch'
```

2. 在`fetch.ts`中导出一个新的composable api, 设置baseURL

```ts
import { $fetch } from 'ohmyfetch'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/'
})
```

3. 设置相对应的`fetch`拦截器

```ts
import { $fetch } from 'ohmyfetch'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/',
  // 请求拦截器
  async onRequest({ options }) {
    const requestData = options.method === 'get' ? options.params : options.body
    // 为每个请求加上自定义headers
    options.headers = {
      // 需要将之前的请求头添加到新的请求头中
      // 不然会被覆盖
      ...options.headers,
      customs: `count: ${count.value}`,
    }
    console.log('[fetch request]', requestData)
  },
  // 请求错误拦截器 （请求时发生错误会进入到此）
  async onRequestError({ request, options, error }) {
    // Log error
    console.log('[fetch request error]', request, error)
  },
  // 响应拦截器
  async onResponse({ response }) {
    console.log('[fetch response]', response.status, response._data)
  },
  // 响应错误拦截器（与响应拦截器一致，但response.ok不为true时才会触发）
  // ↑为官网翻译，实测状态码不为200时就会触发，且response.ok就为false
  async onResponseError({ request, response, options }) {
    // Log error
    console.log('[fetch response error]', request, response.status, response.body)
  }
})
```

4. 定义一个`api`的文件夹，里面新建ts文件去统一API请求，可以参考如下

```ts
// user.ts
// 不需要导入`useCustomFetch`，nuxt会自动帮我们处理
// import { useCustomFetch } from './fetch'

// User类型约束，后续得到数据后可以有明显的类型提示
interface User {
  id: number
  name: string
}

export const async getUserInfo(id: number) {
  const data = await useCustomFetch<User>('user', {
    method: 'post',
    // post请求携带的参数
    body: {
      id
    }
  })
  return data
}
```

5. 在其他地方如果需要使用`api`, 直接调用api内的内容即可

```ts
import { getUserInfo } from './api/user'

getUserInfo('api').then((data) => {
  console.log(data.id)
  console.log(data.name)
})
```