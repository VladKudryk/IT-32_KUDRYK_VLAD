"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div style={{ padding: 24 }}>
      <p>Не вдалося отримати дані.</p>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
}