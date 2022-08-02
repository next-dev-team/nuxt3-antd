export async function userLoginApi(params: Partial<IUserApi.LoginParam> = {}) {
  const data = await $useFetch<IUserApi.LoginRes>('/user/login', { method: 'post', params })
  return data
}

