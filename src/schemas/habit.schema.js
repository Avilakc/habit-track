import { z } from "zod";

export const createHabitSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  icon: z.string().max(10, "Icon must be at most 10 characters").optional(),
  color: z.string().max(20, "Color must be at most 20 characters").optional(),
});

export const createLogSchema = z.object({
  date: z.iso.date("Date must be in YYYY-MM-DD format"),
});
