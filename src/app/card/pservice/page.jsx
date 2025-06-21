"use client";

import Image from "next/image";
import Link from "next/link";
import { CardContent } from "@/components/ui/card";

export default function PlumberServices() {
  const items = [
    {
      title: "Rooms/walls painting consultation",
      rating: "★ 4.79 (4K)",
      price: "₹49",
      image: "/images/pr1.jpg",
    },
    {
      title: "Pest control (includes utensil removal)",
      rating: "★ 4.79 (106K)",
      price: "₹1,098",
      image: "/images/pr2.jpg",
    },
    {
      title: "Apartment pest control",
      rating: "★ 4.80 (35K)",
      price: "₹1,498",
      image: "/images/pl3.jpg",
    },
    {
      title: "Foam-jet AC service",
      rating: "★ 4.78 (1.5M)",
      price: "₹599",
      image: "/images/pl2.jpg",
    },
    {
      title: "Apartment termite control",
      rating: "★ 4.83 (15K)",
      price: "₹3,999",
      image: "/images/en5.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Plumber Services</h2>
        <Link
          href="/services?type=plumber" // ✅ Corrected to open plumber full page
          className="text-sm px-4 py-3 rounded text-blue-600 border border-gray-200 hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Scrollable Card Row */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {items.map((item, index) => (
          <div key={index} className="w-[240px] flex-shrink-0">
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white h-[320px] flex flex-col">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <CardContent className="p-4 pb-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.rating}</p>
                </div>
                <p className="text-sm font-semibold">{item.price}</p>
              </CardContent>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
