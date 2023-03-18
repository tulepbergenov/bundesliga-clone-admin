import { useQuery } from "@tanstack/react-query";
import { authService } from "../services";

export const useGetUser = () =>
  useQuery({
    queryKey: ["logout"],
    queryFn: () => authService.getUser(),
    refetchOnWindowFocus: false,
  });
