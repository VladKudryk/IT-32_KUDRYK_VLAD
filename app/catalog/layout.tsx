import Link from "next/link";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ display: "flex", gap: 16, padding: 12, background: "#e8eef5", marginBottom: 20 }}>
        <Link href="/catalog">Усі книги</Link>
        <Link href="/catalog/fiction">Художня література</Link>
        <Link href="/catalog/science">Наукова література</Link>
      </nav>
      {children}
    </div>
  );
}