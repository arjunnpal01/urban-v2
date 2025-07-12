"use client";
import React, { useState } from "react";
import { UserPlus, Users, UserCheck, UserX, Search, Plus, X } from "lucide-react";
import AddUserModal from "./AddUserModal";

const stats = [
	{
		label: "Total Users",
		value: 1284,
		icon: <Users className="w-7 h-7 text-blue-500" />,
		badge: (
			<span className="text-green-600 text-xs font-semibold">
				↑ 12% from last month
			</span>
		),
	},
	{
		label: "Active Users",
		value: 984,
		icon: <UserCheck className="w-7 h-7 text-green-500" />,
		badge: (
			<span className="text-green-600 text-xs font-semibold">
				↑ 8% from last month
			</span>
		),
	},
	{
		label: "New Users",
		value: 147,
		icon: <UserPlus className="w-7 h-7 text-green-400" />,
		badge: (
			<span className="text-green-600 text-xs font-semibold">
				↑ 23% from last month
			</span>
		),
	},
	{
		label: "Pending Approvals",
		value: 15,
		icon: <UserX className="w-7 h-7 text-yellow-400" />,
		badge: (
			<span className="text-red-500 text-xs font-semibold">
				↓ 5% from last month
			</span>
		),
	},
];

const usersData = [
	{
		name: "Ramesh Verma",
		email: "ramesh.verma@example.com",
		phone: "+91 9876543210",
		location: "Delhi",
		status: "Active",
		lastActive: "Today, 10:45 AM",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Suman Singh",
		email: "suman.singh@example.com",
		phone: "+91 8765432109",
		location: "Mumbai",
		status: "Active",
		lastActive: "Today, 9:30 AM",
		avatar: "https://randomuser.me/api/portraits/men/33.jpg",
	},
	{
		name: "Arjun Mehta",
		email: "arjun.mehta@example.com",
		phone: "+91 7654321098",
		location: "Bangalore",
		status: "Pending",
		lastActive: "Yesterday, 4:15 PM",
		avatar: "https://randomuser.me/api/portraits/men/34.jpg",
	},
	{
		name: "Priyanka Jain",
		email: "priyanka.jain@example.com",
		phone: "+91 6543210987",
		location: "Hyderabad",
		status: "Inactive",
		lastActive: "3 days ago",
		avatar: "https://randomuser.me/api/portraits/women/35.jpg",
	},
	{
		name: "Vikram Desai",
		email: "vikram.desai@example.com",
		phone: "+91 5432109876",
		location: "Pune",
		status: "Active",
		lastActive: "2 days ago",
		avatar: "https://randomuser.me/api/portraits/men/36.jpg",
	},
];

const statusColors = {
	Active: "bg-green-100 text-green-700",
	Pending: "bg-yellow-100 text-yellow-700",
	Inactive: "bg-red-100 text-red-700",
};

const activity = [
	{
		name: "Rajesh Kumar",
		desc: "Updated profile information",
		time: "30 mins ago",
		avatar: "https://randomuser.me/api/portraits/men/37.jpg",
	},
	{
		name: "Priya Sharma",
		desc: "Submitted property request",
		time: "2 hours ago",
		avatar: "https://randomuser.me/api/portraits/women/38.jpg",
	},
	{
		name: "Amit Patel",
		desc: "Completed payment",
		time: "5 hours ago",
		avatar: "https://randomuser.me/api/portraits/men/39.jpg",
	},
	{
		name: "Neha Gupta",
		desc: "Signed up for newsletter",
		time: "1 day ago",
		avatar: "https://randomuser.me/api/portraits/women/40.jpg",
	},
];

