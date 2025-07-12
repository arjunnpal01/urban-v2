import React from "react";

export default function OrderTimeline({ orderId }) {
  // Dummy timeline data
  const timeline = [
    { time: "15 May, 2023 3:00 PM", status: "Order Placed", desc: "Order created by customer." },
    { time: "15 May, 2023 3:10 PM", status: "Provider Assigned", desc: "Vikram S. assigned to order." },
    { time: "15 May, 2023 3:20 PM", status: "Provider On The Way", desc: "Provider is on the way to customer location." },
    { time: "15 May, 2023 3:30 PM", status: "Service Started", desc: "Service started by provider." },
    { time: "15 May, 2023 5:30 PM", status: "Service Completed", desc: "Service completed successfully." },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
      <ol className="relative border-l border-gray-200">
        {timeline.map((item, idx) => (
          <li key={idx} className="mb-8 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            </span>
            <h4 className="font-semibold text-gray-800">{item.status}</h4>
            <time className="block mb-1 text-xs text-gray-400">{item.time}</time>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
