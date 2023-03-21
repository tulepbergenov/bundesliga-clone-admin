import {
  IEditFootballerFormData,
  IEditFootballerResponse,
  IFootballerFormData,
  IFootballersResponse,
} from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getFootballers = (): Promise<AxiosResponse<IFootballersResponse>> =>
  api.get("/footballers");

const getFootballer = (id: number) => api.get(`/footballers/${id}`);

const addFootballer = (data: IFootballerFormData) =>
  api.post("/footballers/create", data);

const editFootballer = (
  data: IEditFootballerFormData,
  id: number
): Promise<AxiosResponse<IEditFootballerResponse>> =>
  api.put(`/footballers/${id}`, data);

const deleteFootballer = (id: number) => api.delete(`/footballers/${id}`);

export const footballerService = {
  getFootballers,
  deleteFootballer,
  getFootballer,
  editFootballer,
  addFootballer,
};
