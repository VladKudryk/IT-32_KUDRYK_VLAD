"use client";

import { useActionState } from "react";
import { addTask, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
  values: { fullName: "", email: "", title: "" },
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(addTask, initialState);

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
        <label htmlFor="title">Назва завдання</label>
        <br />
        <input id="title" name="title" defaultValue={state.values.title} />
        {state.errors.title && <p>{state.errors.title[0]}</p>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Додати"}
      </button>

      <p aria-live="polite">{state.message}</p>
    </form>
  );
}