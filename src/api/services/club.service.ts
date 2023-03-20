import { IClubFormData, IClubsResponse, IEditClubFormData } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubsResponse>> =>
  api.get("/clubs");

const addClub = (data: IClubFormData) => api.post("/clubs/create", data);

const getClub = (id: number): Promise<AxiosResponse<IClubsResponse>> =>
  api.get(`/clubs/${id}`);

const editClub = (data: IEditClubFormData, id: number) =>
  api.put(`/clubs/${id}`, data);

export const clubService = {
  getClubs,
  addClub,
  getClub,
  editClub,
};
