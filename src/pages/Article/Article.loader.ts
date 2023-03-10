import { articleService } from "@/api/services";

export const ArticleLoader = async ({
  params,
  queryClient,
}: {
  params: any;
  queryClient: any;
}) => {
  const articleDetailQuery = (id: number) => ({
    queryKey: ["clubs", id],
    queryFn: async () => articleService.getArticle(id),
  });

  const query = articleDetailQuery(params.clubId);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
