import * as Types from "./operations";

import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "vue";
export type ReactiveFunction<TParam> = () => TParam;

export const AllPostsDocument = gql`
  query allPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a Vue component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllPostsQuery({
 *   options: // value for 'options'
 * });
 */
export function useAllPostsQuery(
  variables:
    | Types.AllPostsQueryVariables
    | VueCompositionApi.Ref<Types.AllPostsQueryVariables>
    | ReactiveFunction<Types.AllPostsQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.AllPostsQuery,
        Types.AllPostsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.AllPostsQuery,
          Types.AllPostsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.AllPostsQuery,
          Types.AllPostsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    Types.AllPostsQuery,
    Types.AllPostsQueryVariables
  >(AllPostsDocument, variables, options);
}
export function useAllPostsLazyQuery(
  variables:
    | Types.AllPostsQueryVariables
    | VueCompositionApi.Ref<Types.AllPostsQueryVariables>
    | ReactiveFunction<Types.AllPostsQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.AllPostsQuery,
        Types.AllPostsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.AllPostsQuery,
          Types.AllPostsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.AllPostsQuery,
          Types.AllPostsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    Types.AllPostsQuery,
    Types.AllPostsQueryVariables
  >(AllPostsDocument, variables, options);
}
export type AllPostsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    Types.AllPostsQuery,
    Types.AllPostsQueryVariables
  >;
