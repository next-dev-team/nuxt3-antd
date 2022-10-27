import * as Types from "./operations";

import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "vue";
export type ReactiveFunction<TParam> = () => TParam;

export const StockDocument = gql`
  query stock($page: Int, $offset: Int, $limit: Int) {
    stock(page: $page, offset: $offset, limit: $limit) {
      id
      status
      title
      produc_thumnail {
        id
      }
    }
  }
`;

/**
 * __useStockQuery__
 *
 * To run a query within a Vue component, call `useStockQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useStockQuery({
 *   page: // value for 'page'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function useStockQuery(
  variables:
    | Types.StockQueryVariables
    | VueCompositionApi.Ref<Types.StockQueryVariables>
    | ReactiveFunction<Types.StockQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.StockQuery,
        Types.StockQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.StockQuery,
          Types.StockQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.StockQuery,
          Types.StockQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    Types.StockQuery,
    Types.StockQueryVariables
  >(StockDocument, variables, options);
}
export function useStockLazyQuery(
  variables:
    | Types.StockQueryVariables
    | VueCompositionApi.Ref<Types.StockQueryVariables>
    | ReactiveFunction<Types.StockQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.StockQuery,
        Types.StockQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.StockQuery,
          Types.StockQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.StockQuery,
          Types.StockQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    Types.StockQuery,
    Types.StockQueryVariables
  >(StockDocument, variables, options);
}
export type StockQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    Types.StockQuery,
    Types.StockQueryVariables
  >;
