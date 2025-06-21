'use client';

export default function PainterSidebar({ onScrollTo }) {
  const items = [
    { label: "Wall", key: "Wall" },
    { label: "Ceiling", key: "Ceiling" },
    { label: "Exterior", key: "Exterior" },
    { label: "Wood", key: "Wood" },
    { label: "Metal", key: "Metal" },
  ];

  return (
    <aside className="p-4 space-y-4">
      <h3 className="text-lg font-bold mb-2">Painter Services</h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onScrollTo(item.key)}
            className="block text-left w-full text-gray-700 hover:text-black hover:underline"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
