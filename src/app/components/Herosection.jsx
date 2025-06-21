"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaBroom,
  FaBolt,
  FaHammer,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";
import { GiPaintRoller } from "react-icons/gi";

const services = [
  { icon: <FaTools className="text-blue-400 text-3xl" />, label: "AC & Appliance Repair", key: "ac" },
  { icon: <MdPlumbing className="text-orange-500 text-3xl" />, label: "Plumber", key: "plumber" },
  { icon: <FaBolt className="text-blue-500 text-3xl" />, label: "Electrician", key: "electrician" },
  { icon: <FaHammer className="text-yellow-500 text-3xl" />, label: "Carpenter", key: "carpenter" },
  { icon: <FaBroom className="text-pink-500 text-3xl" />, label: "Cleaning", key: "cleaning" },
  { icon: <GiPaintRoller className="text-teal-500 text-3xl" />, label: "Painter", key: "painter" },
];

export default function HeroSection() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    services.forEach((service) => {
      router.prefetch(`/services?type=${service.key}`);
    });
  }, [router]);

  const handleClick = (key) => {
    router.push(`/services?type=${key}`);
  };

  const filteredServices = services.filter((service) =>
    service.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 px-4 bg-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Find Home <span className="text-purple-600">Service/Repair</span><br /> Near You
      </h1>

      {/* Search bar */}
      <div className="mt-6 max-w-sm mx-auto relative">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute right-4 top-3 text-purple-600 text-lg" />
      </div>

      {/* Grid layout with 3 columns on mobile and 6 on desktop */}
      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto px-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-purple-50 rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105 p-4"
              onClick={() => handleClick(service.key)}
            >
              <div>{service.icon}</div>
              <span className="text-xs text-purple-700 font-medium mt-1 text-center">
                {service.label}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4 col-span-3 md:col-span-6">No matching services found.</p>
        )}
      </div>
    </section>
  );
}
