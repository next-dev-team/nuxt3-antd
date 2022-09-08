import { _userApi } from '~~/api/user';

type IState = {
  loadingCreate: boolean;
} & Partial<IUserApi.UserListItem>;

export const useFormLogic = createSharedComposable(() => {
  const state = reactive<IState>({
    loadingCreate: false,
  });

  const {
    data: userListData,
    pending: loadingUserListData,
    refresh: refetchUserList,
  } = useAsyncData('userListApi', () => _userApi.userList(), {
    initialCache: false,
  });

  return {
    ...toRefs(state),
    userListData,
    loadingUserListData,
    refetchUserList,
    state,
  };
});
