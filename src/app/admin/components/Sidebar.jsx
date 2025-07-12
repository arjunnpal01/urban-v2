"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeIndianRupee,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Users,
  Package,
  MapPin,
  Settings2,
  Folders,
  GalleryVerticalEnd,
  Map,
  PhoneCall,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/auth/firestore/firebase";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const MenuList = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      subItems: [
        { name: "Main Dashboard", link: "/admin" },
        { name: "Active Users", link: "/admin/dashboard/active-users" },
        { name: "Revenue", link: "/admin/dashboard/revenue" },
      ],
    },
    {
      name: "Orders",
      icon: <Package className="h-5 w-5" />,
      subItems: [
        { name: "All Bookings", link: "/admin/orders" },
        // { name: "Pending", link: "/admin/orders/pending" },
      ],
    },
    {
      name: "Users",
      icon: <Users className="h-5 w-5" />,
      subItems: [
        { name: "All Users", link: "/admin/users" },
        // { name: "Premium", link: "/admin/users/premium" },
      ],
    },
    {
      name: "Services",
      icon: (
        <img
          src="/customer-support.png"
          alt="services"
          className="w-5 h-5 mr-1 semi-bold"
        />
      ),
      subItems: [
        { name: "All Services", link: "/admin/services/all" },
     
       ],
    },
    {
      name: "Files",
      icon: <Folders className="h-5 w-5" />,
      subItems: [
        { name: "Uploaded Files", link: "/admin/files" },
        // { name: "Banners", link: "/admin/files/banners" },
      ],
    },
    {
      name: "Agents / Technicians",
      icon: <Map className="h-5 w-5" />,
      subItems: [
        { name: "All Technicians", link: "/admin/agents" },
        // { name: "Verify", link: "/admin/technicians/verify" },
      ],
    },
    {
      name: "Payments",
      icon: <BadgeIndianRupee className="h-5 w-5" />,
      subItems: [
        { name: "Transactions", link: "/admin/payments" },
        // { name: "Refunds", link: "/admin/payments/refunds" },
      ],
    },
    {
      name: "Packages",
      icon: <Package className="h-5 w-5" />,
      subItems: [
        { name: "Service Packages", link: "/admin/packages" },
        // { name: "Subscriptions", link: "/admin/packages/subscriptions" },
      ],
    },
    {
      name: "Content",
      icon: <GalleryVerticalEnd className="h-5 w-5" />,
      subItems: [
        { name: "Banners", link: "/admin/content/banners" },
        // { name: "FAQs", link: "/admin/content/faqs" },
      ],
    },
    {
      name: "Reports",
      icon: (
        <img
          src="/icons-report.png"
          alt="reports"
          className="w-5 h-5 mr-1 semi-bold"
        />
      ),
      subItems: [
        { name: "User Reports", link: "/admin/reports" },
        // { name: "Revenue", link: "/admin/reports/revenue" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings2 className="h-5 w-5" />,
      subItems: [
        { name: "App Settings", link: "/admin/settings" },
        // { name: "Permissions", link: "/admin/settings/permissions" },
      ],
    },
    {
      name: "Location Manager",
      icon: <MapPin className="h-5 w-5" />,
      subItems: [
        { name: "All Locations", link: "/admin/locations" },
        // { name: "Add New", link: "/admin/locations/add" },
      ],
    },
    {
      name: "Support",
      icon: <PhoneCall className="h-5 w-5" />,
      subItems: [
        { name: "Tickets", link: "/admin/support" },
        // { name: "Chat Logs", link: "/admin/support/chats" },
      ],
    },
  ];

  return (
    <aside className="h-screen w-[260px] bg-white border-r px-4 py-6 text-[15px] ">
      <div className="flex justify-center mb-10">
        <img src="/globe.svg" className="h-8" alt="Logo" />
      </div>

      <ul className="space-y-3">
        {MenuList.map((item) => (
          <li key={item.name}>
            <div
              className="flex justify-between items-center px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md text-gray-700 font-semibold transition-all"
              onClick={() => toggleMenu(item.name)}
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
              {item.subItems.length > 0 &&
                (openMenus[item.name] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                ))}
            </div>

            {item.subItems.length > 0 && openMenus[item.name] && (
              <ul className="ml-9 mt-1 space-y-2 text-sm text-gray-600 font-normal">
                {item.subItems.map((sub, idx) => (
                  <li key={idx}>
                    <Link
                      href={sub.link}
                      className="hover:text-black transition-all"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <hr className="my-4" />

      <div className="flex items-center px-2 space-x-2 text-gray-700">
        <LogOut className="w-5 h-5" />
        <button
          onClick={async () => {
            try {
              await toast.promise(signOut(auth), {
                loading: "Logging out...",
                success: "Successfully logged out",
                error: (err) => err?.message || "Logout failed",
              });
            } catch (error) {
              toast.error(error?.message || "Something went wrong");
            }
          }}
          className="text-sm hover:underline"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
