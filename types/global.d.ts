import type {
  ComponentRenderProxy,
  VNode as _VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue';

import type { Rule as _Rule } from 'ant-design-vue/es/form';
import type { FetchOptions, FetchResponse } from 'ohmyfetch';

declare global {
  type HttpMethod = LiteralUnion<
    'post' | 'get' | 'delete' | 'put' | 'patch' | 'head' | 'options' | 'trace',
    string
  >;

  // @category Type
  export type Primitive =
    | null
    | undefined
    | string
    | number
    | boolean
    | symbol
    | bigint;

  declare type IObjectKeys = {
    [key: string]: string | number | undefined | boolean;
  };

  declare type LocalTransKey = typeof import('@/locales')._locale['enUs'];
  type NonNullable<T> = Exclude<T, null | undefined>;
  declare type SingleUploadState<T = Recordable> = {
    singleImg?: string;
    loadingUploadSingleImg: boolean;
    file?: Recordable;
    formData?: FormData;
    uploadRes?: ICommonApi.CommonUploadFileRes;
  } & Recordable<T>;

  declare type IPaging = {
    page_size: number;
    page: number;
  };
  type Many<T> = T | ReadonlyArray<T>;

  declare type Recordable<T = any> = Record<string, T>;
  declare type PropType<T> = VuePropType<T>;
  declare type VNode = _VNode;
  type Primitive =
    | null
    | undefined
    | string
    | number
    | boolean
    | symbol
    | bigint;

  export type LiteralUnion<LiteralType, BaseType extends Primitive> =
    | LiteralType
    | (BaseType & Record<never, never>);

  declare type Rule = _Rule;
  type CallbackAsync<T = any> = (res?: AnyResponse<T>, err?: boolean) => void;
  interface ENV {
    BASE_URL: string;
    DEV: boolean;
    MODE: 'development' | 'production';
    PROD: boolean;
  }

  type FetchUtil<T = {}> = (
    request: RequestInfo,
    opts?: CusFetchOption<T>,
  ) => void;

  interface AnyResponse<T = {}> {
    status: number;
    message: string;
    data: T;
    isSuccess?: boolean;
    meta: MetaAPI;
  }
  interface MetaAPI {
    pagination: PaginationAPI;
  }

  interface PaginationAPI {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: LinksAPI;
  }

  interface LinksAPI {
    previous?: any;
    current: string;
    next: string;
  }
  interface ResponseMap {
    blob: Blob;
    text: string;
    arrayBuffer: ArrayBuffer;
  }
  declare type ResponseType = keyof ResponseMap | 'json';

  declare type CusFetchOption<
    T = any,
    P = FetchOptions['params'],
    R extends ResponseType = 'json',
  > = FetchOptions<R> & {
    sucMsg?: string | string[];
    errMsg?: string | string[];
    cusSucTitle?: string;
    cusErrTitle?: string;
    hideTips?: boolean;
    errTips?: boolean;
    sucTips?: boolean;
    /**
     * default 3 second
     */
    tipDuration?: number;
    method?: HttpMethod;
    /**
     * @example
     *  callback: (res) => {
        if (res?.isSuccess) {
          // success stuff
        } else {
          // error stuff
        }
      },
     */
    callback?: CallbackAsync<T>;
    res?: AnyResponse<T>;
    params?: P;
    /**
     * Optional: e.g: /api/user-detail/1 => 1 is idDetail
     */
    idDetail?: string | number;
  };

  declare type OtpRef = {
    clearInput: () => void;
  } | null;
}
