export default async function Catalog() {
  await new Promise((r) => setTimeout(r, 2000));

  const books = ["Кобзар", "Захар Беркут", "Лісова пісня", "Основи фізики", "Вступ до програмування"];

  return (
    <div>
      <h2>Каталог книг</h2>
      <ul>
        {books.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}