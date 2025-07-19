// app/admin/services/layout.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { label: "All Services", href: "/admin/services/all" },
  { label: "Add Service", href: "/admin/services/add" },
  { label: "active Service", href: "/admin/services/active" },
  { label: "Drafts Service", href: "/admin/services/drafts" },
  
];

export default function ServicesLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="p-6">
      <div className="flex flex-row flex-wrap gap-4 mb-6 border-b pb-2 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            scroll={false}
            className={clsx(
              "text-sm font-medium pb-1 border-b-2 whitespace-nowrap transition-colors duration-150",
              pathname === tab.href
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-black"
            )}
            tabIndex={0}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}