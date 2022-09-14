import { _userApi } from '~~/api/user';

type IState = {
  loadingCreate: boolean;
  loadingDelete: boolean;
} & Partial<IUserApi.UserListItem>;

export const useFormLogic = createSharedComposable(() => {
  const state = reactive<IState>({
    loadingCreate: false,
    loadingDelete: false,
  });

  const {
    data: userListData,
    pending: loadingUserListData,
    refresh: refetchUserList,
  } = useAsyncData('userListApi', () => _userApi.userList(), {
    initialCache: false,
  });

  const onFinish = (values: any) => {
    state.loadingCreate = true;
    _userApi.userCreate({
      params: { ...values, status: 'active' },
      callback: () => {
        state.loadingCreate = false;
        refetchUserList();
      },
    });
  };

  const onDeleteUser = (idDetail: string | number) => {
    state.loadingDelete = true;
    _userApi.userDelete({
      idDetail,
      callback: () => {
        refetchUserList();
        state.loadingDelete = false;
      },
    });
  };

  return {
    ...toRefs(state),
    userListData,
    loadingUserListData,
    refetchUserList,
    state,
    onDeleteUser,
    onFinish,
  };
});
