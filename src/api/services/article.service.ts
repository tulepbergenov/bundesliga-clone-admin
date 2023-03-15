import { IForm } from "@/components/ui/Form/Form.interface";
import { IArticleResponse, IArticles, IFormArticle } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "../axios";

const getArticles = (): Promise<AxiosResponse<IArticles, any>> =>
  api.get("/articles");

const getArticle = (
  id: number
): Promise<AxiosResponse<IArticleResponse, any>> => api.get(`/articles/${id}`);

const addArticle = (data: IFormArticle): Promise<AxiosResponse<any, any>> =>
  api.post("/articles/create", data);

const editArticle = (id: number, data: IForm) =>
  api.put(`/articles/${id}`, data);

const removeArticle = (id: number) => api.delete(`/articles/${id}`);

export const articleService = {
  getArticles,
  getArticle,
  addArticle,
  removeArticle,
  editArticle,
};
