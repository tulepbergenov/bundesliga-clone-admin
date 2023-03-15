import { IFootballerResponse, IFootballersResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getFootballers = (): Promise<AxiosResponse<IFootballersResponse, any>> =>
  api.get("/footballers");

const getFootballer = (
  id: number
): Promise<AxiosResponse<IFootballerResponse, any>> =>
  api.get(`/footballers/${id}`);

export const footballerService = { getFootballers, getFootballer };
