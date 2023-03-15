import { IFormArticle } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useEditArticle = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (submitData: IFormArticle) =>
      articleService.editArticle(id, submitData),
    onSuccess: () => {
      toast.success("Article successfully changed;)");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
