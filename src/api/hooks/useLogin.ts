import { ILoginFormData } from "@/interfaces";
import { removeToken, setToken } from "@/utilities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "../services";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (submitData: ILoginFormData) =>
      AuthService.loginUser(submitData),
    onSuccess: (data) => {
      setToken(data.data.token);
      navigate("/");
      queryClient.invalidateQueries({
        queryKey: ["auth-user"],
      });
    },
    onError: (err: any) => {
      removeToken();
      toast.error(err.response.data.message);
    },
  });
};
