import { IDeleteFootballerResponse } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { footballerService } from "../services";

export const useDeleteFootballer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => footballerService.deleteFootballer(id),
    onSuccess: (data: AxiosResponse<IDeleteFootballerResponse>) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({
        queryKey: ["footballers"],
      });
    },
  });
};
