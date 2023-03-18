import { IClubsResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubsResponse>> =>
  api.get("/clubs");

export const clubService = {
  getClubs,
};
