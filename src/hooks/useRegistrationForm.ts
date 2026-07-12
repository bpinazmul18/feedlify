"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistrationFormValues,
  registrationSchema,
} from "@/lib/validations/auth";

export function useRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      agreeToTerms: false,
    },
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Registration submitted", data);
  });

  return { register, onSubmit, errors, isSubmitting };
}
