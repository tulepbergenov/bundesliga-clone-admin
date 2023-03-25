import { IEditFootballerFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { footballerService } from "../services";

export const useEditFootballer = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IEditFootballerFormData) =>
      footballerService.editFootballer(data, id),
    onSuccess: () => {
      toast.success("Footballer successfully modified;)");
      queryClient.invalidateQueries({
        queryKey: ["footballers"],
      });
    },
  });
};
