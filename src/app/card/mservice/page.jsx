"use client";

import Image from "next/image";
import Link from "next/link";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Mservice() {
  const items = [
    {
      title: "Rooms/walls painting consultation",
      rating: "★ 4.79 (4K)",
      price: "₹49",
      image: "/images/cleaner1.jpg",
    },
    {
      title: "Pest control (includes utensil removal)",
      rating: "★ 4.79 (106K)",
      price: "₹1,098",
      image: "/images/cr2.jpg",
    },
    {
      title: "Apartment pest control",
      rating: "★ 4.80 (35K)",
      price: "₹1,498",
      image: "/images/man2.jpg",
    },
    {
      title: "Foam-jet AC service",
      rating: "★ 4.78 (1.5M)",
      price: "₹599",
      image: "/images/en7.jpg",
    },
    {
      title: "Apartment termite control",
      rating: "★ 4.83 (15K)",
      price: "₹3,999",
      image: "/images/mensaloon1.jpg",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-6"
      aria-labelledby="most-booked-services"
    >
      {/* Heading + See all */}
      <div className="flex items-center justify-between mb-4">
        <h2
          id="most-booked-services"
          className="text-2xl font-semibold text-gray-900"
        >
          Most Booked Services
        </h2>
        <Link
          href="/services/most-booked"
          className="text-sm px-4 py-2 text-blue-600 hover:underline border border-gray-200 rounded"
        >
          See all
        </Link>
      </div>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 xs:basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              aria-label={item.title}
            >
              <article className="overflow-hidden rounded-md shadow bg-white border border-gray-100 flex flex-col h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 20vw"
                  {...(index === 0
                    ? { priority: true }
                    : { loading: "lazy" })}
                />
                <CardContent className="p-3 flex flex-col flex-1">
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">{item.rating}</p>
                  <p className="text-sm font-semibold text-gray-900 mt-auto">
                    {item.price}
                  </p>
                </CardContent>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="text-gray-600"
          aria-label="Previous services"
        />
        <CarouselNext
          className="text-gray-600"
          aria-label="Next services"
        />
      </Carousel>
    </section>
  );
}