"use client";

import React, { useState } from "react";
import { useServices } from "../../../hooks/useServices";
import AddNewService from "./components/AddNewService";
import EditServiceModal from "./components/EditServiceModal";
import TotalServices from "./components/TotalServices";
import ActiveServices from "./components/ActiveService";
import DraftServices from "./components/DraftServices";
import MostBookService from "./components/MostBookedService";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function AllServicePage() {
    const stats = [
        { label: "Total Services", value: 42, change: "+5 from last month" },
        { label: "Active Services", value: 18, change: "+2 ongoing" },
        { label: "Draft Services", value: 7, change: "+1 today" },
        { label: "Most Booked Service", value: "$12,480", change: "12% increase" },
    ];

    const statusColors = {
        Active: "bg-green-100 text-green-700",
        Draft: "bg-yellow-100 text-yellow-700",
        Inactive: "bg-red-100 text-red-700",
    };

    const [visibleSection, setVisibleSection] = useState(null);
    const [success, setSuccess] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [editIdx, setEditIdx] = useState(null);
    const router = useRouter();
    const { data: services, isLoading, error } = useServices();

    // Handler to add a new service (API call karne par yahan refresh logic add karen)
    const handleAddService = (tab, newService) => {
        setSuccess("Service added successfully!");
        setShowAddModal(false);
        setTimeout(() => setSuccess(""), 2000);
    };

    const handleCardClick = (label) => {
        setVisibleSection((prev) => (prev === label ? null : label));
    };

    // Open the edit modal for the service
    const handleEdit = (title) => {
        if (!services) return;
        const idx = services.findIndex((s) => (s.title || s.name) === title);
        if (idx !== -1) setEditIdx(idx);
    };

    const handleEditSave = (updatedService) => {
        setEditIdx(null);
        setSuccess("Service updated successfully!");
        setTimeout(() => setSuccess(""), 2000);
    };

    const handleEditClose = () => setEditIdx(null);

    const handleDelete = (title) => {
        alert(`Delete service: ${title}`);
        // You can replace this with a real delete API call later.
    };

    return (
        <div className="min-h-screen space-y-8 bg-gray-50 p-6">
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <>
                    {/* Add Service Modal */}
                    {showAddModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
                                <AddNewService onAddService={handleAddService} />
                                <button
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold"
                                    onClick={() => setShowAddModal(false)}
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Edit Service Modal */}
                    {editIdx !== null && (
                        <EditServiceModal
                            service={services[editIdx]}
                            onSave={handleEditSave}
                            onClose={handleEditClose}
                        />
                    )}
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleCardClick(stat.label)}
                                className="cursor-pointer rounded-xl bg-white p-4 flex flex-col shadow transition hover:shadow-md"
                            >
                                <span className="mt-1 text-sm font-medium text-gray-500">
                                    {stat.label}
                                </span>
                                <span className="text-2xl font-bold">{stat.value}</span>
                                <span className="mt-1 text-xs text-green-600">
                                    {stat.change}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Sections */}
                    {visibleSection === "Total Services" && <TotalServices />}
                    {visibleSection === "Active Services" && <ActiveServices />}
                    {visibleSection === "Draft Services" && <DraftServices />}
                    {visibleSection === "Most Booked Service" && <MostBookService />}
                    {/* Services Table */}
                    <div className="bg-white rounded-xl shadow overflow-x-auto p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800">New Services</h2>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 text-sm"
                            >
                                + Add New Service
                            </button>
                        </div>
                        {success && (
                            <div className="text-green-600 text-sm font-semibold mb-2 text-center">
                                {success}
                            </div>
                        )}
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700 font-semibold">
                                <tr>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Service Name</th>
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
                                {Array.isArray(services) && services.map((service, idx) => (
                                    <tr key={idx} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            {service.image && service.image.trim() !== "" ? (
                                                <Image
                                                    src={service.image}
                                                    alt={service.title || service.name}
                                                    width={40}
                                                    height={40}
                                                />
                                            ) : (
                                                <span className="text-gray-400 text-xs">No Image</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 font-medium">{service.title || service.name}</td>
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
                                                onClick={() => handleEdit(service.title || service.name)}
                                                className="bg-yellow-500 text-white px-2 py-1 text-xs rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(service.title || service.name)}
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
                </>
            )}
        </div>
    );
}
