import * as z from "zod";

export const clubFormSchema = z.object({
  name: z.string().min(1, "Email address is required"),
  stadium: z.string().min(1, "Staduim is required"),
  short_name: z.string().min(1, "Short name is required"),
  color: z.string(),
});
