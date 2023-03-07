import { useQuery } from "@tanstack/react-query";
import { newsService } from "../services";

export const useGetNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => newsService.getNews(),
    refetchOnWindowFocus: false,
  });
};
