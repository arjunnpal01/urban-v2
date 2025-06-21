'use client';

import React from 'react';

export default function CleaningSidebar({ onScrollTo }) {
  const items = [
    { label: 'Home Cleaning', key: 'HomeCleaning' },
    { label: 'Furnishing Cleaning', key: 'FurnishingCleaning' },
    { label: 'Full Home', key: 'FullHome' },
    { label: 'Appliance Cleaning', key: 'ApplianceCleaning' },
    { label: 'Special Cleaning', key: 'SpecialCleaning' },
  ];

  return (
    <aside className="p-4 space-y-4">
      <h3 className="text-lg font-bold mb-2">Cleaning Services</h3>
      <nav className="space-y-2">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onScrollTo(item.key)}
            className="block w-full text-left text-gray-700 hover:text-black hover:underline"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
