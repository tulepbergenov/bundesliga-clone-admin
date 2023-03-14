import { IClub, IClubData, IClubDataEdit, IClubs } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubs, any>> => api.get("/clubs");

const addClub = (data: IClubData): Promise<AxiosResponse<IClub, any>> =>
  api.post("/clubs/create", data);

const getClub = (id: number): Promise<AxiosResponse<any, any>> =>
  api.get(`/clubs/${id}`);

const editClub = (
  data: IClubDataEdit,
  id: number
): Promise<AxiosResponse<any, any>> => api.put(`/clubs/${id}`, data);

export const clubService = {
  getClubs,
  addClub,
  getClub,
  editClub,
};
