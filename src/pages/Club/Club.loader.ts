import { clubService } from "@/api";

export const clubLoader = async ({ params }: any) => {
  const data = await clubService.getClub(params.clubId);

  return data;
};
