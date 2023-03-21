import { IArticleFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useAddArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IArticleFormData) => articleService.addArticle(data),
    onSuccess: () => {
      toast.success("News added successfully;)");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
