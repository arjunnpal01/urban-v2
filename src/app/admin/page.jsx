"use client";
import React from "react";
import { Users, ShoppingCart, FileText, UserPlus, ShoppingBag } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const cards = [
  {
    label: "Total Users",
    value: "20037",
    icon: Users,
    bg: "bg-[#eaf2fb]",
    iconBg: "bg-[#b3d3f6]",
    iconColor: "text-[#2386e6]",
  },
  {
    label: "Total Orders",
    value: "5156",
    icon: ShoppingCart,
    bg: "bg-[#eafbf0]",
    iconBg: "bg-[#b3f6c7]",
    iconColor: "text-[#22c55e]",
  },
  {
    label: "Total Services",
    value: "33297",
    icon: ShoppingBag,
    bg: "bg-[#f3eafd]",
    iconBg: "bg-[#e0c6fa]",
    iconColor: "text-[#a259e6]",
  },
  {
    label: "Today's New Users",
    value: "85",
    icon: UserPlus,
    bg: "bg-[#fdeaf3]",
    iconBg: "bg-[#f6b3d3]",
    iconColor: "text-[#e62386]",
  },
  {
    label: "Today's Orders",
    value: "5",
    icon: ShoppingBag,
    bg: "bg-[#fdfbe9]",
    iconBg: "bg-[#f6eeb3]",
    iconColor: "text-[#e6c823]",
  },
];

