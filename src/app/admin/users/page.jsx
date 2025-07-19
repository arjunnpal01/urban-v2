"use client";
import React, { useState, Suspense } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { stats, usersData, statusColors } from "./data/usersData";
import { activity } from "./data/activityData";
const AddUserModal = React.lazy(() => import("./components/AddUserModal"));
const EditUserModal = React.lazy(() => import("./components/EditUserModal"));

function ConfirmModal({ open, onClose, onConfirm, message, confirmLabel = "Confirm", confirmClass = "bg-blue-600 text-white hover:bg-blue-700" }) {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
			<div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
				<div className="text-lg font-semibold mb-4">Are you sure?</div>
				<div className="mb-6 text-gray-600">{message}</div>
				<div className="flex justify-end gap-2">
					<button
						className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className={`px-4 py-2 rounded ${confirmClass}`}
						onClick={onConfirm}
					>
						{confirmLabel}
					</button>
				</div>
			</div>
		</div>
	);
}

export default function UsersPage() {
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState(usersData);
	const [showAdd, setShowAdd] = useState(false);
	const [editUser, setEditUser] = useState(null);
	const [editConfirmUser, setEditConfirmUser] = useState(null);
	const [showEditConfirm, setShowEditConfirm] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [deleteUser, setDeleteUser] = useState(null);

	const filteredUsers = users.filter(
		(u) =>
			u.name.toLowerCase().includes(search.toLowerCase()) ||
			u.email.toLowerCase().includes(search.toLowerCase()) ||
			u.phone.includes(search)
	);

	const handleAddUser = (user) => {
		setUsers([user, ...users]);
	};

	const handleEditUser = (updatedUser) => {
		setUsers((prev) =>
			prev.map((u) => (u.email === updatedUser.email ? { ...updatedUser } : u))
		);
		setEditModalOpen(false);
		setEditUser(null);
	};

	const handleDeleteUser = () => {
		setUsers((prev) => prev.filter((u) => u.email !== deleteUser.email));
		setShowConfirm(false);
		setDeleteUser(null);
	};

	return (
		<div className="space-y-8 p-6 px-8 max-w-screen-xl mx-auto">
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
								<td className="py-2 flex gap-2">
									<button
										className="px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
										onClick={() => {
											setEditConfirmUser(user);
											setShowEditConfirm(true);
										}}
										title="Edit"
									>
										<Pencil size={14} /> Edit
									</button>
									<button
										className="px-2 py-1 rounded hover:bg-red-100 flex items-center gap-1 text-red-600"
										onClick={() => {
											setDeleteUser(user);
											setShowConfirm(true);
										}}
										title="Delete"
									>
										<Trash2 size={14} /> Delete
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
				<Suspense fallback={<div className="text-center py-8">Loading...</div>}>
					<AddUserModal
						onClose={() => setShowAdd(false)}
						onAdd={handleAddUser}
					/>
				</Suspense>
			)}
			{editUser && editModalOpen && (
				<EditUserModal
					user={editUser}
					onClose={() => {
						setEditModalOpen(false);
						setEditUser(null);
					}}
					onEdit={handleEditUser}
				/>
			)}
			<ConfirmModal
				open={showConfirm}
				onClose={() => setShowConfirm(false)}
				onConfirm={handleDeleteUser}
				message={deleteUser ? `Delete user "${deleteUser.name}"? This action cannot be undone.` : ""}
				confirmLabel="Delete"
				confirmClass="bg-red-600 text-white hover:bg-red-700"
			/>
			<ConfirmModal
				open={showEditConfirm}
				onClose={() => setShowEditConfirm(false)}
				onConfirm={() => {
					setEditUser(editConfirmUser);
					setEditModalOpen(true);
					setShowEditConfirm(false);
				}}
				message={editConfirmUser ? `Edit user "${editConfirmUser.name}"?` : ""}
				confirmLabel="Confirm"
				confirmClass="bg-blue-600 text-white hover:bg-blue-700"
			/>
		</div>
	);
}
