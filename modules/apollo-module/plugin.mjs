import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";

import { defineNuxtPlugin } from "#app";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxt) => {
  const runtimeConfig = useRuntimeConfig();

  const httpLink = createHttpLink({
    uri:
      // runtimeConfig.public.LEADGEN_SERVICE_NAME ||
      "https://dwmniez7.directus.app/graphql",
  });
  const cache = new InMemoryCache();
  let apolloClient;
  if (process.server) {
    apolloClient = new ApolloClient(
      Object.assign(
        {
          uri:
            // runtimeConfig.public.LEADGEN_SERVICE_NAME ||
            "https://dwmniez7.directus.app/graphql",
        },
        {
          ssrMode: true,
          link: httpLink,
          cache: new InMemoryCache(),
        }
      )
    );
    nuxt.hook("app:rendered", () => {
      // store the result
      nuxt.payload.data.apollo = apolloClient.extract();
    });
  } else {
    // restore to cache, so the client won't request
    cache.restore(JSON.parse(JSON.stringify(nuxt.payload.data.apollo)));
    apolloClient = new ApolloClient(
      Object.assign(
        {
          uri:
            // runtimeConfig.public.LEADGEN_SERVICE_NAME ||
            "https://dwmniez7.directus.app/graphql",
        },
        {
          link: httpLink,
          cache: cache,
          ssrForceFetchDelay: 100,
        }
      )
    );
  }

  // provide client, used in useQuery()
  nuxt.vueApp.provide(DefaultApolloClient, apolloClient);
  // provide $apollo, used directly: $apollo.default
  nuxt.provide("apollo", apolloClient);
});