export default function AdminDashboardCards() {
  // Dummy data for charts
  const days = ["11/07", "12/07", "13/07", "14/07", "15/07", "16/07", "17/07"];
  // User Signups
  const userSignups = [10, 8, 12, 20, 50, 280, 60];
  // Orders Overview
  const orders = [1, 2, 2, 1, 3, 8, 2];
  const revenue = [5, 10, 8, 6, 12, 7, 6];
  // Chart data for all charts with multiple ranges
  const chartRanges = ["1 Day", "7 Days", "1 Month", "6 Months", "1 Year"];

  // User Signups chart data
  const userSignupsData = {
    "1 Day": { labels: ["17/07"], data: [60] },
    "7 Days": { labels: days, data: [10, 8, 12, 20, 50, 280, 60] },
    "1 Month": { labels: Array.from({length: 30}, (_, i) => `${i+1}/07`), data: Array.from({length: 30}, () => Math.floor(Math.random()*300)) },
    "6 Months": { labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"], data: [120, 150, 180, 200, 220, 250] },
    "1 Year": { labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], data: [100,120,130,140,150,160,170,180,190,200,210,220] },
  };
  const [userRange, setUserRange] = React.useState("7 Days");

  // Orders Overview chart data
  const ordersData = {
    "1 Day": { labels: ["17/07"], orders: [2], revenue: [6] },
    "7 Days": { labels: days, orders: [1, 2, 2, 1, 3, 8, 2], revenue: [5, 10, 8, 6, 12, 7, 6] },
    "1 Month": { labels: Array.from({length: 30}, (_, i) => `${i+1}/07`), orders: Array.from({length: 30}, () => Math.floor(Math.random()*10)), revenue: Array.from({length: 30}, () => Math.floor(Math.random()*20)) },
    "6 Months": { labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"], orders: [12, 15, 18, 20, 22, 25], revenue: [25, 30, 35, 40, 45, 50] },
    "1 Year": { labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], orders: [10,12,13,14,15,16,17,18,19,20,21,22], revenue: [20,22,24,26,28,30,32,34,36,38,40,42] },
  };
  const [ordersRange, setOrdersRange] = React.useState("7 Days");

  // Total Services chart data
  const servicesData = {
    "1 Day": { labels: ["Plumber", "Electrician", "Carpenter", "Painter", "Cleaning"], data: [5, 4, 3, 2, 1] },
    "7 Days": { labels: ["Plumber", "Electrician", "Carpenter", "Painter", "Cleaning"], data: [120, 95, 80, 60, 45] },
    "1 Month": { labels: ["Plumber", "Electrician", "Carpenter", "Painter", "Cleaning"], data: [300, 250, 200, 150, 100] },
    "6 Months": { labels: ["Plumber", "Electrician", "Carpenter", "Painter", "Cleaning"], data: [1200, 950, 800, 600, 450] },
    "1 Year": { labels: ["Plumber", "Electrician", "Carpenter", "Painter", "Cleaning"], data: [2400, 1900, 1600, 1200, 900] },
  };
  const [servicesRange, setServicesRange] = React.useState("7 Days");

  // Transactions Overview chart data for different ranges
  const transactionChartData = {
    "1 Day": {
      labels: ["17/07"],
      accountBalance: [55],
      razorpay: [30],
    },
    "7 Days": {
      labels: days,
      accountBalance: [15, 18, 22, 30, 40, 60, 55],
      razorpay: [5, 7, 10, 15, 20, 35, 30],
    },
    "1 Month": {
      labels: Array.from({length: 30}, (_, i) => `${i+1}/07`),
      accountBalance: Array.from({length: 30}, () => Math.floor(Math.random()*100)),
      razorpay: Array.from({length: 30}, () => Math.floor(Math.random()*50)),
    },
    "6 Months": {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      accountBalance: [120, 150, 180, 200, 220, 250],
      razorpay: [60, 80, 90, 100, 110, 130],
    },
    "1 Year": {
      labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      accountBalance: [100,120,130,140,150,160,170,180,190,200,210,220],
      razorpay: [50,60,70,80,90,100,110,120,130,140,150,160],
    },
  };
  const [txnRange, setTxnRange] = React.useState("7 Days");

  return (
    <div className="min-h-screen bg-[#f7fafd] flex flex-col items-start justify-center p-8 mt-10 ">
      {/* Cards Row */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 ">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          // For Total Users card, use split background
          if (card.label === "Total Users") {
            return (
              <div key={idx} className="rounded-xl shadow p-0 flex flex-col min-h-[120px] overflow-hidden">
                <div className="flex items-center justify-between mb-2 px-5 pt-5">
                  <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#b3d3f6]`}>
                    <Icon className={`w-5 h-5 text-[#2386e6]`} />
                  </span>
                </div>
                <div className="flex-1 flex">
                  <div className="w-full bg-white flex items-end px-5 pb-5">
                    <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
                  </div>
                </div>
              </div>
            );
          }
          // For Total Orders card, top colored, bottom white
          if (card.label === "Total Orders") {
            return (
              <div key={idx} className="rounded-xl shadow p-0 flex flex-col min-h-[120px] overflow-hidden bg-green-50">
                <div className="flex items-center justify-between mb-2 px-5 pt-5 ">
                  <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#b3f6c7]`}>
                    <Icon className={`w-5 h-5 text-[#22c55e]`} />
                  </span>
                </div>
                <div className="flex-1 flex">
                  <div className="w-full bg-white flex items-end px-5 pb-5">
                    <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
                  </div>
                </div>
              </div>
            );
          }
          // For Today's New Users card, split background: top colored, bottom white
          if (card.label === "Today's New Users") {
            return (
              <div key={idx} className="rounded-xl shadow p-0 flex flex-col min-h-[120px] overflow-hidden bg-pink-50">
                <div className="flex items-center justify-between mb-2 px-5 pt-5">
                  <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-200">
                    <Icon className="w-5 h-5 text-pink-500" />
                  </span>
                </div>
                <div className="flex-1 flex">
                  <div className="w-full bg-white flex items-end px-5 pb-5">
                    <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
                  </div>
                </div>
              </div>
            );
          }
          // For Today's Orders card, split background: top colored, bottom white
          if (card.label === "Today's Orders") {
            return (
              <div key={idx} className="rounded-xl shadow p-0 flex flex-col min-h-[120px] overflow-hidden bg-yellow-50">
                <div className="flex items-center justify-between mb-2 px-5 pt-5 ">
                  <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </span>
                </div>
                <div className="flex-1 flex">
                  <div className="w-full bg-white flex items-end px-5 pb-5">
                    <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
                  </div>
                </div>
              </div>
            );
          }


           if (card.label === "Total Services") {
            return (
              <div key={idx} className="rounded-xl shadow p-0 flex flex-col min-h-[120px] overflow-hidden bg-violet-50">
                <div className="flex items-center justify-between mb-2 px-5 pt-5 ">
                  <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-200">
                    <Icon className="w-5 h-5 text-violet-500" />
                  </span>
                </div>
                <div className="flex-1 flex">
                  <div className="w-full bg-white flex items-end px-5 pb-5">
                    <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
                  </div>
                </div>
              </div>
            );
          }
          // Other cards remain unchanged
          return (
            <div
              key={idx}
              className={`rounded-xl shadow ${card.bg} p-5 flex flex-col min-h-[120px]`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-semibold text-sm">{card.label}</span>
                <span className={`w-8 h-8 flex items-center justify-center rounded-full ${card.iconBg}`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </span>
              </div>
              <div className="text-2xl font-bold text-[#4C4C5C]">{card.value}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Signups Chart */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <span className=" font-bold text-[#4C4C5C] text-[17px] leading-none ">User Signups</span>
              <span className="text-[#167DCD] font-semibold text-[15px] leading-none">({userSignupsData[userRange].data.reduce((a,b)=>a+b,0)})</span>
            </div>
            <select
              className="border border-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 bg-white focus:outline-none shadow-sm"
              value={userRange}
              onChange={e => setUserRange(e.target.value)}
            >
              {chartRanges.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="h-64">
            <Line
              data={{
                labels: userSignupsData[userRange].labels,
                datasets: [
                  {
                    label: "Signups",
                    data: userSignupsData[userRange].data,
                    borderColor: "#ff9100",
                    backgroundColor: "rgba(255,145,0,0.1)",
                    tension: 0.4,
                    pointBackgroundColor: "#ff9100",
                    pointBorderColor: "#fff",
                    pointRadius: 5,
                    fill: false,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { color: '#bdbdbd', font: { size: 12 } },
                    grid: { color: '#f3f4f6' },
                  },
                  x: {
                    ticks: {
                      color: '#bdbdbd',
                      font: { size: 12 },
                      autoSkip: false,
                      maxRotation: 0,
                      minRotation: 0,
                    },
                    grid: { display: false },
                  },
                },
              }}
            />
          </div>
        </div>
        {/* Orders Overview Chart */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-[#4C4C5C] text-[17px] leading-none ">Orders Overview</span>
            <select
              className="border border-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 bg-white focus:outline-none shadow-sm"
              value={ordersRange}
              onChange={e => setOrdersRange(e.target.value)}
            >
              {chartRanges.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
          {/* Custom Legend Row */}
          <div className="flex items-center justify-start gap-6 mb-2">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#ff9100]  inline-block "></span>
              <span className="text-[#ff9100] font-semibold text-[14px] leading-none text-sm">Orders: {ordersData[ordersRange].orders.reduce((a,b)=>a+b,0)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#167DCD] inline-block "></span>
              <span className="text-[#167DCD] font-semibold text-[14px] leading-none text-sm">Revenue: ${ordersData[ordersRange].revenue.reduce((a,b)=>a+b,0)}</span>

            </div>
            <div className="flex items-end "></div>
          </div>
          <div className="h-64">
            <Bar
              data={{
                labels: ordersData[ordersRange].labels,
                datasets: [
                  {
                    label: "Orders",
                    data: ordersData[ordersRange].orders,
                    backgroundColor: "#ff9100",
                    borderRadius: 6,
                    barThickness: 10,
                    yAxisID: 'y',
                  },
                  {
                    label: "Revenue",
                    data: ordersData[ordersRange].revenue,
                    backgroundColor: "#167DCD",
                    borderRadius: 6,
                    barThickness: 13,
                    yAxisID: 'y1',
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    position: 'left',
                    title: { display: true, text: 'Orders' },
                    ticks: { color: '#bdbdbd', font: { size: 12 } },
                    grid: { display: false },
                  },
                  y1: {
                    beginAtZero: true,
                    position: 'right',
                    title: { display: true, text: 'Revenue' },
                    grid: { drawOnChartArea: true, color: '#f3f4f6' },
                    ticks: { color: '#bdbdbd', font: { size: 12 } },
                  },
                  x: {
                    ticks: {
                      color: '#bdbdbd',
                      font: { size: 12 },
                      autoSkip: false,
                      maxRotation: 0,
                      minRotation: 0,
                    },
                    grid: { display: false, drawBorder: true },
                  },
                },
              }}
            />
          </div>
        </div>
        {/* File Downloads Chart */}
        {/* Total Services Chart */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-[#4C4C5C] text-[17px] leading-none">Total Services</span>
            <select
              className="border border-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 bg-white focus:outline-none shadow-sm"
              value={servicesRange}
              onChange={e => setServicesRange(e.target.value)}
            >
              {chartRanges.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="h-80 w-full flex items-center justify-center">
            {/* Doughnut chart for Total Services */}
            <Doughnut
              data={{
                labels: servicesData[servicesRange].labels,
                datasets: [
                  {
                    label: "Services Booked",
                    data: servicesData[servicesRange].data,
                    backgroundColor: [
                      "#22c55e",
                      "#ff9100",
                      "#a259e6",
                      "#2563eb",
                      "#e62386",
                    ],
                    borderColor: "#fff",
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: "right",
                    labels: {
                      color: '#333',
                      font: { size: 14 },
                    },
                  },
                  tooltip: { enabled: true },
                },
              }}
            />
          </div>
        </div>
        {/* Transactions Overview Chart */}
        <div className="bg-white rounded-xl shadow p-5 flex flex-col w-full min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 w-full">
            <span className="font-bold text-[#4C4C5C] text-[17px] leading-none">Transactions Overview</span>
            <select
              className="border border-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 bg-white focus:outline-none shadow-sm w-full sm:w-auto"
              value={txnRange}
              onChange={e => setTxnRange(e.target.value)}
            >
              {chartRanges.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-2 w-full flex-wrap">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center whitespace-nowrap">
              Account Balance: <span className="font-bold ml-1">$131.00</span> <span className="ml-1">(13 txn)</span>
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center whitespace-nowrap">
              Razorpay: <span className="font-bold ml-1">$35.00</span> <span className="ml-1">(4 txn)</span>
            </span>
          </div>
          <div className="h-64 w-full min-w-0">
            <Line
              data={{
                labels: transactionChartData[txnRange].labels,
                datasets: [
                  {
                    label: "Account Balance",
                    data: transactionChartData[txnRange].accountBalance,
                    borderColor: "#22c55e",
                    backgroundColor: "rgba(34,197,94,0.4)",
                    tension: 0.4,
                    pointRadius: 0,
                    fill: true,
                  },
                  {
                    label: "Razorpay",
                    data: transactionChartData[txnRange].razorpay,
                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37,99,235,0.4)",
                    tension: 0.4,
                    pointRadius: 0,
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                elements: {
                  line: { borderWidth: 2 },
                  point: { radius: 0 },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { color: '#bdbdbd', font: { size: 12 } },
                    grid: { color: '#f3f4f6' },
                  },
                  x: {
                    ticks: {
                      color: '#bdbdbd', font: { size: 12 }, autoSkip: false, maxRotation: 0, minRotation: 0,
                    },
                    grid: { display: false },
                  },
                },
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow p-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[#4C4C5C] text-[17px] leading-none">Recent Orders</span>
          <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Order ID</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Customer</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Service</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Date</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Status</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy recent orders data */}
              {/*
                { id: "ORD-1001", customer: "Amit Sharma", service: "Plumber", date: "17/07/2025", status: "Completed", amount: "₹500" },
                { id: "ORD-1002", customer: "Priya Singh", service: "Electrician", date: "17/07/2025", status: "Pending", amount: "₹350" },
                { id: "ORD-1003", customer: "Rahul Verma", service: "Carpenter", date: "16/07/2025", status: "Completed", amount: "₹800" },
                { id: "ORD-1004", customer: "Neha Gupta", service: "Painter", date: "16/07/2025", status: "Cancelled", amount: "₹0" },
                { id: "ORD-1005", customer: "Vikas Kumar", service: "Cleaning", date: "15/07/2025", status: "Completed", amount: "₹600" },
              */}
              { [
                { id: "ORD-1001", customer: "Amit Sharma", service: "Plumber", date: "17/07/2025", status: "Completed", amount: "₹500" },
                { id: "ORD-1002", customer: "Priya Singh", service: "Electrician", date: "17/07/2025", status: "Pending", amount: "₹350" },
                { id: "ORD-1003", customer: "Rahul Verma", service: "Carpenter", date: "16/07/2025", status: "Completed", amount: "₹800" },
                { id: "ORD-1004", customer: "Neha Gupta", service: "Painter", date: "16/07/2025", status: "Cancelled", amount: "₹0" },
                { id: "ORD-1005", customer: "Vikas Kumar", service: "Cleaning", date: "15/07/2025", status: "Completed", amount: "₹600" },
              ].map(order => (
                <tr key={order.id} className="border-b last:border-none">
                  <td className="px-4 py-2 font-medium text-gray-800">{order.id}</td>
                  <td className="px-4 py-2 text-gray-700">{order.customer}</td>
                  <td className="px-4 py-2 text-gray-700">{order.service}</td>
                  <td className="px-4 py-2 text-gray-700">{order.date}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === "Completed" ? "bg-green-100 text-green-700" : order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-semibold">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}