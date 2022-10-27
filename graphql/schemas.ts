export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Mutation = {
  __typename?: "Mutation";
  create_blog_item?: Maybe<Blog>;
  create_blog_items: Array<Blog>;
  delete_blog_item?: Maybe<Delete_One>;
  delete_blog_items?: Maybe<Delete_Many>;
  update_blog_batch: Array<Blog>;
  update_blog_item?: Maybe<Blog>;
  update_blog_items: Array<Blog>;
};

export type MutationCreate_Blog_ItemArgs = {
  data: Create_Blog_Input;
};

export type MutationCreate_Blog_ItemsArgs = {
  data?: InputMaybe<Array<Create_Blog_Input>>;
  filter?: InputMaybe<Blog_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationDelete_Blog_ItemArgs = {
  id: Scalars["ID"];
};

export type MutationDelete_Blog_ItemsArgs = {
  ids: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationUpdate_Blog_BatchArgs = {
  data?: InputMaybe<Array<Update_Blog_Input>>;
  filter?: InputMaybe<Blog_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MutationUpdate_Blog_ItemArgs = {
  data: Update_Blog_Input;
  id: Scalars["ID"];
};

export type MutationUpdate_Blog_ItemsArgs = {
  data: Update_Blog_Input;
  filter?: InputMaybe<Blog_Filter>;
  ids: Array<InputMaybe<Scalars["ID"]>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Query = {
  __typename?: "Query";
  blog: Array<Blog>;
  blog_aggregated: Array<Blog_Aggregated>;
  blog_by_id?: Maybe<Blog>;
  product_cate: Array<Product_Cate>;
  product_cate_aggregated: Array<Product_Cate_Aggregated>;
  product_cate_by_id?: Maybe<Product_Cate>;
  stock: Array<Stock>;
  stock_aggregated: Array<Stock_Aggregated>;
  stock_by_id?: Maybe<Stock>;
};

export type QueryBlogArgs = {
  filter?: InputMaybe<Blog_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryBlog_AggregatedArgs = {
  filter?: InputMaybe<Blog_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryBlog_By_IdArgs = {
  id: Scalars["ID"];
};

export type QueryProduct_CateArgs = {
  filter?: InputMaybe<Product_Cate_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProduct_Cate_AggregatedArgs = {
  filter?: InputMaybe<Product_Cate_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProduct_Cate_By_IdArgs = {
  id: Scalars["ID"];
};

export type QueryStockArgs = {
  filter?: InputMaybe<Stock_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryStock_AggregatedArgs = {
  filter?: InputMaybe<Stock_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryStock_By_IdArgs = {
  id: Scalars["ID"];
};

export type Blog = {
  __typename?: "blog";
  date_created?: Maybe<Scalars["Date"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  iframeUr?: Maybe<Scalars["String"]>;
  photo?: Maybe<Directus_Files>;
  short_description?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  user_created?: Maybe<Scalars["String"]>;
  user_updated?: Maybe<Scalars["String"]>;
};

export type BlogPhotoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Blog_Aggregated = {
  __typename?: "blog_aggregated";
  avg?: Maybe<Blog_Aggregated_Fields>;
  avgDistinct?: Maybe<Blog_Aggregated_Fields>;
  count?: Maybe<Blog_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Blog_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Blog_Aggregated_Fields>;
  min?: Maybe<Blog_Aggregated_Fields>;
  sum?: Maybe<Blog_Aggregated_Fields>;
  sumDistinct?: Maybe<Blog_Aggregated_Fields>;
};

export type Blog_Aggregated_Count = {
  __typename?: "blog_aggregated_count";
  date_created?: Maybe<Scalars["Int"]>;
  date_updated?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  iframeUr?: Maybe<Scalars["Int"]>;
  photo?: Maybe<Scalars["Int"]>;
  short_description?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  user_created?: Maybe<Scalars["Int"]>;
  user_updated?: Maybe<Scalars["Int"]>;
};

export type Blog_Aggregated_Fields = {
  __typename?: "blog_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Blog_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  iframeUr?: InputMaybe<String_Filter_Operators>;
  photo?: InputMaybe<Directus_Files_Filter>;
  short_description?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: "count_functions";
  count?: Maybe<Scalars["Int"]>;
};

export type Create_Blog_Input = {
  date_created?: InputMaybe<Scalars["Date"]>;
  date_updated?: InputMaybe<Scalars["Date"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  iframeUr?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  short_description?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  user_created?: InputMaybe<Scalars["String"]>;
  user_updated?: InputMaybe<Scalars["String"]>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _neq?: InputMaybe<Scalars["String"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: "datetime_functions";
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  week?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["Int"]>;
  year?: Maybe<Scalars["Int"]>;
};

export type Delete_Many = {
  __typename?: "delete_many";
  ids: Array<Maybe<Scalars["ID"]>>;
};

export type Delete_One = {
  __typename?: "delete_one";
  id: Scalars["ID"];
};

export type Directus_Files = {
  __typename?: "directus_files";
  charset?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  embed?: Maybe<Scalars["String"]>;
  filename_disk?: Maybe<Scalars["String"]>;
  filename_download: Scalars["String"];
  filesize?: Maybe<Scalars["String"]>;
  folder?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  location?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars["String"]>;
  modified_on?: Maybe<Scalars["Date"]>;
  modified_on_func?: Maybe<Datetime_Functions>;
  product_cate?: Maybe<Array<Maybe<Product_Cate>>>;
  storage: Scalars["String"];
  tags?: Maybe<Scalars["JSON"]>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  uploaded_by?: Maybe<Scalars["String"]>;
  uploaded_on?: Maybe<Scalars["Date"]>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars["Int"]>;
};

export type Directus_FilesProduct_CateArgs = {
  filter?: InputMaybe<Product_Cate_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  product_cate?: InputMaybe<Product_Cate_Filter>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _eq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _gt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _gte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _lt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _lte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _neq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
};

export type Product_Cate = {
  __typename?: "product_cate";
  id: Scalars["ID"];
  status?: Maybe<Scalars["String"]>;
  tags?: Maybe<Scalars["JSON"]>;
  tags_func?: Maybe<Count_Functions>;
  thumb?: Maybe<Directus_Files>;
};

export type Product_CateThumbArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Product_Cate_Aggregated = {
  __typename?: "product_cate_aggregated";
  avg?: Maybe<Product_Cate_Aggregated_Fields>;
  avgDistinct?: Maybe<Product_Cate_Aggregated_Fields>;
  count?: Maybe<Product_Cate_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Product_Cate_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Product_Cate_Aggregated_Fields>;
  min?: Maybe<Product_Cate_Aggregated_Fields>;
  sum?: Maybe<Product_Cate_Aggregated_Fields>;
  sumDistinct?: Maybe<Product_Cate_Aggregated_Fields>;
};

export type Product_Cate_Aggregated_Count = {
  __typename?: "product_cate_aggregated_count";
  id?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  tags?: Maybe<Scalars["Int"]>;
  thumb?: Maybe<Scalars["Int"]>;
};

export type Product_Cate_Aggregated_Fields = {
  __typename?: "product_cate_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Product_Cate_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Product_Cate_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Product_Cate_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  thumb?: InputMaybe<Directus_Files_Filter>;
};

export type Stock = {
  __typename?: "stock";
  date_created?: Maybe<Scalars["Date"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"];
  produc_thumnail?: Maybe<Directus_Files>;
  status?: Maybe<Scalars["String"]>;
  tags?: Maybe<Product_Cate>;
  title?: Maybe<Scalars["String"]>;
  user_created?: Maybe<Scalars["String"]>;
  user_updated?: Maybe<Scalars["String"]>;
};

export type StockProduc_ThumnailArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type StockTagsArgs = {
  filter?: InputMaybe<Product_Cate_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Stock_Aggregated = {
  __typename?: "stock_aggregated";
  avg?: Maybe<Stock_Aggregated_Fields>;
  avgDistinct?: Maybe<Stock_Aggregated_Fields>;
  count?: Maybe<Stock_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Stock_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Stock_Aggregated_Fields>;
  min?: Maybe<Stock_Aggregated_Fields>;
  sum?: Maybe<Stock_Aggregated_Fields>;
  sumDistinct?: Maybe<Stock_Aggregated_Fields>;
};

export type Stock_Aggregated_Count = {
  __typename?: "stock_aggregated_count";
  date_created?: Maybe<Scalars["Int"]>;
  date_updated?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  produc_thumnail?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  tags?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  user_created?: Maybe<Scalars["Int"]>;
  user_updated?: Maybe<Scalars["Int"]>;
};

export type Stock_Aggregated_Fields = {
  __typename?: "stock_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
  tags?: Maybe<Scalars["Float"]>;
};

export type Stock_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Stock_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Stock_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  produc_thumnail?: InputMaybe<Directus_Files_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<Product_Cate_Filter>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars["String"]>;
  _empty?: InputMaybe<Scalars["Boolean"]>;
  _ends_with?: InputMaybe<Scalars["String"]>;
  _eq?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _ncontains?: InputMaybe<Scalars["String"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]>;
  _nends_with?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _nstarts_with?: InputMaybe<Scalars["String"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
  _starts_with?: InputMaybe<Scalars["String"]>;
};

export type Update_Blog_Input = {
  date_created?: InputMaybe<Scalars["Date"]>;
  date_updated?: InputMaybe<Scalars["Date"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  iframeUr?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  short_description?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  user_created?: InputMaybe<Scalars["String"]>;
  user_updated?: InputMaybe<Scalars["String"]>;
};
