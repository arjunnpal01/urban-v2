"use client";
import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, User, CheckCircle, XCircle, Clock, Eye, MoreVertical, Plus, Filter, Download } from "lucide-react";
import OrderDetails from "./OrderDetails";
import AddOrderModal from "./AddOrderModal";
import OrderTable from "./OrderTable";

const stats = [
  {
    label: "Total Orders",
    value: 1452,
    icon: <User className="w-7 h-7 text-blue-500" />,
    badge: <span className="text-green-600 flex items-center gap-1 text-xs font-semibold">+12.5% from last month <ArrowUpRight className="w-4 h-4" /></span>,
  },
  {
    label: "Pending",
    value: 238,
    icon: <Clock className="w-7 h-7 text-yellow-500" />,
    badge: <span className="text-red-500 flex items-center gap-1 text-xs font-semibold">+5.2% from last month <ArrowDownRight className="w-4 h-4" /></span>,
  },
  {
    label: "In Progress",
    value: 764,
    icon: <CheckCircle className="w-7 h-7 text-purple-500" />,
    badge: <span className="text-green-600 flex items-center gap-1 text-xs font-semibold">+18.7% from last month <ArrowUpRight className="w-4 h-4" /></span>,
  },
  {
    label: "Completed",
    value: 872,
    icon: <CheckCircle className="w-7 h-7 text-green-500" />,
    badge: <span className="text-green-600 flex items-center gap-1 text-xs font-semibold">+24.3% from last month <ArrowUpRight className="w-4 h-4" /></span>,
  },
];

const statusColors = {
  "In Progress": "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderDashboard() {
  const [orders, setOrders] = useState([
    { id: "#UC-4829", customer: { name: "Ramesh Patel" }, service: { title: "Electrician" }, technician: { name: "Vikram S." }, date: "12 May, 3:30 PM", amount: 1200, status: "In Progress" },
    { id: "#UC-4828", customer: { name: "Priya Sharma" }, service: { title: "Beauty" }, technician: { name: "Neha R." }, date: "12 May, 2:00 PM", amount: 850, status: "Completed" },
    { id: "#UC-4827", customer: { name: "Amit Joshi" }, service: { title: "Plumbing" }, technician: { name: "Rajesh M." }, date: "12 May, 1:30 PM", amount: 1500, status: "Pending" },
    { id: "#UC-4826", customer: { name: "Suresh Kumar" }, service: { title: "Deep Cleaning" }, technician: { name: "Pradeep K." }, date: "12 May, 11:30 AM", amount: 2400, status: "Completed" },
    { id: "#UC-4825", customer: { name: "Ananya Gupta" }, service: { title: "Pest Control" }, technician: { name: "Mohan S." }, date: "12 May, 10:45 AM", amount: 1800, status: "Cancelled" },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  const handleAddOrder = (order) => {
    setOrders([order, ...orders]);
    setSelectedOrder(order); // Show the newly added order in details
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
            <div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
              {stat.badge}
            </div>
          </div>
        ))}
      </div>
      {/* Top Bar */}
      <div className="flex flex-wrap items-center gap-2 justify-end mb-2">
        <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700"><Filter size={18}/> Filters</button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded text-gray-700"><Download size={18}/> Export</button>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>setShowAdd(true)}><Plus size={18}/> New Order</button>
      </div>
      {/* Order Table */}
      <OrderTable
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        statusColors={statusColors}
      />
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button className="border px-4 py-1 rounded">Previous</button>
        <span>Showing 1 to 5 of {orders.length} results</span>
        <div className="flex gap-1">
          <button className="border px-2 py-1 rounded">1</button>
          <button className="border px-2 py-1 rounded">2</button>
          <button className="border px-2 py-1 rounded">3</button>
          <span className="px-2">...</span>
          <button className="border px-2 py-1 rounded">8</button>
          <button className="border px-2 py-1 rounded">Next</button>
        </div>
      </div>
      {/* Add Order Modal */}
      {showAdd && <AddOrderModal onClose={()=>setShowAdd(false)} onAdd={handleAddOrder} />}
      {/* Dynamic Order Details below the table */}
      <div className="bg-white rounded-xl shadow p-8 mt-8">
        {selectedOrder ? (
          <OrderDetails order={selectedOrder} showActions={true} />
        ) : (
          <div className="text-gray-400 text-center py-12">Select an order to view details</div>
        )}
      </div>
    </div>
  );
}
