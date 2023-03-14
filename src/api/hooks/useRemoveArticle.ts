import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { articleService } from "../services";

export const useRemoveArticle = (id: number) =>
  useQuery({
    queryKey: ["articles"],
    queryFn: () => articleService.removeArticle(id),
    onSuccess: (data) => {
      toast.success(data.data.message);
    },
  });
