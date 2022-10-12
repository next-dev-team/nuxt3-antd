import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import { antdTheme } from "./tools/antdTheme";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

const isDev = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
  ssr: true,

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
  modules: ["@vueuse/nuxt", "nuxt-lodash"],
  lodash: {
    prefix: "_",
    prefixSkip: ["is"],
    exclude: ["map"],
    alias: [
      // ['camelCase', 'stringToCamelCase'], // => _StringToCamelCase
    ],
  },
  buildModules: ["unplugin-icons/nuxt"],
  components: {
    dirs: [
      {
        path: "~/components",
        extensions: ["vue", "tsx"],
      },
      {
        path: "~/page-template",
        extensions: ["vue"],
        prefix: "Template",
      },
    ],
  },
  imports: {
    dirs: [
      // Scan composables from nested directories
      "composables/**",
      "utils/**",
    ],
  },
  alias: {
    dayjs: "dayjs/esm/",
  },
  build: {
    transpile: [
      "lodash-es",
      "@ant-design/icons-vue",
      "echarts",
      isDev ? "" : "@babel/runtime", // building time: Could not resolve import "@babel/runtime/helpers/esm/objectSpread2.js"
    ],
  },
  css: ["~/assets/global.less"],
  vite: {
    ssr: {
      noExternal: ["ant-design-vue", "dayjs"],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
          modifyVars: antdTheme(),
        },
      },
    },

    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
          // resolveIcons true will error with NITRO_PRESET=cloudflare
          AntDesignVueResolver({ resolveIcons: true, importStyle: "less" }),
        ],
        dts: "types/components.d.ts",
      }),
    ],
    esbuild: isDev
      ? {}
      : {
          pure: !isDev ? ["console.log", "console.warn", "debugger"] : [],
          legalComments: "none",
        },
  },
});
