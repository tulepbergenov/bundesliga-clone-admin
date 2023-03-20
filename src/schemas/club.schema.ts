import * as z from "zod";

export const clubSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stadium: z
    .string()
    .min(1, "Stadium is required")
    .max(32, "Stadium must be less than 32 characters"),
  short_name: z
    .string()
    .min(1, "Short name is required")
    .max(5, "Short name must be less than 5 characters"),
  color: z.string().min(3, "Color is required"),
});

export const editClubSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stadium: z
    .string()
    .min(1, "Stadium is required")
    .max(32, "Stadium must be less than 32 characters"),
  short_name: z
    .string()
    .min(1, "Short name is required")
    .max(5, "Short name must be less than 5 characters"),
  color: z.string().min(3, "Color is required"),
  win: z.number(),
  draw: z.number(),
  lose: z.number(),
});
