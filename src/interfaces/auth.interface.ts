export interface ILoginResponse {
  message: string;
  token: string;
  data: IUser;
}

export interface IUserResponse {
  data: IUser;
}

export interface ILogout {
  message: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: string;
  updated_at: string;
}
