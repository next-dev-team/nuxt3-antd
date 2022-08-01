# nuxt3 路由及拦截器

1. 静态路由，<br>
在`pages`内的所有vue页面都将会自动转换为对应的路由，如下所示：

```
nuxt3-app
├─ pages
  ├─ index.vue // http://localhost:3000
  ├─ page1.vue // http://localhost:3000/page1
  └─ page2.vue // http://localhost:3000/page2
```
↑ pages下的三个`.vue`文件都将转换为对应的路由

---
2. 动态路由:<br>
在nuxt3中，你只需要将动态参数写在[]中即可，如果需要有固定名称，则需要使用`-`隔开，如下所示：
```
├─ pages
  ├ user-[id]
  ├  └─ [name].vue // http://localhost:3000/user-:id/:name
  └─ index.vue // http://localhost:3000
```
---
3. 嵌套路由，<br>
与其类似，在pages下创建路由文件时将其以文件夹包裹时，对应文件夹内的vue文件则为嵌套路由，如下所示：
```
├─ pages
  ├ user
  ├  ├─ page1.vue // http://localhost:3000/user/page1
  ├  └─ page2.vue // http://localhost:3000/user/page2
  ├─ user.vue // http://localhost:3000/user
  └─ index.vue // http://localhost:3000
```
---
4. 路由跳转,<br>
nuxt3中使用`<NuxtLink>`进行跳转， 等同于`vue-router`的`<RouterLink>`<br>
如果需要使用编程式路由跳转，则需要使用nuxt3封装的`navigateTo`方法，如下所示：
```ts
// 直接使用即可，无需导入
navigateTo({
  path: '/user/:id',
  query: {
    name: 'nuxt'
  }
})

navigateTo('/login')

// 获取当前路由新的话使用，$route
const params = $route.params // 获取路由参数
```
---
5. 路由渲染，<br>
在`vue-router`中我们使用`<RouterView>`来将路由渲染出来，而在nuxt3中则新的语义别名`<NuxtPage>`进行渲染。<br>
而嵌套路由的的渲染，vue3中也是用`<RouterView>`来作渲染容器，但是在nuxt3中也定义一个新的语义别名`<NuxtChild>`替换
```html
<!-- 两个子路由页面 -->
<template>
  <h1>page1</h1>
</template>

<template>
  <h1>page2</h1>
</template>

<!-- 父路由页面 -->
<template>
  <div>
    <NuxtLink to="/user/page1">page1</NuxtLink> <br>
    <NuxtLink to="/user/page2">page2</NuxtLink>
    <h1>user</h1>
    <NuxtChild />
  </div>
</template>

<!-- 主路由页面 -->
<template>
  <div>
    <NuxtLink to="/user">go to user</NuxtLink>
    <NuxtPage />
  </div>
</template>
```
---
6. 中间件，<br>
在nuxt3中，因默认的路由为约定路由，没有相对应的路由实例，自然是无法像`vue-router`那样通过实例对象去操作路由守卫.<br/>
但nuxt3像我们提供了一种中间件的方式代替原有操作路由守卫的方式.<br>
路由中间件分三种，
- 内联路由中间件，直接在页面中定义
```ts
definePageMeta({
  middleware: (to, from) => {
    console.log('to', to, 'from', from)
  },
})
```
- 常规中间件，存放`middleware`目录下，在页面中使用时会自动异步加载
```ts
// pages/admin.vue
definePageMeta({
  middleware: 'auth',
  // 可以定义多个
  // middleware: ['user', 'auth', 'etc..']
})

// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to, 'from', from)
  // 可以return到另外一个中间件
  // return '/secret'
})

```

- 全局中间件，无需页面引入，存放在`middleware`目录下，需要以.global.{ts/js}结尾，全部路由页面中都会主动加载
```ts
// middleware/test.global.ts
export default defineNuxtRouteMiddleware(() => {
  console.log(`I'm a global middleware!`)
})
```

- 动态路由实现，实现动态路由的话会与以上三种常规的有所区别，需要手动运用到nuxt的插件化技术
```ts
// plugins/dynamic-route.ts

export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('global dynamic route middleware')
  }, { global: true })

  addRouteMiddleware('normal-test', () => {
    console.log('normal dynamic route middleware')
  })
})
```
---
7. 原生路由守卫（HCK）
- 第一步： 在`plugins`文件夹里创建一个新的ts文件
- 第二步： 导出`defineNuxtPlugin`，标识这是一个插件
```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // todo....
})
```
- 第三步： 将所需的拦截器写入到nuxtApp中的$router里
```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router // 类型断言

  router.beforeEach((to, from, next) => {
    console.log('router interceptor before')
    next()
  })

  router.afterEach(() => {
    console.log('router interceptor after')
  })
})
```
- 其他`vue-router`相关的API都可在此实现