import { z } from "zod";

const Email = z
  .string()
  .check(z.minLength(1, { error: "Email is required" }))
  .pipe(z.email({ error: "Invalid email address" }));

const Password = z
  .string()
  .check(z.minLength(1, { error: "Password is required" }))
  .min(8, { error: "Password must be at least 8 characters" });

export const loginSchema = z.object({ email: Email, password: Password });

export type LoginFormValues = z.infer<typeof loginSchema>;
