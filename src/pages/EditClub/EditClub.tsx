import { useEditClub } from "@/api/hooks";
import { Button, ErrorMessage, Label, Spinner } from "@/components";
import { IClubDataEdit } from "@/interfaces";
import { clubFormEditSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

interface IClub {
  id: number;
  name: string;
  stadium: string;
  short_name: string;
  color: string;
  win: number;
  draw: number;
  lose: number;
}

export const EditClub = () => {
  const data: any = useLoaderData();
  const club: IClub = data.data.data;
  club.win = Number(club.win);
  club.draw = Number(club.draw);
  club.lose = Number(club.lose);

  const { mutate, isLoading } = useEditClub(club.id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClubDataEdit>({
    resolver: zodResolver(clubFormEditSchema),
  });

  const onSubmit = (data: IClubDataEdit) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/clubs");
      },
    });
  };

  return (
    <>
      <div className="mb-[12px]">
        <p className="text-[24px] leading-[32px] text-[#64748B]">Clubs</p>
        <h1 className="font-extrabold text-[#0EA5E9]">{club.name}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="mb-[32px] min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Name</Label>
            <div className="w-full">
              <input
                type="text"
                {...register("name")}
                defaultValue={club.name}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.name?.message && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Stadium</Label>
            <div className="w-full">
              <input
                type="text"
                {...register("stadium")}
                defaultValue={club.stadium}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.stadium?.message && (
                <ErrorMessage>{errors.stadium?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Short name</Label>
            <div className="w-full">
              <input
                type="text"
                {...register("short_name")}
                defaultValue={club.short_name}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.short_name?.message && (
                <ErrorMessage>{errors.short_name?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Color</Label>
            <div className="w-full">
              <input
                type="color"
                {...register("color")}
                defaultValue={club.color ? club.color : "#000"}
                className={
                  "inline-block h-[37px] rounded-[4px] border border-[#CBD5E1] bg-white px-[10px] py-[8px]"
                }
              />
              {errors.color?.message && (
                <ErrorMessage>{errors.color?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Win</Label>
            <div className="w-full">
              <input
                type="number"
                {...register("win", {
                  valueAsNumber: true,
                })}
                defaultValue={club.win}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.win?.message && (
                <ErrorMessage>{errors.win?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Draw</Label>
            <div className="w-full">
              <input
                type="number"
                {...register("draw", {
                  valueAsNumber: true,
                })}
                defaultValue={club.draw}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.draw?.message && (
                <ErrorMessage>{errors.draw?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
          <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <Label required>Lose</Label>
            <div className="w-full">
              <input
                type="number"
                {...register("lose", {
                  valueAsNumber: true,
                })}
                defaultValue={club.lose}
                className="inline-block w-full rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
              />
              {errors.lose?.message && (
                <ErrorMessage>{errors.lose?.message}</ErrorMessage>
              )}
            </div>
          </fieldset>
        </fieldset>
        <div className="flex items-center justify-end gap-x-[24px]">
          <Link
            to="/clubs"
            className="inline-block text-[14px] font-extrabold leading-[19px] text-[#94A3B8]"
          >
            Back
          </Link>
          <Button type="submit">
            {isLoading ? <Spinner className="h-5 w-5 text-white" /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
};
