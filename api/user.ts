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

const userDelete = async (opts?: CusFetchOption) =>
  await _fetchUtil(`/users/${opts?.idDetail}`, {
    method: 'delete',
    ...opts,
  });

export const _userApi = {
  userList,
  userCreate,
  userDelete,
};
