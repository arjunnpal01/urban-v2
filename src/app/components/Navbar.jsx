"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="md:hidden w-full bg-white shadow z-50 sticky top-0">
        <div className="flex items-center justify-between px-4 py-2">
          <LocationButton />
          <Link href="/cart" className="relative" aria-label="Cart">
            <AiOutlineShoppingCart className="text-[1.4rem]" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartItemCount}
            </span>
          </Link>
        </div>
        <div className="px-4 pb-4 mt-2">
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for ‘Facial’"
              className="pl-10 pr-4 py-2 w-full rounded-md border text-sm outline-none placeholder:text-gray-400"
              aria-label="Search"
            />
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <header className="hidden md:block w-full border-b bg-white z-50 h-16 sticky top-0">
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

            <div className="relative w-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for ‘Services’"
                className="pl-10 pr-4 py-2 rounded-md border text-sm outline-none w-full placeholder:text-gray-400"
                aria-label="Search"
              />
            </div>

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

            <Link href="/cart" className="relative" aria-label="Cart">
              <AiOutlineShoppingCart className="text-[1.4rem] text-gray-700 hover:text-black cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none" aria-label="Account">
                <FaRegUserCircle className="text-[1.35rem] text-gray-700 hover:text-black cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 ml-[-25px] bg-white shadow-md rounded z-50">
                <DropdownMenuLabel className="px-4 py-2 text-sm font-semibold">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Billing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* BOTTOM NAVBAR MOBILE */}
      <nav className="bottom-0 left-0 w-full bg-white border-t shadow flex justify-around items-center py-2 md:hidden fixed z-50">
        <Link
          href="/"
          className="flex flex-col items-center text-xs text-gray-700"
          aria-label="Home"
        >
          <HiHome className="text-xl" />
          Home
        </Link>
        <Link
          href="/bookings"
          className="flex flex-col items-center text-xs text-gray-700"
          aria-label="Services"
        >
          <RiServiceLine className="text-xl" />
          Services
        </Link>
        <Link
          href="/well"
          className="flex flex-col items-center text-xs text-gray-700"
          aria-label="Well"
        >
          <FiBell className="text-xl" />
          Well
        </Link>
        <Link
          href="/account"
          className="flex flex-col items-center text-xs text-gray-700"
          aria-label="Account"
        >
          <FaRegUserCircle className="text-xl" />
          Account
        </Link>
      </nav>
    </>
  );
}
