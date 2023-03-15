import { IFormArticle } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useAddArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (submitData: IFormArticle) =>
      articleService.addArticle(submitData),
    onSuccess: () => {
      toast.success("Article added successfully;)");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
