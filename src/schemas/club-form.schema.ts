import * as z from "zod";

export const clubFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stadium: z.string().min(1, "Staduim is required"),
  short_name: z.string().min(1, "Short name is required"),
  color: z.string(),
});
