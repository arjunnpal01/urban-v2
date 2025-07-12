"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const draftServices = [
  {
    image: "/geyser.jpg",
    title: "Geyser Installation",
    category: "Electrician",
    price: "₹399",
    duration: "1.5 hrs",
    status: "Draft",
    rating: "N/A",
    description: "Mounting and pipe connection for geysers",
  },
  {
    image: "/website.jpg",
    title: "Website Design",
    category: "Digital",
    price: "₹999",
    duration: "4 hrs",
    status: "Draft",
    rating: "N/A",
    description: "Custom UI/UX for business websites",
  },
];

export default function DraftServices() {
  const router = useRouter();

  const handleEdit = (title) => {
    router.push(`/admin/services/edit/${title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleDelete = (title) => {
    alert(`Deleting draft: ${title}`);
  };

  const handlePublish = (title) => {
    alert(`Publishing: ${title}`);
    // Future: Send PATCH request to change status to "Active"
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Draft Services</h2>
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Duration</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {draftServices.map((service, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="rounded object-cover"
                />
              </td>
              <td className="px-4 py-3 font-medium">{service.title}</td>
              <td className="px-4 py-3">{service.category}</td>
              <td className="px-4 py-3">{service.price}</td>
              <td className="px-4 py-3">{service.duration}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 font-semibold">
                  {service.status}
                </span>
              </td>
              <td className="px-4 py-3">{service.rating}</td>
              <td className="px-4 py-3">{service.description}</td>
              <td className="px-4 py-3 space-x-2">
                {/* Edit button removed as requested */}
                <button
                  onClick={() => handleDelete(service.title)}
                  className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handlePublish(service.title)}
                  className="bg-green-600 text-white px-2 py-1 text-xs rounded hover:bg-green-700"
                >
                  Publish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
