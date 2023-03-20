import { IClubFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { clubService } from "../services";

export const useAddClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IClubFormData) => clubService.addClub(data),
    onSuccess: () => {
      toast.success("Club added successfully;)");
      queryClient.invalidateQueries({
        queryKey: ["clubs"],
      });
    },
  });
};
