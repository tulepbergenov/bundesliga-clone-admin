import { IClubs } from "@/interfaces";
import { AxiosResponse } from "axios";
import api from "../axios";

const getFootballers = (): Promise<AxiosResponse<IClubs, any>> =>
  api.get("/footballers");

const footballerService = {
  getFootballers,
};

export default footballerService;
