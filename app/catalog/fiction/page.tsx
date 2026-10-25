export default async function Fiction() {
  await new Promise((r) => setTimeout(r, 2000));

  const books = ["Кобзар — Т. Шевченко", "Захар Беркут — І. Франко", "Лісова пісня — Леся Українка"];

  return (
    <div>
      <h2>Художня література</h2>
      <ul>
        {books.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}