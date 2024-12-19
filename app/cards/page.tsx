// app/cards/page.tsx

import React from 'react';

interface Card {
  title: string;
  description: string;
}

async function fetchCards(): Promise<Card[]> {
  return [];
}

export default async function CardsPage() {
  const cards = await fetchCards();
  
  if (!cards || cards.length === 0) {
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">No cards available.</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {cards.map((card, index) => (
        <div
          className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
          key={index}>
          <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
