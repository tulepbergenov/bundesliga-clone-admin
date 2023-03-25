import { IFootballerFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { footballerService } from "../services";

export const useAddFootballer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IFootballerFormData) =>
      footballerService.addFootballer(data),
    onSuccess: () => {
      toast.success("Footballer added successfully;)");
      queryClient.invalidateQueries({
        queryKey: ["footballers"],
      });
    },
  });
};
