import * as z from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .email({message: "Please enter a valid email"})
    .min(1, {message: "Email is required"}),
  password: z
    .string()
    .min(1, {message: "Password is required"})
    .min(8, {message: "Password should be minimum of 8 characters"})
})