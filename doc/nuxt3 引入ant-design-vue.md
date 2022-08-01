# nuxt3 引入ant-design-vue

1. 安装依赖
```
npm i ant-design-vue@3 && npm i unplugin-vue-components -D
```
2. 将以下内容放置在`nuxt.config.ts`内 (固定搭配)
```ts
import { defineNuxtConfig } from 'nuxt3'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
    },
  },
})
```
3. 安装ant-design-icon
```
npm i @ant-design/icons-vue
```

4. 按照如下修改`AntDesignVueResolver`一些配置
```ts
// resolvers: [AntDesignVueResolver()]
resolvers: [AntDesignVueResolver({ resolveIcons: true })]
```

5. 重启服务器后，直接在页面中使用ant-design-vue组件，无需导入直接使用。<br>编译时会自动按需打包。