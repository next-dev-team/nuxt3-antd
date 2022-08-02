
declare namespace IUserApi {

  type LoginParam = Partial<{
    type: 'email' | 'phone';
    email: string;
    phone: string;
    phone_country: string;
    password: string;
    g_recaptcha_response: string;
    devic_ied: string;
    device_name: string;
  }>

  interface User {
    id: string;
    uuid: number;
    name: string;
    phone: string;
    phone_country: string;
    email: string;
    type: number;
    app_mode: number;
    merchant: number;
    priority: number;
    status: number;
    language: string;
    main_wallet: string;
    google2fa_secret?: any;
    google2fa_enable?: any;
    created_at: string;
    updated_at: string;
    avatar_profile: string;
    lock_number: string;
    set_pin: boolean;
    set_main_wallet: boolean;
  }

  interface LoginRes {
    data: {
      user: User;
      token: string;
    }
  }

}

