"use client";
import React from "react";

export default function TotalRevenue() {
  const revenueSummary = [
    { service: "AC Repair", earnings: 4500 },
    { service: "Deep Cleaning", earnings: 6800 },
    { service: "Plumbing", earnings: 1180 },
  ];

  const totalRevenue = revenueSummary.reduce((acc, curr) => acc + curr.earnings, 0);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Revenue Summary</h2>

      <div className="text-xl font-bold text-gray-800 mb-4">
        Total Revenue: ₹{totalRevenue.toLocaleString()}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {revenueSummary.map((row, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{row.service}</td>
                <td className="px-4 py-3">₹{row.earnings.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
