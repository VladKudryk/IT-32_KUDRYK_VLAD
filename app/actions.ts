"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Мінімум 2 символи"),
  email: z.email("Некоректний email"),
  topic: z.enum(["Вхід", "Сторінка", "Інше"], { error: "Оберіть тип проблеми" }),
  details: z.string().trim().min(15, "Мінімум 15 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
  values: {
    fullName: string;
    email: string;
    topic: string;
    details: string;
  };
};

export async function submitRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {await new Promise((r) => setTimeout(r, 1000));

  const values = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    details: String(formData.get("details") ?? ""),
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
    message: "Звернення перевірено!",
    errors: {},
    values: { fullName: "", email: "", topic: "", details: "" },
  };
}