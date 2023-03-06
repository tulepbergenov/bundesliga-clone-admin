import { ILoginFormData } from "@/interfaces";
import { useUserStore } from "@/store";
import { removeToken, setToken } from "@/utilities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "../services";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useNavigate();
  const store = useUserStore();

  return useMutation({
    mutationFn: (submitData: ILoginFormData) =>
      AuthService.loginUser(submitData),
    onSuccess: (data) => {
      setToken(data.data.token);
      store.setAuthUser(data.data.data);
      store.setRequestLoading(true);
      router("/");
      queryClient.invalidateQueries("auth-user" as any);
    },
    onError: (err: any) => {
      removeToken();
      toast.error(err.response.data.message);
    },
  });
};
