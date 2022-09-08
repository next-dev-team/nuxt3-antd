import notiMsgVue from '@/components/notiMsg.vue';

/**
 * @example
 *  // folder api.user/index.ts
 *   export const userPostExample = async (
 *   opts?: CusFetchOption<IUserApi.UserProfileData>,
 *    ) => {
 *    return await _fetchUtil('/update/profile', {
 *     sucMsg: `updated ${opts?.param.xxx} successfully`
 *     method:'post',
 *     ..opts
 *   })
 *   }
 *  // .vue/.ts
 *  _api.userPostExample({
 *  param: {
 *  xx: 'xx'
 *  },
 *  callback:((res)=>{
 *  if(res?.isSuccess){
 *  // do somethings
 *  }
 *  })
 *  })

 */
export async function _fetchUtil<T = {}>(
  request: RequestInfo,
  opts?: CusFetchOption<T>,
): Promise<CusFetchOption<T>['res']> {
  try {
    const params = removeNil(opts?.params);
    console.log('opts', opts);

    const resData = await _fetch<AnyResponse<T>>(request, {
      ...opts,
      // remove null ,undefined empty string from params
      params,
    });
    const cusRes = isArray(resData)
      ? ({
          data: resData ?? [],
        } as typeof resData)
      : {
          ...resData,
          // isSuccess: resData?.status === 200,
        };
    opts?.callback?.(cusRes);
    console.log('cusRes', cusRes);

    return cusRes;
  } catch (error: any) {
    opts?.callback?.(error);
    console.log('asyncFetchUtils:err', error.response);
    const err = error?.response?._data;
    _notification.error({
      message: 'failed',
      description: h('div', [
        h(notiMsgVue, {
          title: err ?? 'failed',
        }),
      ]),
    });
    return error;
  }
}
