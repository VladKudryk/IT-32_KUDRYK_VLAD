import Filter from "../components/Filter";

type Todo = { id: number; userId: number; title: string; completed: boolean };

export default async function CatalogPage() {
  // Штучна затримка для демонстрації loading.tsx (потім можна видалити)
  await new Promise((r) => setTimeout(r, 1500));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Помилка завантаження: " + res.status);

  const todos: Todo[] = await res.json();

  return (
    <div>
      <h2>Каталог завдань</h2>
      <p>Усього завдань: {todos.length}</p>
      <Filter items={todos} />
    </div>
  );
}