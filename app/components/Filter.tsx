"use client";

import { useState } from "react";

type Todo = { id: number; userId: number; title: string; completed: boolean };

export default function Filter({ items }: { items: Todo[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const shown = items.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) &&
      (status === "all" ||
        (status === "done" && t.completed) ||
        (status === "todo" && !t.completed))
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Пошук за назвою..."
      />{" "}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">Усі</option>
        <option value="done">Виконані</option>
        <option value="todo">Не виконані</option>
      </select>

      <p>Знайдено: {shown.length}</p>

      {shown.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul>
          {shown.map((t) => (
            <li key={t.id}>
              {t.title}: <strong>{t.completed ? "виконано" : "не виконано"}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}