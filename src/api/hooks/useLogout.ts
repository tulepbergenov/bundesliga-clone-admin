import { removeToken } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "../services";

export const useLogout = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => authService.logout(),
    enabled: false,
    onSuccess: (data) => {
      removeToken();
      toast(data.data.message);
      navigate("/login");
    },
  });
};
