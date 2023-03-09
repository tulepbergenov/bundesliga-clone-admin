import { useQuery } from "@tanstack/react-query";
import { clubService } from "../services";

export const useGetClub = (id: number) => {
  return useQuery({
    queryKey: ["clubs", id],
    queryFn: () => clubService.getClub(id),
    refetchOnWindowFocus: false,
  });
};
