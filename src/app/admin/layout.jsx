"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Auto-close sidebar on route/path change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function hanndleClickOutsideEvent(event) {
        if (sidebarRef.current && ! sidebarRef?.current?.contains(event.target)) {
            setIsOpen(false);
        }
    }
        document.addEventListener("mousedown", hanndleClickOutsideEvent);


  }, []);

  return (
    <main className="relative flex h-100vh overflow-auto left-0 " style={{ fontFamily: 'Barlow, sans-serif' }}>
      {/* Desktop Sidebar */}
      <div className="hidden md:block ">
        <Sidebar />
      </div>
     

      {/* Mobile Sidebar */}
      <div
        className={`sticky top-0 h-full transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-[260px]"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <section className=" flex-1 flex flex-col min-h-screen w-full">
        <Header toggleSidebar={toggleSidebar} />
        <section className=" flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}
