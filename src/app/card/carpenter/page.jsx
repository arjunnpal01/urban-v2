"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Carpenterservice() {
  const items = [
    {
      title: "Wardrobe Design Consultation",
      rating: "★ 4.79 (4K)",
      price: "₹49",
      image: "/images/almari1.avif",
    },
    {
      title: "Modular Sofa Installation",
      rating: "★ 4.79 (106K)",
      price: "₹1,098",
      image: "/images/sofa.jpeg",
    },
    {
      title: "TV panel Installation",
      rating: "★ 4.80 (35K)",
      price: "₹1,498",
      image: "/images/tv-frame.webp",
    },
    {
      title: "Wooden Door Installation & Repair",
      rating: "★ 4.78 (1.5M)",
      price: "₹599",
      image: "/images/carpenter-door.jpg",
    },
    {
      title: "Furniture Polishing",
      rating: "★ 4.83 (15K)",
      price: "₹3,999",
      image: "/images/wood-polish-service.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Carpenter Services</h2>
        <Link
          href="/services?type=carpenter"
          className="text-sm px-4 py-3 rounded text-blue-600 border border-gray-200 hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Scrollable Card Section */}
      <div className="flex items-start gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
        {items.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl shadow-sm min-w-[220px] md:min-w-[230px] lg:min-w-[270px] flex-shrink-0 transition-transform hover:scale-105"
          >
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 270px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <CardContent className="p-4 space-y-1 flex flex-col justify-between h-[120px]">
              <h3 className="text-sm font-medium truncate">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.rating}</p>
              <p className="text-sm font-semibold">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
