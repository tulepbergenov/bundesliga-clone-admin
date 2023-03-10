export interface IArticles {
  data: IArticle[];
}

export interface IArticle {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
}

export interface IArticleResponse {
  data: IArticle;
}
