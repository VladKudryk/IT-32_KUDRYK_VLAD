"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  function retry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div style={{ color: "crimson" }}>
      <h2>Сталася помилка</h2>
      <p>{error.message}</p>
      <button onClick={retry} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Спробувати ще раз
      </button>
    </div>
  );
}