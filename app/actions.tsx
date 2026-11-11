"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Мінімум 2 символи"),
  email: z.email("Некоректний email"),
  title: z.string().trim().min(5, "Мінімум 5 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: { fullName?: string[]; email?: string[]; title?: string[] };
  values: { fullName: string; email: string; title: string };
};

export async function addTask(_prev: FormState, formData: FormData): Promise<FormState> {
  await new Promise((r) => setTimeout(r, 1000));

  const values = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    title: String(formData.get("title") ?? ""),
  };

  const result = schema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  return {
    success: true,
    message: "Завдання успішно перевірено!",
    errors: {},
    values: { fullName: "", email: "", title: "" },
  };
}