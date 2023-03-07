import { useQuery } from "@tanstack/react-query";
import { footballerSevice } from "../services";

export const useGetFootballers = () => {
  return useQuery({
    queryKey: ["footballers"],
    queryFn: () => footballerSevice.getFootballers(),
    refetchOnWindowFocus: false,
  });
};
