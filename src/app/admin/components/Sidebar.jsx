"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, LogOut, PhoneCall } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Package,
  MapPin,
  Settings2,
  Folders,
  Map,
  BadgeIndianRupee
} from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/auth/firestore/firebase";

export default function Sidebar() {
  const router = useRouter();
  // Prefetch important routes for instant navigation
  useEffect(() => {
    router.prefetch('/admin/files');
    router.prefetch('/admin/services');
  }, [router]);
  const [openMenus, setOpenMenus] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };


  // Sidebar menu routes (moved from adminRoutes.js)
  const MenuList = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      subItems: [], // Removed 'Main Dashboard' from Dashboard submenu
    },
    {
      name: "Orders",
      icon: <Package className="h-5 w-5" />,
      subItems: [
        { name: "All Orders", link: "/admin/orders" },
        { name: "Pending Orders", link: "/admin/orders?status=pending" },
        { name: "Completed Orders", link: "/admin/orders?status=completed" },
      ],
    },
    {
      name: "Users",
      icon: <Users className="h-5 w-5" />,
      subItems: [
        { name: "All Users", link: "/admin/users" },
      ],
    },
    {
      name: "Services",
      icon: <img src="/customer-support.png" alt="services" className="w-5 h-5 mr-1 semi-bold" />,
      subItems: [
        { name: "All Services", link: "/admin/services" },
      ],
    },
    {
      name: "Files",
      icon: <Folders className="h-5 w-5" />,
      subItems: [
        { name: "Uploaded Files", link: "/admin/files" },
      ],
    },
    {
      name: "Agents / Technicians",
      icon: <Map className="h-5 w-5" />,
      subItems: [
        { name: "All Technicians", link: "/admin/agents" },
      ],
    },
    {
      name: "Payments",
      icon: <BadgeIndianRupee className="h-5 w-5" />,
      subItems: [
        { name: "Transactions", link: "/admin/payments" },
      ],
    },
    {
      name: "Packages",
      icon: <Package className="h-5 w-5" />,
      subItems: [
        { name: "Service Packages", link: "/admin/packages" },
      ],
    },
    {
      name: "Reports",
      icon: <img src="/icons-report.png" alt="reports" className="w-5 h-5 mr-1 semi-bold" />,
      subItems: [
        { name: "User Reports", link: "/admin/reports" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings2 className="h-5 w-5" />,
      subItems: [
        { name: "App Settings", link: "/admin/settings" },
      ],
    },
    {
      name: "Location Manager",
      icon: <MapPin className="h-5 w-5" />,
      subItems: [
        { name: "All Locations", link: "/admin/locations" },
      ],
    },
  ];

  // Sidebar content as a component for reuse
  const SidebarContent = (
    <>
      <div className="flex justify-center mb-10">
        <img src="/globe.svg" className="h-8" alt="Logo" />
      </div>

      <ul className="space-y-3">
        {MenuList.map((item, idx) => {
          const isActive = item.name === "Dashboard";
          return (
            <li key={item.name}>
              {item.name === "Dashboard" ? (
                <Link
                  href="/admin"
                  prefetch={true}
                  className={`flex items-center px-2 py-2 rounded-md font-barlow font-medium text-[14px] leading-[14px] transition-all duration-150 cursor-pointer w-full
                    ${isActive ? "bg-blue-50 text-[#167DCD]" : "text-[#9ba6b7] hover:bg-blue-100 hover:text-[#167DCD]"}`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </Link>
              ) : (
                <>
                  <div
                    className={`flex justify-between items-center px-2 py-2 cursor-pointer rounded-md font-barlow font-medium text-[14px] leading-[14px] transition-all duration-150
                      ${isActive ? "bg-blue-50 text-[#167DCD]" : "text-[#9ba6b7] hover:bg-blue-100 hover:text-[#167DCD]"}`}
                    onClick={() => toggleMenu(item.name)}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {/* Only show chevron for non-Dashboard and non-Orders items */}
                    {item.subItems.length > 0 && item.name !== "Dashboard" && item.name !== "Orders" &&
                      (openMenus[item.name] ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </div>

                  {item.subItems.length > 0 && openMenus[item.name] && (
                    <ul className={`ml-9 mt-1 ${item.name === "Orders" ? "space-y-3 text-[14px]" : "space-y-2 text-sm"} text-gray-600 font-normal`}>
                      {item.subItems.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.link}
                            prefetch={true}
                            className={`hover:text-[#167DCD] transition-all font-barlow ${item.name === "Orders" ? "py-1" : ""}`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          );
        })}
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
    </>
  );

  return (
    <aside className="sticky left-0 top-0 z-40 h-screen w-64 bg-white border-r">
      <div className="h-full">{SidebarContent}</div>
    </aside>
  );
}