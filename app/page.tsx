import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Практична робота</h1>
      <Link href="/todos">Перейти до списку завдань</Link>
    </main>
  );
}