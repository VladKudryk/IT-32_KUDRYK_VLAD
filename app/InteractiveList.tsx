"use client";

import { useState } from "react";

type Product = { id: number; name: string; category: string; price: number };

export default function InteractiveList({ items }: { items: Product[] }) {
  const [query, setQuery] = useState("");
  const [cheapOnly, setCheapOnly] = useState(false);

  const shown = items.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (!cheapOnly || p.price <= 10000)
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Пошук за назвою..."
        style={{ padding: 8, marginRight: 16 }}
      />
      <label>
        <input
          type="checkbox"
          checked={cheapOnly}
          onChange={(e) => setCheapOnly(e.target.checked)}
        />{" "}
        Тільки до 10 000 грн
      </label>

      <p>Знайдено: {shown.length}</p>

      {shown.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul>
          {shown.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> ({p.category}), {p.price.toLocaleString("uk-UA")} грн
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}