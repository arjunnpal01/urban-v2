import React, { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function AddUserModal({ onClose, onAdd }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      status: "Active",
      avatar: "",
    },
  });
  const [success, setSuccess] = useState(false);
  const [imgPreview, setImgPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("avatar", reader.result);
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (!data.name || !data.email || !data.phone || !data.location) return;
    onAdd({ ...data, lastActive: "Just now" });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      reset();
      setImgPreview("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={onClose}><X size={20} /></button>
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        {success && (
          <div className="mb-3 p-2 bg-green-100 text-green-700 rounded text-center font-semibold">
            User added successfully!
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
          <div>
            <label className="block text-sm font-semibold mb-1">Avatar</label>
            <input type="file" accept="image/*" onChange={handleImage} className="w-full" />
            {imgPreview && (
              <img src={imgPreview} alt="Preview" className="w-16 h-16 rounded-full mt-2 object-cover mx-auto" />
            )}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-2">Add User</button>
        </form>
      </div>
    </div>
  );
}
