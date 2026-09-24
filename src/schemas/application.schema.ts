import { z } from "zod";

export const createApplicationSchema = z.object({
  company: z.string().min(2, "Company is required"),
  role: z.string().min(2, "Role is required"),
  status: z.enum(["applied", "pending", "rejected", "accepted"])
});

export type CreateApplicationInput =
  z.infer<typeof createApplicationSchema>;

export const updateStatusSchema = z.object({
  status: z.enum(["applied", "pending", "rejected", "accepted"])
});

export type UpdateStatusInput =
  z.infer<typeof updateStatusSchema>;