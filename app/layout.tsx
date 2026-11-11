import Link from "next/link";

export const metadata = { title: "Студентські завдання" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>Студентські завдання</h1>
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/form">Додати завдання</Link>
          </nav>
          <hr />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}