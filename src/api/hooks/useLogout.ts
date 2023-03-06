import { removeToken } from "@/utilities";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services";

export const useLogout = () => {
  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["logout"],
    queryFn: () => AuthService.logoutUser(),
    enabled: false,
    onSuccess: () => {
      removeToken();
      navigate("login");
    },
  });

  return { refetch };
};
