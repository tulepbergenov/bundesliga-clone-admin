import { ILoginFormData, ILoginResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const loginUser = (
  data: ILoginFormData
): Promise<AxiosResponse<ILoginResponse, any>> => {
  const res = api.post("/auth/login", data);

  return res;
};

const logoutUser = (): Promise<AxiosResponse<any, any>> => {
  const res = api.post("/auth/logout");

  return res;
};

const getUser = (): Promise<AxiosResponse<ILoginResponse, any>> => {
  const res = api.get("/auth/user");

  return res;
};

export const AuthService = {
  loginUser,
  logoutUser,
  getUser,
};
