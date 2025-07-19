"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const services = [
  {
    image: "/ac.jpg",
    title: "AC Repair",
    category: "Home Services",
    price: "₹249",
    status: "Active",
    duration: "1.5 hrs",
    rating: 4.8,
    description: "Cooling system check & fix",
  },
  {
    image: "/web.jpg",
    title: "Web Development",
    category: "Digital",
    price: "₹499",
    status: "Active",
    duration: "3 hrs",
    rating: 4.7,
    description: "Custom websites",
  },
  {
    image: "/seo.jpg",
    title: "SEO Optimization",
    category: "Digital",
    price: "₹399",
    status: "Draft",
    duration: "4 hrs",
    rating: 4.5,
    description: "Improve search engine ranking",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

export default function RecentOrders() {
  const router = useRouter();

  // Open the details page for the service/order on Edit click
  const handleEdit = (title) => {
    // Find the service by title to get its index or id (simulate unique id)
    const service = services.find((s) => s.title === title);
    if (service) {
      // For demo, use index as id, in real app use unique id/slug
      const idx = services.indexOf(service);
      router.push(`/admin/order/details/${idx}`);
    }
  };

  const handleDelete = (title) => {
    alert(`Delete service: ${title}`);
    // You can replace this with a real delete API call later.
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">New Services</h2>
        <button
          onClick={() => router.push("/admin/services")}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 text-sm"
        >
          + Add New Service
        </button>
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Duration</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, idx) => (
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
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full shadow font-semibold ${statusColors[service.status]}`}
                >
                  {service.status}
                </span>
              </td>
              <td className="px-4 py-3">{service.duration}</td>
              <td className="px-4 py-3">⭐ {service.rating}</td>
              <td className="px-4 py-3">{service.description}</td>
              <td className="px-4 py-3 space-x-2">
                <button
                
                  className="bg-yellow-500 text-white px-2 py-1 text-xs rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service.title)}
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
  );
}