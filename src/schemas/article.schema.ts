import * as z from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  short_description: z
    .string()
    .min(1, "Description is required")
    .max(120, "Description must be less than 120 characters"),
  long_description: z.string().min(1, "Body is required"),
});
