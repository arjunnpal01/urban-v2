"use client";

const PlumberSidebar = () => {
  const categories = [
    { label: "Bathroom Fittings", key: "BathroomFittings" },
    { label: "Geyser Services", key: "GeyserServices" },
    { label: "Leak Repairs", key: "LeakRepairs" },
    { label: "Installations", key: "Installations" },
    { label: "Tank & Sink Services", key: "TankSinkServices" },
  ];

  return (
    <aside className="p-4 space-y-4">
      <h3 className="text-lg font-bold mb-2">Plumber Services</h3>
      <nav className="space-y-2">
        {categories.map((item, i) => (
          <a
            key={i}
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

export default PlumberSidebar;