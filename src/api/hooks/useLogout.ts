import { removeToken } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "../services";

export const useLogout = () => {
  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["logout"],
    queryFn: () => AuthService.logoutUser(),
    enabled: false,
    onSuccess: (data) => {
      removeToken();
      toast.success(data.data.message);
      navigate("login");
    },
  });

  return { refetch };
};
