import { articleService } from "@/api";

export const articleLoader = async ({ params }: any) => {
  const data = await articleService.getArticle(params.articleId);

  return data;
};
