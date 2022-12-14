import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import { defineNuxtModule, addTemplate, addPluginTemplate } from "@nuxt/kit";

import type { ApolloClientOptions } from "@apollo/client/core";

type ClientConfig = Partial<ApolloClientOptions<any>> & {
  authenticationType?: string;
};
export interface ApolloModuleOptions {
  [name: string]: ClientConfig | any; // <= 0.0.9
  default?: ClientConfig; // <= 0.0.9
  clientConfigs?: {
    // > 0.0.9
    default: ClientConfig;
    [name: string]: ClientConfig;
  };
  cookieAttributes?: {
    expires?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
  };
}
export default defineNuxtModule<ApolloModuleOptions>({
  meta: {
    name: "@nuxt3/apollo-module",
    configKey: "apollo",
  },
  setup(options, nuxt) {
    nuxt.options.build.transpile = nuxt.options.build.transpile || [];
    nuxt.options.build.transpile.push(
      "@apollo/client",
      "@vue/apollo-composable",
      "ts-invariant/process"
    );

    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    // save options to apollo.options.mjs
    addTemplate({
      filename: "apollo.options.mjs",
      getContents: () => `export default ${JSON.stringify(options)}`,
    });

    // add apollo plugin ( see plugin.ts ) to server and client
    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
      mode: "all",
    });
  },
});

declare module "@nuxt/schema" {
  interface NuxtConfig {
    apollo?: ApolloModuleOptions;
  }
  interface NuxtOptions {
    apollo?: ApolloModuleOptions;
  }
}
