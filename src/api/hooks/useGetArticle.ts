import { useQuery } from "@tanstack/react-query";
import { articleService } from "../services";

export const useGetArticle = (id: number) => {
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => articleService.getArticle(id),
    refetchOnWindowFocus: false,
  });
};
