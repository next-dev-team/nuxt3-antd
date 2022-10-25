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
  Upload: any;
};

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars["String"]>;
  suite?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars["String"]>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars["String"]>;
  suite?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
};

export type Album = {
  __typename?: "Album";
  id?: Maybe<Scalars["ID"]>;
  photos?: Maybe<PhotosPage>;
  title?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type AlbumPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: "AlbumsPage";
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Comment = {
  __typename?: "Comment";
  body?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: "CommentsPage";
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: "Company";
  bs?: Maybe<Scalars["String"]>;
  catchPhrase?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CompanyInput = {
  bs?: InputMaybe<Scalars["String"]>;
  catchPhrase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CreateAlbumInput = {
  title: Scalars["String"];
  userId: Scalars["ID"];
};

export type CreateCommentInput = {
  body: Scalars["String"];
  email: Scalars["String"];
  name: Scalars["String"];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars["String"];
  title: Scalars["String"];
  url: Scalars["String"];
};

export type CreatePostInput = {
  body: Scalars["String"];
  title: Scalars["String"];
};

export type CreateTodoInput = {
  completed: Scalars["Boolean"];
  title: Scalars["String"];
};

export type CreateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars["String"];
  name: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
  website?: InputMaybe<Scalars["String"]>;
};

export type Geo = {
  __typename?: "Geo";
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type GeoInput = {
  lat?: InputMaybe<Scalars["Float"]>;
  lng?: InputMaybe<Scalars["Float"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  createAlbum?: Maybe<Album>;
  createComment?: Maybe<Comment>;
  createPhoto?: Maybe<Photo>;
  createPost?: Maybe<Post>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteAlbum?: Maybe<Scalars["Boolean"]>;
  deleteComment?: Maybe<Scalars["Boolean"]>;
  deletePhoto?: Maybe<Scalars["Boolean"]>;
  deletePost?: Maybe<Scalars["Boolean"]>;
  deleteTodo?: Maybe<Scalars["Boolean"]>;
  deleteUser?: Maybe<Scalars["Boolean"]>;
  updateAlbum?: Maybe<Album>;
  updateComment?: Maybe<Comment>;
  updatePhoto?: Maybe<Photo>;
  updatePost?: Maybe<Post>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};

export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteAlbumArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCommentArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePhotoArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePostArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTodoArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateAlbumArgs = {
  id: Scalars["ID"];
  input: UpdateAlbumInput;
};

export type MutationUpdateCommentArgs = {
  id: Scalars["ID"];
  input: UpdateCommentInput;
};

export type MutationUpdatePhotoArgs = {
  id: Scalars["ID"];
  input: UpdatePhotoInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["ID"];
  input: UpdatePostInput;
};

export type MutationUpdateTodoArgs = {
  id: Scalars["ID"];
  input: UpdateTodoInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = "GTE",
  Like = "LIKE",
  Lte = "LTE",
  Ne = "NE",
}

export type OperatorOptions = {
  field?: InputMaybe<Scalars["String"]>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars["String"]>;
};

export type PageLimitPair = {
  __typename?: "PageLimitPair";
  limit?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type PageMetadata = {
  __typename?: "PageMetadata";
  totalCount?: Maybe<Scalars["Int"]>;
};

export type PageQueryOptions = {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type PaginationLinks = {
  __typename?: "PaginationLinks";
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: "Photo";
  album?: Maybe<Album>;
  id?: Maybe<Scalars["ID"]>;
  thumbnailUrl?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type PhotosPage = {
  __typename?: "PhotosPage";
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: "Post";
  body?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentsPage>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type PostCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: "PostsPage";
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  album?: Maybe<Album>;
  albums?: Maybe<AlbumsPage>;
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsPage>;
  photo?: Maybe<Photo>;
  photos?: Maybe<PhotosPage>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsPage>;
  todo?: Maybe<Todo>;
  todos?: Maybe<TodosPage>;
  user?: Maybe<User>;
  users?: Maybe<UsersPage>;
};

export type QueryAlbumArgs = {
  id: Scalars["ID"];
};

export type QueryAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type QueryCommentArgs = {
  id: Scalars["ID"];
};

export type QueryCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type QueryPhotoArgs = {
  id: Scalars["ID"];
};

export type QueryPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type QueryPostArgs = {
  id: Scalars["ID"];
};

export type QueryPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type QueryTodoArgs = {
  id: Scalars["ID"];
};

export type QueryTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q?: InputMaybe<Scalars["String"]>;
};

export type SliceOptions = {
  end?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export type SortOptions = {
  field?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type Todo = {
  __typename?: "Todo";
  completed?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: "TodosPage";
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdatePhotoInput = {
  thumbnailUrl?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  username?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  address?: Maybe<Address>;
  albums?: Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  posts?: Maybe<PostsPage>;
  todos?: Maybe<TodosPage>;
  username?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type UserAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UserPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UserTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: "UsersPage";
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};