export default function UsersPage() {
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState(usersData);
	const [showAdd, setShowAdd] = useState(false);

	const filteredUsers = users.filter(
		(u) =>
			u.name.toLowerCase().includes(search.toLowerCase()) ||
			u.email.toLowerCase().includes(search.toLowerCase()) ||
			u.phone.includes(search)
	);

	const handleAddUser = (user) => {
		setUsers([user, ...users]);
	};

	return (
		<div className="space-y-8 p-6">
			{/* Stats */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{stats.map((stat, i) => (
					<div
						key={i}
						className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
					>
						<div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
						<div>
							<div className="text-xl font-bold">{stat.value}</div>
							<div className="text-gray-500 text-sm">{stat.label}</div>
							{stat.badge}
						</div>
					</div>
				))}
			</div>
			{/* User Activity & Recent Activity */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Chart Placeholder */}
				<div className="bg-white rounded-xl shadow p-5 col-span-2">
					<div className="font-semibold mb-2">User Activity</div>
					{/* Chart placeholder, replace with chart.js or recharts for real chart */}
					<div className="h-64 flex items-center justify-center">
						<div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex flex-col items-center justify-center">
							<div className="flex gap-4 mb-2">
								<span className="text-blue-600 font-semibold">■ New Users</span>
								<span className="text-green-600 font-semibold">■ Active Users</span>
							</div>
							<div className="text-gray-400">[Chart Placeholder]</div>
						</div>
					</div>
					<div className="flex gap-2 mt-4 justify-end">
						<button className="px-3 py-1 rounded bg-gray-100 text-xs">
							Week
						</button>
						<button className="px-3 py-1 rounded bg-blue-600 text-white text-xs">
							Month
						</button>
						<button className="px-3 py-1 rounded bg-gray-100 text-xs">
							Year
						</button>
					</div>
				</div>
				{/* Recent Activity */}
				<div className="bg-white rounded-xl shadow p-5">
					<div className="font-semibold mb-4">Recent Activity</div>
					<ul className="space-y-4">
						{activity.map((a, i) => (
							<li key={i} className="flex items-center gap-3">
								<img
									src={a.avatar}
									className="w-10 h-10 rounded-full object-cover"
									alt={a.name}
								/>
								<div>
									<div className="font-semibold">{a.name}</div>
									<div className="text-xs text-gray-500">{a.desc}</div>
									<div className="text-xs text-gray-400">{a.time}</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* All Users Table */}
			<div className="bg-white rounded-xl shadow p-5">
				<div className="flex items-center justify-between mb-4">
					<div className="font-semibold text-lg">All Users</div>
					<div className="flex gap-2">
						<div className="relative">
							<input
								type="text"
								className="border rounded px-3 py-2 pl-8 text-sm"
								placeholder="Search users..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
						</div>
						<button
							className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm"
							onClick={() => setShowAdd(true)}
						>
							<Plus size={16} /> Add User
						</button>
					</div>
				</div>
				<table className="w-full text-sm">
					<thead className="bg-gray-50 text-gray-700 font-semibold">
						<tr>
							<th className="py-2 text-left">NAME</th>
							<th className="py-2 text-left">PHONE</th>
							<th className="py-2 text-left">LOCATION</th>
							<th className="py-2 text-left">STATUS</th>
							<th className="py-2 text-left">LAST ACTIVE</th>
							<th className="py-2 text-left">ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map((user, i) => (
							<tr key={i} className="border-t hover:bg-gray-50">
								<td className="py-2 flex items-center gap-3">
									<img
										src={user.avatar}
										className="w-10 h-10 rounded-full object-cover"
										alt={user.name}
									/>
									<div>
										<div className="font-semibold">{user.name}</div>
										<div className="text-xs text-gray-500">{user.email}</div>
									</div>
								</td>
								<td className="py-2">{user.phone}</td>
								<td className="py-2">{user.location}</td>
								<td className="py-2">
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[user.status]}`}
									>
										{user.status}
									</span>
								</td>
								<td className="py-2">{user.lastActive}</td>
								<td className="py-2">
									<button className="px-2 py-1 rounded hover:bg-gray-100">
										<span className="text-gray-500">⋮</span>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{filteredUsers.length === 0 && (
					<div className="text-center text-gray-400 py-8">
						No users found.
					</div>
				)}
			</div>
			{showAdd && (
				<AddUserModal
					onClose={() => setShowAdd(false)}
					onAdd={handleAddUser}
				/>
			)}
		</div>
	);
}
