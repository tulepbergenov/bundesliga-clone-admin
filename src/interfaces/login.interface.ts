export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  token: string;
  data: IUser;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  created_at: Date;
  updated_at: Date;
}
