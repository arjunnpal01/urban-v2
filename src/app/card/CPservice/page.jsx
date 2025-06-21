"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";




export default function Carpenterservice() {
  const items = [
    {
      title: "Rooms/walls painting consultation",
      rating: "★ 4.79 (4K)",
      price: "₹49",
      image: "/images/wn3.jpg", 
    },
    {
      title: "Pest control (includes utensil removal)",
      rating: "★ 4.79 (106K)",
      price: "₹1,098",
      image: "/images/woman1.jpg",
    },
    {
      title: "Apartment pest control",
      rating: "★ 4.80 (35K)",
      price: "₹1,498",
      image: "/images/woman3.jpg",
    },
    {
      title: "Foam-jet AC service",
      rating: "★ 4.78 (1.5M)",
      price: "₹599",
      image: "/images/woman4.jpg",
    },
    {
      title: "Apartment termite control",
      rating: "★ 4.83 (15K)",
      price: "₹3,999",
      image: "/images/woman5.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Carpenter Services</h2>
        <Link
          href="/services/carpenter"
          className="text-sm px-4 py-3 rounded text-blue-600 border border-gray-200 hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Scrollable Card Section */}
      <div className="flex items-start space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl shadow-sm min-w-[280px] flex-shrink-0 p-0"
          >
            <div className="w-full h-[210px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-1">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.rating}</p>
              <p className="text-sm font-semibold">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
