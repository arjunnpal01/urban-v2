import React, { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function EditUserModal({ user, onClose, onEdit }) {
  const [success, setSuccess] = useState(false);
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      location: user?.location || "",
      status: user?.status || "Active",
    }
  });
  const onSubmit = (data) => {
    if (!data.name || !data.email || !data.phone || !data.location) return;
    onEdit({ ...user, ...data });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      reset();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={onClose}><X size={20} /></button>
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        {success && (
          <div className="mb-3 p-2 bg-green-100 text-green-700 rounded text-center font-semibold">
            User updated successfully!
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input {...register("name", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.name && <span className="text-xs text-red-500">Name is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input {...register("email", { required: true })} className="border rounded px-3 py-2 w-full" type="email" />
            {errors.email && <span className="text-xs text-red-500">Email is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input {...register("phone", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.phone && <span className="text-xs text-red-500">Phone is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input {...register("location", { required: true })} className="border rounded px-3 py-2 w-full" />
            {errors.location && <span className="text-xs text-red-500">Location is required</span>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Status</label>
            <select {...register("status")} className="border rounded px-3 py-2 w-full">
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
          {/* Avatar upload and preview removed as per request */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-2">Update User</button>
        </form>
      </div>
    </div>


  );
}
