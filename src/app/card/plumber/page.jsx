"use client";

import Image from "next/image";
import Link from "next/link";
import { CardContent } from "@/components/ui/card";

export default function PlumberServices() {
  const items = [
    {
      title: "Wash Basin Installation & Repair",
      rating: "★ 4.79 (4K)",
      price: "₹49",
      image: "/images/pr2.jpg",
    },
    {
      title: "Geyser Installation & Repair",
      rating: "★ 4.79 (106K)",
      price: "₹1,098",
      image: "/images/plumber3.webp",
    },
    {
      title: "Toilet Seat Installation",
      rating: "★ 4.80 (35K)",
      price: "₹1,498",
      image: "/images/plumber2.jpg",
    },
    {
      title: "Water Tank Setup & Repair",
      rating: "★ 4.78 (1.5M)",
      price: "₹599",
      image: "/images/tank.jpeg",
    },
    {
      title: "Complete House Plumbing (Pipe Fitting)",
      rating: "★ 4.83 (15K)",
      price: "₹3,999",
      image: "/images/plumber-pipe.avif",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold whitespace-nowrap">
          Plumber Services
        </h2>
        <Link
          href="/services?type=plumber"
          className="text-sm px-4 py-3 rounded text-blue-600 border border-gray-200 hover:underline whitespace-nowrap"
        >
          See all
        </Link>
      </div>

      {/* Scrollable Cards */}
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[220px] md:w-[230px] lg:w-[270px] flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
          >
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white h-[340px] flex flex-col">
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 270px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <CardContent className="p-4 pb-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium truncate">{item.title}</h3>
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
