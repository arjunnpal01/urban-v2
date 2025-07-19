import React, { useState } from "react";
import { User, Phone, UserCircle, Clock, MessageSquare } from "lucide-react";
import OrderTimeline from "./OrderTimeline";

export default function OrderDetails({ order, showActions = true }) {
  const [status, setStatus] = useState(order.status || "In Progress");
  const [provider, setProvider] = useState(order.provider.name);
  const [reschedule, setReschedule] = useState("");

  if (!order) return null;
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Order Details - <span className="text-blue-600">{order.id}</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Customer Info */}
        <div className="bg-gray-50 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-lg">60×60</span>
            <div>
              <div className="font-semibold text-lg">{order.customer.name}</div>
              <div className="text-xs text-gray-500">Customer since Aug 2022</div>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1 flex items-center gap-2"><User size={16}/> {order.customer.name.toLowerCase().replace(" ", ".")}@example.com</div>
          <div className="text-sm text-gray-600 mb-1 flex items-center gap-2"><Phone size={16}/> +91 98765 43210</div>
          <div className="text-sm text-gray-600 flex items-center gap-2"><UserCircle size={16}/> B-203, Shanti Apartments, Mumbai</div>
        </div>
        {/* Service Info */}
        <div className="bg-gray-50 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-lg">60×60</span>
            <div>
              <div className="font-semibold text-lg">{order.service.title} - Wiring Repair</div>
              <div className="text-xs text-gray-500">2 hours estimated</div>
            </div>
          </div>
          <div className="text-sm text-gray-700 mb-2"><span className="font-semibold">Problem Description</span><br/>Kitchen lights not working, possibly wiring issue. Need immediate assistance as it's disrupting daily activities.</div>
          <div className="text-xs text-gray-500 flex items-center gap-2"><Clock size={16}/> 12 May, 2023 <span className="ml-2">3:30 PM - 5:30 PM</span></div>
        </div>
        {/* Provider Info */}
        <div className="bg-gray-50 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-lg">60×60</span>
            <div>
              <div className="font-semibold text-lg text-yellow-700">{order.provider.name}</div>
              <div className="text-xs text-gray-500">★ 4.2/5<br/>52 services completed</div>
            </div>
          </div>
          <div className="mb-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">On the way</span> <span className="text-xs text-gray-500 ml-2">ETA: 15 minutes</span></div>
          <div className="flex gap-2 mt-2">
            <button className="flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs"><Phone size={14}/> Call</button>
            <button className="flex items-center gap-1 px-2 py-1 rounded bg-green-50 text-green-700 text-xs"><MessageSquare size={14}/> Chat</button>
            <button className="flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs"><UserCircle size={14}/> Profile</button>
          </div>
        </div>
      </div>
      {/* Order Actions */}
      {showActions && (
        <div className="bg-white rounded-lg p-5 border mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Update Status</label>
              <select className="border rounded px-3 py-2 w-full" value={status} onChange={e => setStatus(e.target.value)}>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Assign Provider</label>
              <select className="border rounded px-3 py-2 w-full" value={provider} onChange={e => setProvider(e.target.value)}>
                <option>Vikram S.</option>
                <option>Neha R.</option>
                <option>Rajesh M.</option>
                <option>Pradeep K.</option>
                <option>Mohan S.</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Reschedule</label>
              <input type="text" className="border rounded px-3 py-2 w-full" placeholder="Change Date/Time" value={reschedule} onChange={e => setReschedule(e.target.value)} />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded">Cancel Order</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
          </div>
        </div>
      )}
      {/* Order Timeline Section */}
      <div className="mt-8">
        <OrderTimeline orderId={order.id} />
      </div>
    </div>
  );
}
