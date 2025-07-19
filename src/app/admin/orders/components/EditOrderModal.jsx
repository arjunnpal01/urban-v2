"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditOrderModal({ order, onClose, onUpdate }) {
  const [customer, setCustomer] = useState(order?.customer?.name || "");
  const [service, setService] = useState(order?.service?.title || "");
  const [provider, setProvider] = useState(order?.technician?.name || "");
  const [date, setDate] = useState(order?.date || "");
  const [amount, setAmount] = useState(order?.amount || "");
  const [status, setStatus] = useState(order?.status || "In Progress");
  const [image, setImage] = useState(order?.image || null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setCustomer(order?.customer?.name || "");
    setService(order?.service?.title || "");
    setProvider(order?.technician?.name || "");
    setDate(order?.date || "");
    setAmount(order?.amount || "");
    setStatus(order?.status || "In Progress");
    setImage(order?.image || null);
  }, [order]);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !service || !provider || !date || !amount) return;
    onUpdate && onUpdate({
      ...order,
      customer: { name: customer },
      service: { title: service },
      technician: { name: provider },
      date,
      amount,
      status,
      image,
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 sm:p-8">
      <form className="bg-white rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative" onSubmit={handleSubmit}>
        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-black" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold mb-6">Edit Order</h2>
        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-semibold animate-fade-in">Order updated successfully!</div>
        )}
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
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Order</button>
        </div>
      </form>
    </div>
  );
}
