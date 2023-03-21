import { IArticleFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useEditArticle = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IArticleFormData) =>
      articleService.editArticle(data, id),
    onSuccess: () => {
      toast.success("News successfully modified;)");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
