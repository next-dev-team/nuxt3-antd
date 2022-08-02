import path from 'path'
import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',

  ],
  autoImports: {
    dirs: [
      // Scan composables from nested directories
      'composables/**',
    ],
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  ssr: true,
  // tailwindcss: {
  //   cssPath: '~/assets/tailwind.css',
  // },
  vite: {
    // Windows hot fix
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({
          resolveIcons: true,
          importStyle: 'less',
        })],
        dts: 'types/components.d.ts',
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, './'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
          modifyVars: {
            // tw primary 300
            'primary-color': '#ffd12f',
            // tw title 700
            'btn-primary-color': '#1f2937',
            // tw primary 500
            'link-color': '#eab308',
          },
        },
      },
    },
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
    },
  },
})
