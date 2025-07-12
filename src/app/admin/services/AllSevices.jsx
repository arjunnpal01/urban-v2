"use client";
import React, { useState } from "react";
import TotalServices from "../components/TotalServices";
import ActiveOrders from "../components/ActiveOrders";
import PendingRequests from "../components/PendingRequests";
import TotalRevenue from "../components/TotalRevenue";
import RecentOrders from "../components/RecentService";

const stats = [
	{ label: "Total Services", value: 42, change: "+5 from last month" },
	{ label: "Active Orders", value: 18, change: "+2 ongoing" },
	{ label: "Pending Requests", value: 7, change: "+1 today" },
	{ label: "Total Revenue", value: "$12,480", change: "12% increase" },
];

export default function AllServicePage() {
	const [visibleSection, setVisibleSection] = useState(null);

	const handleCardClick = (label) => {
		setVisibleSection((prev) => (prev === label ? null : label));
	};

	return (
		<div className="min-h-screen space-y-8 bg-gray-50 p-6">
			{/* Stats Cards */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
				{stats.map((stat, idx) => (
					<div
						key={idx}
						onClick={() => handleCardClick(stat.label)}
						className="cursor-pointer rounded-xl bg-white p-4 flex flex-col shadow transition hover:shadow-md"
					>
						<span className="mt-1 text-sm font-medium text-gray-500">
							{stat.label}
						</span>
						<span className="text-2xl font-bold">{stat.value}</span>
						<span className="mt-1 text-xs text-green-600">
							{stat.change}
						</span>
					</div>
				))}
			</div>

			{/* Recent Orders Table */}
		

			{/* Sections */}
			{visibleSection === "Total Services" && <TotalServices />}
			{visibleSection === "Active Orders" && <ActiveOrders />}
			{visibleSection === "Pending Requests" && <PendingRequests />}
			{visibleSection === "Total Revenue" && <TotalRevenue />}
      	<RecentOrders />
		</div>
	);
}
