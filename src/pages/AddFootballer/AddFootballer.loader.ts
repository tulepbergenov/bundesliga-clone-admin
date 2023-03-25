import { clubService } from "@/api";

export const addFootballerLoader = async () => {
  const res = await clubService.getClubs();

  return res;
};
