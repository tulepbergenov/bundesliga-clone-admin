import * as z from "zod";

export const articleFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  short_description: z
    .string()
    .max(135, "Character limit exceeded")
    .min(1, "Description is required"),
  long_description: z.string().min(1, "Body is required"),
});
