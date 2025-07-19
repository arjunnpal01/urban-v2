import React, { useState } from "react";

export default function OrderTable({ orders, selectedOrder, setSelectedOrder, statusColors, onEdit, onDelete }) {
  const [deleteId, setDeleteId] = useState(null);

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] bg-white rounded-xl shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3">ORDER ID</th>
              <th className="px-4 py-3">CUSTOMER</th>
              <th className="px-4 py-3">SERVICE</th>
              <th className="px-4 py-3">PROVIDER</th>
              <th className="px-4 py-3">DATE/TIME</th>
              <th className="px-4 py-3">AMOUNT</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.id} className={`border-t hover:bg-gray-50 ${selectedOrder && selectedOrder.id === order.id ? 'bg-blue-50/30' : ''}`}>
                <td className="px-4 py-3 font-semibold">{order.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {order.image ? (
                      <img src={order.image} className="w-10 h-10 rounded-full object-cover" alt={order.customer.name} />
                    ) : (
                      <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs">40×40</span>
                    )}
                    <span>{order.customer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">40×40</span>
                    <span>{order.service.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">40×40</span>
                    <span>{order.provider.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">₹{order.amount}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>{order.status}</span>
                </td>
                <td className="px-4 py-5 flex gap-2">
                  <button
                    className="text-yellow-600 hover:underline"
                    onClick={() => onEdit && onEdit(order)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => setDeleteId(order.id)}
                  >
                    Delete
                  </button>
                  {deleteId === order.id && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                      <div className="bg-white rounded shadow p-6 w-full max-w-xs">
                        <div className="font-semibold mb-4">Delete this order?</div>
                        <div className="flex justify-end gap-2">
                          <button className="px-3 py-1 rounded border" onClick={() => setDeleteId(null)}>Cancel</button>
                          <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => { onDelete && onDelete(order); setDeleteId(null); }}>Delete</button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
