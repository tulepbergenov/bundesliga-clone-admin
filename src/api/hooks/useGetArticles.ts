import { useQuery } from "@tanstack/react-query";
import { articleService } from "../services";

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => articleService.getArticles(),
    refetchOnWindowFocus: false,
  });
};
