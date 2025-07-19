"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function EditServiceModal({ service, onSave, onClose }) {
  const [form, setForm] = useState({ ...service });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name && !form.title) {
      setError("Service Name is required");
      return;
    }
    setError("");
    onSave(form);
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
            <div className="flex-shrink-0">
              <Image
                src={form.image}
                alt={form.title || form.name}
                width={80}
                height={80}
                className="rounded object-cover border"
              />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Service Name</label>
                <input
                  type="text"
                  name="title"
                  value={form.title || form.name || ""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  type="text"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={form.rating}
                  min={0}
                  max={5}
                  step={0.1}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
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
