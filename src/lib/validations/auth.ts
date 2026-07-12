import { z } from "zod";

const Email = z
  .string()
  .check(z.minLength(1, { error: "Email is required" }))
  .pipe(z.email({ error: "Invalid email address" }));

const Password = z
  .string()
  .check(z.minLength(1, { error: "Password is required" }))
  .min(8, { error: "Password must be at least 8 characters" });

const FirstName = z
  .string()
  .check(z.minLength(1, { error: "First name is required" }))
  .max(50, { error: "First name must be at most 50 characters" });

const LastName = z
  .string()
  .check(z.minLength(1, { error: "Last name is required" }))
  .max(50, { error: "Last name must be at most 50 characters" });

export const loginSchema = z.object({ email: Email, password: Password });

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registrationSchema = z
  .object({
    firstName: FirstName,
    lastName: LastName,
    email: Email,
    password: Password,
    repeatPassword: z
      .string()
      .check(z.minLength(1, { error: "Please repeat your password" })),
    agreeToTerms: z
      .boolean()
      .refine((val) => val === true, {
        error: "You must agree to the terms & conditions",
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    error: "Passwords do not match",
    path: ["repeatPassword"],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
