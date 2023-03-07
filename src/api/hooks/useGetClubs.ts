import { useQuery } from "@tanstack/react-query";
import { clubService } from "../services";

export const useGetClubs = () => {
  return useQuery({
    queryKey: ["clubs"],
    queryFn: () => clubService.getClubs(),
    refetchOnWindowFocus: false,
  });
};
