import { footballerService } from "@/api";

export const footballerLoader = async ({ params }: any) => {
  const res = await footballerService.getFootballer(params.footballerId);

  return res;
};
