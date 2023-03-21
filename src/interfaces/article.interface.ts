export interface IArticlesResponse {
  data: IArticle[];
}

export interface IArticleResponse {
  data: IArticle;
}

export interface IArticle {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
  image?: string;
}

export interface IDeleteArticleResponse {
  message: string;
}

export interface IArticleFormData {
  title: string;
  short_description: string;
  long_description: string;
}
