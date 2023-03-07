import { useQuery } from "@tanstack/react-query";
import { AuthService } from "../services";

export const useGetAuthUser = () => {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: () => AuthService.getUser(),
    refetchOnWindowFocus: false,
  });
};
