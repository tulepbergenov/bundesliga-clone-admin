import { IArticleResponse, IArticles } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getArticles = (): Promise<AxiosResponse<IArticles, any>> =>
  api.get("/articles");

const getArticle = (
  id: number
): Promise<AxiosResponse<IArticleResponse, any>> => api.get(`/articles/${id}`);

const removeArticle = (id: number) => api.delete(`/articles/${id}`);

export const articleService = { getArticles, getArticle, removeArticle };
