import { IClubDataEdit } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { clubService } from "../services";

export const useEditClub = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (submitData: IClubDataEdit) =>
      clubService.editClub(submitData, id),
    onSuccess: () => {
      toast.success("Club successfully changed;)");
      queryClient.invalidateQueries({
        queryKey: ["clubs"],
      });
    },
  });
};
