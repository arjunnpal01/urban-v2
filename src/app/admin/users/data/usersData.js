export const stats = [
  {
    label: "Total Users",
    value: 1200,
    icon: "👤",
    badge: <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">+5%</span>,
  },
  {
    label: "Active Users",
    value: 980,
    icon: "✅",
    badge: <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">+2%</span>,
  },
  {
    label: "Pending Users",
    value: 120,
    icon: "⏳",
    badge: <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">-1%</span>,
  },
  {
    label: "Inactive Users",
    value: 100,
    icon: "❌",
    badge: <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs">-3%</span>,
  },
];

// usersData is now provided by the API (MSW in development)
export const usersData = [];

export const statusColors = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};
