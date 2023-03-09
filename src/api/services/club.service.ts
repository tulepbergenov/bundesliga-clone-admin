import { IClub, IClubData, IClubs } from "@/interfaces";
import { AxiosResponse } from "axios";
import api from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubs, any>> => api.get("/clubs");

const addClub = (data: IClubData): Promise<AxiosResponse<IClub, any>> =>
  api.post("/clubs/create", data);

const getClub = (id: number): Promise<AxiosResponse<any, any>> =>
  api.get(`/clubs/${id}`);

const clubService = {
  getClubs,
  addClub,
  getClub,
};

export default clubService;
