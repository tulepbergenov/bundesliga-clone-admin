import { removeToken } from "@/utilities";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services";

export const useLogout = () => {
  const router = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["logout"],
    queryFn: () => AuthService.logoutUser(),
    enabled: false,
    onSuccess: () => {
      removeToken();
      router("login");
    },
  });

  return { refetch };
};
