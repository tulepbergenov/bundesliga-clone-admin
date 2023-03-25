import { clubService, footballerService } from "@/api";

export const editFootballerLoader = async ({ params }: any) => {
  const footballer = await footballerService.getFootballer(params.footballerId);
  const clubs = await clubService.getClubs();

  const value = {
    footballer: footballer.data.data,
    clubs: clubs.data.data,
  };

  return value;
};
