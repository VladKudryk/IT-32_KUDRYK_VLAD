export default async function Science() {
  await new Promise((r) => setTimeout(r, 2000));

  if (Math.random() < 0.5) {
    throw new Error("Тестова помилка: не вдалося завантажити книги");
  }

  const books = ["Основи фізики", "Вступ до програмування", "Вища математика"];

  return (
    <div>
      <h2>Наукова література</h2>
      <ul>
        {books.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}