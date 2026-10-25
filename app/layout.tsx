import Link from "next/link";

export const metadata = { title: "Електронна бібліотека" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ background: "#1e3a5f", color: "white", padding: "16px 24px" }}>
          <h1 style={{ margin: 0 }}> Електронна бібліотека</h1>
          <nav style={{ marginTop: 10, display: "flex", gap: 20 }}>
            <Link href="/" style={{ color: "white" }}>Головна</Link>
            <Link href="/catalog" style={{ color: "white" }}>Каталог книг</Link>
            <Link href="/catalog/fiction" style={{ color: "white" }}>Художня література</Link>
            <Link href="/catalog/science" style={{ color: "white" }}>Наукова література</Link>
            <Link href="/contacts" style={{ color: "white" }}>Контакти</Link>
          </nav>
        </header>

        <main style={{ flex: 1, padding: 24 }}>{children}</main>

        <footer style={{ background: "#1e3a5f", color: "white", padding: 16, textAlign: "center" }}>
          © 2026 Електронна бібліотека
        </footer>
      </body>
    </html>
  );
}