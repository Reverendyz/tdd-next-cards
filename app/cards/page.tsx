'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

type Card = {
  title: string;
  description: string;
};

export default function CardsPage() {
  const [cards, setCards] = useState<Card[]>([]);

  const [form, setForm] = useState<{ title: string; description: string }>({ title: "", description: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.title && form.description) {
      setCards([...cards, { title: form.title, description: form.description }]);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Cards</h1>
        <p className="text-gray-500">Dynamic cards with random content</p>
      </div>
      <form onSubmit={addCard} className="mb-8 text-center">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2 text-black font-bold"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2 text-black font-bold`"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Card
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
