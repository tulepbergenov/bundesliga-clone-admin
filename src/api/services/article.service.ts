import { IArticlesResponse } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getArticles = (): Promise<AxiosResponse<IArticlesResponse>> =>
  api.get("/articles");

export const articleService = {
  getArticles,
};
