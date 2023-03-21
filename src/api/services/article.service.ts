import {
  IArticleFormData,
  IArticleResponse,
  IArticlesResponse,
  IDeleteArticleResponse,
} from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getArticles = (): Promise<AxiosResponse<IArticlesResponse>> =>
  api.get("/articles");

const getArticle = (id: number): Promise<AxiosResponse<IArticleResponse>> =>
  api.get(`/articles/${id}`);

const deleteArticle = (
  id: number
): Promise<AxiosResponse<IDeleteArticleResponse>> =>
  api.delete(`/articles/${id}`);

const addArticle = (data: IArticleFormData) =>
  api.post("/articles/create", data);

const editArticle = (data: IArticleFormData, id: number) =>
  api.put(`/articles/${id}`, data);

export const articleService = {
  getArticles,
  deleteArticle,
  addArticle,
  editArticle,
  getArticle,
};
