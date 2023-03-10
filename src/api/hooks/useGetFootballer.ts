import { useQuery } from "@tanstack/react-query";
import { footballerService } from "../services";

export const useGetFootballer = (id: number) => {
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => footballerService.getFootballer(id),
    refetchOnWindowFocus: false,
  });
};
