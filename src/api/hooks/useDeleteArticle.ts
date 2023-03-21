import { IDeleteArticleResponse } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => articleService.deleteArticle(id),
    onSuccess: (data: AxiosResponse<IDeleteArticleResponse>) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
