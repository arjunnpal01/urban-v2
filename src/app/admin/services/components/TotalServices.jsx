"use client";
import React, { useState } from "react";

const serviceStatusColors = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

// Default mock data
const mockServices = [
  {
    id: 1,
    image: "/ac.jpg",
    name: "AC Repair",
    category: "Home Services",
    price: 249,
    status: "Active",
    duration: "1.5 hrs",
    rating: 4.8,
    description: "Cooling system check & fix",
  },
  {
    id: 2,
    image: "/web.jpg",
    name: "Web Development",
    category: "Digital",
    price: 499,
    status: "Active",
    duration: "3 hrs",
    rating: 4.7,
    description: "Custom websites",
  },
  {
    id: 3,
    image: "/seo.jpg",
    name: "SEO Optimization",
    category: "Digital",
    price: 399,
    status: "Inactive",
    duration: "4 hrs",
    rating: 4.5,
    description: "Improve search engine ranking",
  },
];

export default function TotalServices({ services }) {
  const [serviceList, setServiceList] = useState(
    Array.isArray(services) ? services : mockServices
  );

  const toggleStatus = (id) => {
    const updated = serviceList.map((s) =>
      s.id === id
        ? {
            ...s,
            status: s.status === "Active" ? "Inactive" : "Active",
          }
        : s
    );
    setServiceList(updated);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">All Services</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              {/* Status column removed as requested */}
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceList.map((service) => (
              <tr key={service.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{service.name}</td>
                <td className="px-4 py-3">{service.category}</td>
                <td className="px-4 py-3">₹{service.price}</td>
                {/* Status cell removed as requested */}
                <td className="px-4 py-3">{service.duration}</td>
                <td className="px-4 py-3">⭐ {service.rating}</td>
                <td className="px-4 py-3">{service.description}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => alert(`Edit service: ${service.name}`)}
                    className="bg-yellow-500 text-white px-2 py-1 text-xs rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => alert(`Delete service: ${service.name}`)}
                    className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}