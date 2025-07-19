"use client";
// import { useState } from "react";
// import { Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <section className="fixed top-0 w-full flex item-center gap-3 bg-white border-b px-4 py-4">
      <div className="flex justify-center item-center md:hidden ">
        <button onClick={toggleSidebar}>
          {/* <Menu /> */}
        </button>
      </div>
      <h1 className="text-xl font-semibold">Dashboard arjun</h1>
    </section>
  );
}
