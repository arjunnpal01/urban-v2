"use client";
import React, { useState } from "react";
import PackageCard from "./PackageCard";
import { Plus } from "lucide-react";
import EditPackageModal from "./EditPackageModal";
import AddPackageModal from "./AddPackageModal";

const TABS = [
  "All Services",
  "Home Cleaning",
  "Beauty",
  "Repairs",
  "Wellness",
];

const packagesData = [
  {
    title: "Premium Home Cleaning",
    desc: "Complete deep cleaning package for 2BHK apartments with premium products.",
    price: 1999,
    oldPrice: 2499,
    services: 3,
    badge: "Active",
    badgeColor: "bg-green-500 text-white",
    status: "Active",
    rating: 4.8,
    reviews: 120,
  },
  {
    title: "Royal Spa Package",
    desc: "Includes facial, manicure, pedicure, head massage, and foot reflexology.",
    price: 2999,
    oldPrice: 3499,
    services: 5,
    badge: "Popular",
    badgeColor: "bg-yellow-400 text-white",
    rating: 4.9,
    reviews: 85,
  },
  {
    title: "Electrical Repairs",
    desc: "Switchboard repairs and appliance wiring checks by certified electricians.",
    price: 1299,
    services: 2,
    badge: "New",
    badgeColor: "bg-blue-400 text-white",
    perVisit: true,
    rating: 4.7,
    reviews: 64,
  },
];

export default function PackagesPage() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [pkgs, setPkgs] = useState(packagesData);
  const [editIdx, setEditIdx] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const handleEdit = (idx) => setEditIdx(idx);
  const handleSave = (pkg) => {
    setPkgs(pkgs.map((p, i) => (i === editIdx ? pkg : p)));
    setEditIdx(null);
  };
  const handleDelete = (idx) => {
    if (window.confirm("Delete this package?")) {
      setPkgs(pkgs.filter((_, i) => i !== idx));
    }
  };
  const handleAdd = (pkg) => {
    setPkgs([pkg, ...pkgs]);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Package Management</h1>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded" onClick={() => setShowAdd(true)}> <Plus size={18}/> Add New Package</button>
      </div>
      <div className="flex gap-6 border-b mb-6">
        {TABS.map((t, i) => (
          <button
            key={t}
            className={`py-2 px-2 border-b-2 text-sm font-semibold transition ${tab === i ? "border-purple-500 text-purple-600" : "border-transparent text-gray-500"}`}
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 flex flex-wrap gap-4 items-end mb-8">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold mb-1">Search Packages</label>
          <input type="text" className="border rounded px-3 py-2 w-full" placeholder="Search by name..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="min-w-[200px]">
          <label className="block text-xs font-semibold mb-1">Category</label>
          <select className="border rounded px-3 py-2 w-full" value={category} onChange={e => setCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Home Cleaning</option>
            <option>Beauty</option>
            <option>Repairs</option>
            <option>Wellness</option>
          </select>
        </div>
        <div className="min-w-[200px]">
          <label className="block text-xs font-semibold mb-1">Status</label>
          <select className="border rounded px-3 py-2 w-full" value={status} onChange={e => setStatus(e.target.value)}>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Popular</option>
            <option>New</option>
          </select>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded font-semibold">Apply Filters</button>
      </div>
      <div className="flex flex-wrap gap-6">
        {pkgs.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} onEdit={() => handleEdit(i)} onDelete={() => handleDelete(i)} />
        ))}
      </div>
      {editIdx !== null && (
        <EditPackageModal
          pkg={pkgs[editIdx]}
          onClose={() => setEditIdx(null)}
          onSave={handleSave}
        />
      )}
      {showAdd && (
        <AddPackageModal
          onClose={() => setShowAdd(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
