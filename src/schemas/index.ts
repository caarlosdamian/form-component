import { string, z } from "zod";

export const userSchema = z.object({
  name: string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(1, {
    message: "agregale compadre",
  }),
  email: string().email(),
  website: string({
    required_error: "Name is required",
  })
    .url()
    .optional(),
});

export const loginSchema = z.object({
  email: string().email(),
  password: string({
    required_error: "password is required",
  }).min(8),
});
