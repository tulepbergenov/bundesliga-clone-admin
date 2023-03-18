import { ILogin } from "@/interfaces";
import { setToken } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "../services";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ILogin) => authService.login(data),
    onSuccess: (data) => {
      setToken(data.data.token);
      navigate("/home");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (e: Error | AxiosError) => {
      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data.message);
      }
    },
  });
};
