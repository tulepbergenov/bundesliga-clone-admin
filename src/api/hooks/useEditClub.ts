import { IEditClubFormData } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { clubService } from "../services";

export const useEditClub = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IEditClubFormData) => clubService.editClub(data, id),
    onSuccess: () => {
      toast.success("Club successfully modified;)");
      queryClient.invalidateQueries({
        queryKey: ["clubs"],
      });
    },
  });
};
