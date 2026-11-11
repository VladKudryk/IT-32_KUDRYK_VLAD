"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
  values: { fullName: "", email: "", topic: "", details: "" },
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(submitRequest, initialState);

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor="fullName">Ім'я</label>
        <br />
        <input id="fullName" name="fullName" defaultValue={state.values.fullName} />
        {state.errors.fullName && <p>{state.errors.fullName[0]}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input id="email" name="email" defaultValue={state.values.email} />
        {state.errors.email && <p>{state.errors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="topic">Тип проблеми</label>
        <br />
        <select id="topic" name="topic" defaultValue={state.values.topic}>
          <option value="">-- Оберіть --</option>
          <option value="Вхід">Вхід</option>
          <option value="Сторінка">Сторінка</option>
          <option value="Інше">Інше</option>
        </select>
        {state.errors.topic && <p>{state.errors.topic[0]}</p>}
      </div>

      <div>
        <label htmlFor="details">Опис проблеми</label>
        <br />
        <textarea id="details" name="details" rows={4} defaultValue={state.values.details} />
        {state.errors.details && <p>{state.errors.details[0]}</p>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати"}
      </button>

      <p aria-live="polite">{state.message}</p>
    </form>
  );
}