import React, { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function AddOrderModal({ onClose, onAdd }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      customer: "",
      service: "",
      provider: "",
      date: "",
      amount: "",
      status: "In Progress",
      image: "",
    },
  });
  const [success, setSuccess] = useState("");
  const [imgPreview, setImgPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("image", reader.result);
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (!data.customer || !data.service || !data.provider || !data.date || !data.amount) return;
    onAdd({
      id: `#UC-${Math.floor(Math.random()*9000+1000)}`,
      customer: { name: data.customer },
      service: { title: data.service },
      provider: { name: data.provider },
      date: data.date,
      amount: data.amount,
      status: data.status,
      image: data.image,
    });
    setSuccess("Order added successfully!");
    setTimeout(() => {
      setSuccess("");
      onClose();
      reset();
      setImgPreview("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={onClose}><X size={20} /></button>
        <h2 className="text-xl font-bold mb-4">Add New Order</h2>
        {success && (
          <div className="mb-3 p-2 bg-green-100 text-green-700 rounded text-center font-semibold">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Customer Name</label>
            <input {...register("customer", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.customer && <span className="text-xs text-red-500">Customer name is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Service</label>
            <input {...register("service", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.service && <span className="text-xs text-red-500">Service is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Provider</label>
            <input {...register("provider", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.provider && <span className="text-xs text-red-500">Provider is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Date/Time</label>
            <input type="datetime-local" {...register("date", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.date && <span className="text-xs text-red-500">Date/Time is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Amount</label>
            <input type="number" {...register("amount", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.amount && <span className="text-xs text-red-500">Amount is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Status</label>
            <select {...register("status")} className="border rounded px-3 py-2 w-full">
              <option>In Progress</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Customer Image</label>
            <input type="file" accept="image/*" onChange={handleImage} className="w-full" />
            {imgPreview && (
              <img src={imgPreview} alt="Preview" className="w-16 h-16 rounded-full mt-2 object-cover mx-auto" />
            )}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-2">Add Order</button>
        </form>
      </div>
    </div>
  );
}
