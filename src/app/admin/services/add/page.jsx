"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import of CSK editor (markdown/code-style editor)
const Editor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function AddServicePage() {
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finalData = { ...data, description: desc };
    console.log("Submitted Service:", finalData);
    setSuccessMsg("Service added successfully!");
    setTimeout(() => {
      setSuccessMsg("");
      router.push("/admin/services/all");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Service</h1>

      {successMsg && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center font-semibold">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("title", { required: true })}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

        <input
          {...register("category", { required: true })}
          placeholder="Category"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("price", { required: true })}
          placeholder="Price (e.g. ₹499)"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("duration")}
          placeholder="Duration (e.g. 1.5 hrs)"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("rating")}
          placeholder="Rating (e.g. 4.5)"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("image")}
          placeholder="Image URL (e.g. /ac.jpg)"
          className="w-full border p-2 rounded"
        />

        <select
          {...register("status")}
          className="w-full border p-2 rounded"
          defaultValue="Active"
        >
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Inactive">Inactive</option>
        </select>

        <div className="w-full">
          <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
          <Editor value={desc} onChange={setDesc} />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}
