import { IClubs } from "@/interfaces";
import { AxiosResponse } from "axios";
import api from "../axios";

const getClubs = (): Promise<AxiosResponse<IClubs, any>> => api.get("/clubs");

const clubService = {
  getClubs,
};

export default clubService;
