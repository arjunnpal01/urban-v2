"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "AC Service & Repair", image: "/images/ac.png" },
  { title: "Washing Machine", image: "/images/washing_machine.png" },
  { title: "Television", image: "/images/tv.png" },
  { title: "Laptop", image: "/images/laptop.png" },
  { title: "Air Cooler", image: "/images/air_cooler.png" },
];

export default function CleaningServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Cleaning  & Pest Control</h2>
        <Link
          href="/services/appliances"
          className="text-sm px-4 py-3 rounded text-blue-600 border border-gray-200 hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Horizontal Scroll Cards (no scrollbar shown) */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-[240px] h-[220px] bg-gray-100 rounded-2xl shadow-md p-4 flex-shrink-0 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-24 mb-2">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
