import { ILogin, ILoginResponse, ILogout, IUserResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const login = (data: ILogin): Promise<AxiosResponse<ILoginResponse>> =>
  api.post("/auth/login", data);

const logout = (): Promise<AxiosResponse<ILogout>> => api.post("/auth/logout");

const getUser = (): Promise<AxiosResponse<IUserResponse>> =>
  api.get("/auth/user");

export const authService = {
  login,
  logout,
  getUser,
};
