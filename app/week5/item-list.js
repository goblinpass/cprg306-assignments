"use client"

import React, { useState } from 'react';
import itemsData from './items.json';


export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState(itemsData);


  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  const sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0; // Default case
  });

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Item List
          </h1>
          <div>
            <button
              onClick={handleSortByName}
              className={`block mb-4 ${sortBy === 'name' ? 'bg-sky-600 hover:bg-sky-500' : 'bg-gray-100'}`}
            >
              Sort by Name
            </button>
            <button
              onClick={handleSortByCategory}
              className={`block ${sortBy === 'category' ? 'bg-sky-600 hover:bg-sky-500' : 'bg-gray-100'}`}
            >
              Sort by Category
            </button>
          </div>
          <ul>
            {sortedItems.map((item) => (
              <li key={item.id} className="border-t border-gray-300 pt-4 mt-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Category: {item.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

