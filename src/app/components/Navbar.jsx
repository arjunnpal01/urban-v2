"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import SearchBar from "../components/search/SearchBar";

const LocationButton = dynamic(() => import("./location/LocationButton"), {
  ssr: false,
});

export default function Navbar() {
  const items = useSelector((state) => state.cart.items || []);
  const cartItemCount = items.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const notificationCount = 1;
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileTop, setShowMobileTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowMobileTop(currentY < 10 || currentY < lastScrollY);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ✅ MOBILE NAVBAR TOP */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50 w-full bg-white">
        <div className="flex items-center justify-between px-4 pt-2">
          <LocationButton />
          <Link href="/cart" className="relative" aria-label="Cart">
            <AiOutlineShoppingCart className="text-[1.4rem]" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartItemCount}
            </span>
          </Link>
        </div>
        <div className="px-4 pb-3">
          <SearchBar isMobile />
        </div>
      </div>

      {/* ✅ DESKTOP NAVBAR */}
      <header className="hidden md:block w-full bg-white z-50 h-16 fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 font-semibold text-lg">
              <span className="text-2xl font-bold">▲</span>
              <span>
                urban<span className="text-xs align-top">x</span>
              </span>
            </div>
            <nav className="flex space-x-8 text-gray-600 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <LocationButton />
            <div className="w-60">
              <SearchBar />
            </div>

            {/* 🔔 Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none relative" aria-label="Notifications">
                <FiBell className="text-[1.3rem] text-gray-700 hover:text-black cursor-pointer" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 ml-[-80px] w-60 bg-white shadow-md rounded z-50">
                <DropdownMenuLabel className="px-4 py-2 text-sm font-semibold">
                  Notifications
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  ✅ Your booking is confirmed!
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 🛒 Cart */}
            <Link href="/cart" className="relative" aria-label="Cart">
              <AiOutlineShoppingCart className="text-[1.4rem] text-gray-700 hover:text-black cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            </Link>

            {/* 👤 Account/Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none" aria-label="Account">
                <FaRegUserCircle className="text-[1.35rem] text-gray-700 hover:text-black cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 ml-[-25px] bg-white shadow-md rounded z-50">
                {!isLoggedIn ? (
                  <DropdownMenuItem
                    onClick={() => router.push("/login")}
                    className="px-4 py-2 cursor-pointer"
                  >
                    Login
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuLabel className="px-4 py-2 text-sm">
                      Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Help Center
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        localStorage.removeItem("token");
                        setIsLoggedIn(false);
                        router.refresh();
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    >
                      Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* ✅ Sticky Horizontal Border */}
      <div className="hidden md:block fixed top-16 left-0 right-0 h-px bg-gray-200 z-40" />

      {/* ✅ MOBILE NAVBAR BOTTOM */}
      <nav className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-2 md:hidden z-50">
        <Link href="/" className="flex flex-col items-center text-xs text-gray-700" aria-label="Home">
          <HiHome className="text-xl mb-0" />
          Home
        </Link>
        <Link href="/bookings" className="flex flex-col items-center text-xs text-gray-700" aria-label="Services">
          <RiServiceLine className="text-xl mb-0" />
          Services
        </Link>
        <Link href="/well" className="flex flex-col items-center text-xs text-gray-700" aria-label="Well">
          <FiBell className="text-xl mb-0" />
          Well
        </Link>
        <Link href="/account" className="flex flex-col items-center text-xs text-gray-700" aria-label="Account">
          <FaRegUserCircle className="text-xl mb-0" />
          Account
        </Link>
      </nav>
    </>
  );
}
