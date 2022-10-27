import * as Types from "./schemas";

export type StockQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars["Int"]>;
  offset?: Types.InputMaybe<Types.Scalars["Int"]>;
  limit?: Types.InputMaybe<Types.Scalars["Int"]>;
}>;

export type StockQuery = {
  __typename?: "Query";
  stock: Array<{
    __typename?: "stock";
    id: string;
    status?: string | null;
    title?: string | null;
    produc_thumnail?: { __typename?: "directus_files"; id: string } | null;
  }>;
};
