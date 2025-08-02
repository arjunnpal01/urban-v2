"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function EditServiceModal({ service, onSave, onClose }) {
  const [form, setForm] = useState({
    title: service?.title ?? service?.name ?? "",
    name: service?.name ?? "",
    category: service?.category ?? "Home Services",
    price: service?.price ?? "",
    status: service?.status ?? "Active",
    duration: service?.duration ?? "",
    rating: service?.rating ?? 0,
    description: service?.description ?? "",
    image: service?.image ?? "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value !== undefined && value !== null ? value : "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title && !form.name) {
      setError("Service Name is required");
      return;
    }
    setError("");
    // Always send both name and title for compatibility
    onSave({
      ...form,
      name: form.title || form.name || "",
      title: form.title || form.name || "",
      category: form.category || "Home Services",
      status: form.status || "Active",
      rating: form.rating || 0,
      price: form.price || "",
      duration: form.duration || "",
      description: form.description || "",
      image: form.image || "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Edit Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* Service Name */}
              <div>
                <label className="block mb-1 font-medium">Service Name<span className="text-red-500"> *</span></label>
                <input
                  type="text"
                  name="title"
                  value={form.title || form.name || ""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              {/* Category Dropdown */}
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select Category</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Painting">Painting</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Price */}
              <div>
                <label className="block mb-1 font-medium">Price<span className="text-red-500"> *</span></label>
                <input
                  type="text"
                  name="price"
                  value={form.price !== undefined && form.price !== null ? form.price : ""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              {/* Duration */}
              <div>
                <label className="block mb-1 font-medium">Duration<span className="text-red-500"> *</span></label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration !== undefined && form.duration !== null ? form.duration : ""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              {/* Status */}
              <div className="flex items-center gap-4">
                <label className="block mb-1 font-medium mr-2">Status</label>
                <label className="flex items-center mr-3">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={form.status === "Active"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <span className="text-green-600 font-semibold">Active</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={form.status === "Inactive"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <span className="text-red-600 font-semibold">Inactive</span>
                </label>
              </div>
              {/* Rating */}
              <div>
                <label className="block mb-1 font-medium">Rating<span className="text-red-500"> *</span></label>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(star => (
                    <span
                      key={star}
                      className={`cursor-pointer text-2xl ${form.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                      onClick={() => setForm(prev => ({ ...prev, rating: star }))}
                      role="button"
                      aria-label={`Rate ${star}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{form.rating || "0"}/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Service Image</label>
            <div className="flex gap-4">
              {/* Preview Box */}
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg min-h-[120px] bg-gray-50 p-4 mr-2" style={{ minWidth: 160 }}>
                <span className="text-gray-400 text-sm mb-2">Preview will appear here</span>
                {form.image ? (
                  <Image
                    src={form.image}
                    alt={form.title || form.name || 'Service image'}
                    width={120}
                    height={120}
                    className="rounded object-cover border"
                  />
                ) : null}
              </div>
              {/* Upload Box */}
              <div
                className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg min-h-[120px] bg-gray-50 p-4 cursor-pointer relative"
                style={{ minWidth: 320 }}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = ev => setForm(prev => ({ ...prev, image: ev.target.result }));
                    reader.readAsDataURL(file);
                  }
                }}
              >
                <label htmlFor="service-image-upload" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" /></svg>
                  <span className="text-gray-500 text-sm">Click to upload or drag and drop</span>
                  <span className="text-gray-400 text-xs mt-1">PNG, JPG up to 5MB</span>
                  <input
                    id="service-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={e => {
                      const file = e.target.files[0];
                      if (file && file.type.startsWith('image/')) {
                        const reader = new FileReader();
                        reader.onload = ev => setForm(prev => ({ ...prev, image: ev.target.result }));
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  value={form.description !== undefined && form.description !== null ? form.description : ""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 min-h-[80px]"
                />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold shadow hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
