type Todo = { id: number; userId: number; title: string; completed: boolean };

export default async function TodosPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Помилка завантаження: " + res.status);

  const todos: Todo[] = await res.json();

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Список завдань</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title}:{" "}
            <strong style={{ color: t.completed ? "green" : "crimson" }}>
              {t.completed ? "виконано" : "не виконано"}
            </strong>
          </li>
        ))}
      </ul>
    </main>
  );
}