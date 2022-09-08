declare namespace IUserApi {
  interface UserListItem {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }
  type UserListRecord = UserListItem[];
}
