import * as z from "zod";

export const clubFormEditSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stadium: z.string().min(1, "Staduim is required"),
  short_name: z.string().min(1, "Short name is required"),
  color: z.string().min(1, "Color is required"),
  win: z.number(),
  draw: z.number(),
  lose: z.number(),
});
