"use client";
import React, { useState } from "react";

const serviceTabs = [
  "Plumbing",
  "AC Services",
  "Electrical Services",
  "Carpainter",
];

const mockServices = {
  Plumbing: [
    {
      image: "/plumber1.jpg",
      name: "Plumber Fix",
      category: "Home Services",
      price: 199,
      status: "Active",
      duration: "1 hr",
      rating: 4.6,
      description: "Tap & pipe repair",
    },
    {
      image: "/plumber2.jpg",
      name: "Bathroom Plumbing Repair",
      category: "Home Services",
      price: 299,
      status: "Inactive",
      duration: "1.5 hrs",
      rating: 4.5,
      description: "Fixing leaking faucets and valves",
    },
  ],
  "AC Services": [
    {
      image: "/ac.jpg",
      name: "AC Repair",
      category: "Home Services",
      price: 249,
      status: "Active",
      duration: "1.5 hrs",
      rating: 4.8,
      description: "Cooling system check & fix",
    },
  ],
  "Electrical Services": [],
  Carpainter: [],
};

export default function ActiveService() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0]);
  const [servicesByTab, setServicesByTab] = useState(mockServices);
  const data = servicesByTab[activeTab] || [];

  const handleToggleStatus = (idx) => {
    setServicesByTab((prev) => {
      const updated = { ...prev };
      updated[activeTab] = updated[activeTab].map((service, i) =>
        i === idx
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service
      );
      return updated;
    });
  };
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6 text-center">View and manage all your active services</h2>
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">
        {serviceTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-1 font-medium border-b-2 transition text-sm md:text-base ${
              activeTab === tab
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-gray-700 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-400">No services found.</td>
              </tr>
            ) : (
              data.map((service, idx) => (
                <tr
                  key={idx}
                  className={`border-t hover:bg-gray-50 ${service.status !== "Active" ? "opacity-60 grayscale" : ""}`}
                >
                  <td className="px-4 py-3">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 rounded object-cover shadow"
                    />
                  </td>
                  <td className="px-4 py-3 font-bold">
                    {service.name}
                  </td>
                  <td className="px-4 py-3">{service.category}</td>
                  <td className="px-4 py-3">₹{service.price}</td>
                  <td className="px-4 py-3">{service.duration}</td>
                  <td className="px-4 py-3">⭐ {service.rating}</td>
                  <td className="px-4 py-3 whitespace-pre-line">{service.description}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggleStatus(idx)}
                      className={`px-3 py-1 text-xs rounded font-semibold shadow ${service.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {service.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}