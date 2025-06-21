'use client';

import React from "react";

const ACSidebar = () => {
  const items = [
    { label: "Service", key: "Service" },
    { label: "Repair & Gas Refill", key: "Repair" },
    { label: "Installation/Uninstallation", key: "Installation" },
  ];

  return (
    <aside className="p-4 space-y-4">
      <h3 className="text-lg font-bold mb-2">AC Services</h3>
      <nav className="space-y-2">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.key}`}
            className="block text-left w-full text-gray-700 hover:text-black hover:underline"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default ACSidebar;