import { IClubData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { clubService } from "../services";

export const useAddClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (submitData: IClubData) => clubService.addClub(submitData),
    onSuccess: () => {
      toast.success("Club added successfully;)");
      queryClient.invalidateQueries({
        queryKey: ["clubs"],
      });
    },
  });
};
