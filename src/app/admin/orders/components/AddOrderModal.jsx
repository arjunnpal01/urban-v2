"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddOrderModal({ onClose, onAdd }) {
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !service || !provider || !date || !amount) return;
    onAdd && onAdd({
      id: `#UC-${Math.floor(Math.random()*9000+1000)}`,
      customer: { name: customer },
      service: { title: service },
      technician: { name: provider },
      date,
      amount,
      status,
      image,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <form className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative" onSubmit={handleSubmit}>
        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-black" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold mb-6">Add New Order</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Customer Name</label>
            <input className="border rounded px-3 py-2 w-full" value={customer} onChange={e=>setCustomer(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Service</label>
            <input className="border rounded px-3 py-2 w-full" value={service} onChange={e=>setService(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Provider</label>
            <input className="border rounded px-3 py-2 w-full" value={provider} onChange={e=>setProvider(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Date/Time</label>
            <input type="datetime-local" className="border rounded px-3 py-2 w-full" value={date} onChange={e=>setDate(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Amount</label>
            <input type="number" className="border rounded px-3 py-2 w-full" value={amount} onChange={e=>setAmount(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Status</label>
            <select className="border rounded px-3 py-2 w-full" value={status} onChange={e=>setStatus(e.target.value)}>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Customer Image</label>
            <input type="file" accept="image/*" onChange={handleImage} />
            {image && <img src={image} alt="preview" className="w-16 h-16 rounded-full mt-2 object-cover" />}
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button type="button" className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Order</button>
        </div>
      </form>
    </div>
  );
}
