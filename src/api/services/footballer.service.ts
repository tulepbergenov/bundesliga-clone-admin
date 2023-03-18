import { IFootballersResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getFootballers = (): Promise<AxiosResponse<IFootballersResponse>> =>
  api.get("/footballers");

export const footballerService = {
  getFootballers,
};
