const userList = async (
  opts?: CusFetchOption<IUserApi.UserListRecord, Recordable>,
) =>
  await _fetchUtil('/users', {
    ...opts,
  });

const userCreate = async (
  opts?: CusFetchOption<
    IUserApi.UserListRecord,
    Partial<IUserApi.UserListItem>
  >,
) =>
  await _fetchUtil('/users', {
    method: 'post',
    ...opts,
  });

export const _userApi = {
  userList,
  userCreate,
};
