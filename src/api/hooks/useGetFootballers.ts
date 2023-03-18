import { useQuery } from "@tanstack/react-query";
import { footballerService } from "../services";

export const useGetFootballers = () =>
  useQuery({
    queryKey: ["footballers"],
    queryFn: () => footballerService.getFootballers(),
    refetchOnWindowFocus: false,
  });
