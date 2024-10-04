export type TLoginRequest = { 
  lang: string; 
  username: string;
  password: string;
}
export type TLoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: string;
}

export type TTokenInfo = {
  key: string;
  expiredDate: string;
  expiredIn: number;
}