"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const serviceTabs = [
  "Plumbing",
  "AC Services",
  "Electrical Services",
  "Carpainter",
];

export default function AddNewService({ onAddService }) {
  const router = useRouter();
  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "Home Services",
    price: "",
    status: "Active",
    duration: "",
    rating: "",
    description: "",
    tab: serviceTabs[0],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    if (!form.name || !form.price || !form.duration || !form.rating || !form.description) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    if (onAddService) {
      onAddService(form.tab, {
        image: form.image || "/default.jpg",
        name: form.name,
        category: form.category,
        price: Number(form.price),
        status: form.status,
        duration: form.duration,
        rating: Number(form.rating),
        description: form.description,
      });
    }
    setForm({
      image: "",
      name: "",
      category: "Home Services",
      price: "",
      status: "Active",
      duration: "",
      rating: "",
      description: "",
      tab: serviceTabs[0],
    });
    setSuccess("Service added successfully!");
    setTimeout(() => {
      router.back();
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto overflow-y-auto relative" style={{ maxHeight: "80vh" }}>
      {/* X Close Button */}
      {/* <button
        type="button"
        onClick={() => router.back()}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
        aria-label="Close"
      >
        ×
      </button> */}
      <h2 className="text-lg font-semibold mb-4 text-center">Add New Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Name and Category */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Service Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-white"
            >
              <option value="Home Services">Home Services</option>
              <option value="Plumbing">Plumbing</option>
              <option value="AC Services">AC Services</option>
              <option value="Electrical Services">Electrical Services</option>
              <option value="Carpainter">Carpainter</option>
            </select>
          </div>
        </div>

        {/* Price and Duration */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Price *</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Duration *</label>
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Status and Rating */}
        <div className="flex gap-4">
          {/* Status as radio buttons */}
          <div className="flex-1 flex flex-col justify-center">
            <label className="block mb-1 font-medium">Status</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={form.status === "Active"}
                  onChange={handleChange}
                />
                <span className="text-green-600 font-semibold">Active</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={form.status === "Inactive"}
                  onChange={handleChange}
                />
                <span className="text-red-600 font-semibold">Inactive</span>
              </label>
            </div>
          </div>
          {/* Rating as stars */}
          <div className="flex-1 flex flex-col justify-center">
            <label className="block mb-1 font-medium">Rating *</label>
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

          {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Service Image</label>
          <div className="flex gap-4 items-center">
            {/* Left: Preview Box */}
            <div className="flex-shrink-0">
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 w-32 flex items-center justify-center bg-gray-50">
                {form.image ? (
                  <img src={form.image} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                ) : (
                  <span className="text-gray-400 text-center text-sm">Preview will<br/>appear here</span>
                )}
              </div>
            </div>
            {/* Right: Upload Area */}
            <div className="flex-1">
              <label htmlFor="service-image-upload" className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center text-gray-400 hover:border-blue-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0-3 3m3-3 3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Click to upload or drag and drop</span>
                <span className="text-xs mt-1">PNG, JPG up to 5MB</span>
                <input
                  id="service-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) {
                      setForm(prev => ({ ...prev, image: URL.createObjectURL(file) }));
                    }
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description *</label>
          <CKEditor
            editor={ClassicEditor}
            data={form.description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setForm(prev => ({ ...prev, description: data }));
            }}
            config={{
              toolbar: [
                'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'
              ]
            }}
          />
        </div>

      

        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm font-semibold mb-2 text-center">{success}</div>}
        <button
          type="submit"
          className="item-end bg-blue-600 text-white py-2 px-4 rounded font-semibold shadow hover:bg-blue-700"
        >
          submit 
        </button>
      </form>
    </div>
  );
}
