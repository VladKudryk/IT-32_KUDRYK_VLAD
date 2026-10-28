import InteractiveList from "./InteractiveList";

export default async function PracticePage() {
  const products = await Promise.resolve([
    { id: 1, name: "Смартфон Galaxy A54", category: "Смартфони", price: 14999 },
    { id: 2, name: "Смартфон Redmi Note 12", category: "Смартфони", price: 8499 },
    { id: 3, name: "Ноутбук Lenovo IdeaPad 3", category: "Ноутбуки", price: 21999 },
    { id: 4, name: "Навушники JBL Tune 510", category: "Аудіо", price: 1799 },
    { id: 5, name: "Планшет Lenovo Tab M10", category: "Планшети", price: 7299 },
    { id: 6, name: "Смарт-годинник Xiaomi Band 8", category: "Гаджети", price: 1999 },
  ]);

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>🛒 Магазин техніки</h1>
      <p>Усього товарів: {products.length}</p>
      <InteractiveList items={products} />
    </main>
  );
}