import * as Types from "./schemas";

export type AllPostsQueryVariables = Types.Exact<{
  options?: Types.InputMaybe<Types.PageQueryOptions>;
}>;

export type AllPostsQuery = {
  __typename?: "Query";
  posts?: {
    __typename?: "PostsPage";
    data?: Array<{
      __typename?: "Post";
      id?: string | null;
      title?: string | null;
    } | null> | null;
    meta?: { __typename?: "PageMetadata"; totalCount?: number | null } | null;
  } | null;
};
