import { $fetch } from 'ohmyfetch';
// import notiMsgVue from '@/components/notiMsg.vue'

/**
 * custom option  errTips: true, sucTips: true, sucMsg, errMsg,cusSucTitle,cusErrTitle
 */
export const _fetch = $fetch.create({
  baseURL: 'https://gorest.co.in/public/v1',
  async onRequest({ options }) {
    // const { token } = storeToRefs(useUserStore())
    // const { selectedLocale } = storeToRefs(useAppStore())
    const token =
      '0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325';

    options.headers = {
      ...options.headers,
      ...getOnlyValue({
        authorization: token ? `Bearer ${token}` : '',
        //   'x-language': selectedLocale.value,
        //   os: 'merchant-web',
      }),
    };
  },
  async onResponse({ response, options, request }) {
    // const isResSuc = response?._data?.status === _cons.serverStatusEnum.success
    // const isResErr = !isResSuc
    // const isGetMethod =
    //   isEmpty(options?.method) ||
    //   options?.method?.toLocaleLowerCase().includes('get')
    // const showErrTips = isUndefined(options?.errTips)
    //   ? !isGetMethod
    //   : options?.errTips
    // const showSucTips = isUndefined(options?.sucTips)
    //   ? !isGetMethod
    //   : options?.sucTips
    // const cusMsg = isResErr ? options?.errMsg : options?.sucMsg
    // const cusTitle = isResErr ? options?.cusErrTitle : options?.cusSucTitle
    // const titleMsg = cusMsg || response?._data?.data || response?._data?.message
    // const titleMsgTitle = cusTitle || response?._data?.message
    // show message success or error with cus option from api/xxx  Method POST is showing by default
    // if (
    //   (showErrTips && isResErr && !options?.hideTips) ||
    //   (showSucTips && isResSuc && !options?.hideTips)
    // ) {
    //   $noti[
    //     showSucTips && isResSuc && !options?.hideTips ? 'success' : 'error'
    //   ]({
    //     message: titleMsgTitle,
    //     description: h('div', [
    //       h(notiMsgVue, {
    //         title: isObject(titleMsg)
    //           ? isResErr
    //             ? 'Failed'
    //             : 'success'
    //           : titleMsg,
    //       }),
    //     ]),
    //     duration: options?.tipDuration || 3,
    //   })
    // }
    // const userStore = useUserStore()
    // if (response.status === _cons.serverStatusEnum.success) {
    //   console.log(`[fetch res ${request}]:`, response._data)
    // } else {
    //   console.error('[fetch res err:]', response)
    // }
    // if (response.status === _cons.serverStatusEnum.unauthenticated) {
    //   userStore.logout({ isUserInvalid: true })
    // }
  },
  async onResponseError({ request, response }) {
    console.error(
      `[fetch catch ${request}]:`,
      request,
      response.status,
      response.body,
    );
  },
});
