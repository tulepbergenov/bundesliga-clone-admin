import { IClubs } from "@/interfaces";
import { AxiosResponse } from "axios";
import api from "../axios";

const getNews = (): Promise<AxiosResponse<IClubs, any>> => api.get("/articles");

const newsService = { getNews };

export default newsService;
