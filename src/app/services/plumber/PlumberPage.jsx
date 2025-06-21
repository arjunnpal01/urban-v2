"use client";

import { useRef, useMemo } from "react";
import PlumberSidebar from "../sidebar/PlumberSidebar";
import BuyService from "./BuyServices";
import { useSelector } from "react-redux";

const plumberServices = [
  { id: 1, title: "Bathroom Fitting", category: "BathroomFittings", price: 499, imgSrc: "/plumber1.jpg", description: "Expert installation and repair of bathroom fittings." },
  { id: 2, title: "Geyser Installation", category: "GeyserServices", price: 699, imgSrc: "/plumber2.avif", description: "Safe and reliable geyser installation services." },
  { id: 3, title: "Leak Repairs", category: "LeakRepairs", price: 299, imgSrc: "/plumber1.jpg", description: "Quick fixes for all types of plumbing leaks." },
  { id: 4, title: "Pipe Installation", category: "Installations", price: 799, imgSrc: "/plumber2.avif", description: "Professional pipe installation for homes and offices." },
  { id: 5, title: "Sink Installation", category: "TankSinkServices", price: 399, imgSrc: "/plumber1.jpg", description: "Install new sinks with expert precision." },
  { id: 6, title: "Toilet Repair", category: "BathroomFittings", price: 349, imgSrc: "/plumber2.avif", description: "Fast and affordable toilet repair services." },
  { id: 7, title: "Water Tank Cleaning", category: "TankSinkServices", price: 599, imgSrc: "/plumber1.jpg", description: "Ensure clean water with our tank cleaning service." },
  { id: 8, title: "Shower Installation", category: "BathroomFittings", price: 499, imgSrc: "/plumber2.avif", description: "Upgrade your bathroom with a new shower." },
  { id: 9, title: "Tap Replacement", category: "BathroomFittings", price: 199, imgSrc: "/plumber1.jpg", description: "Replace old taps with new, efficient models." },
  { id: 10, title: "Kitchen Plumbing", category: "Installations", price: 699, imgSrc: "/plumber2.avif", description: "Complete kitchen plumbing solutions." },
  { id: 11, title: "Drain Cleaning", category: "LeakRepairs", price: 299, imgSrc: "/plumber1.jpg", description: "Unclog and clean drains for smooth flow." },
  { id: 12, title: "Water Heater Repair", category: "GeyserServices", price: 499, imgSrc: "/plumber2.avif", description: "Repair and maintenance for all water heaters." },
  { id: 13, title: "Bathtub Installation", category: "BathroomFittings", price: 1499, imgSrc: "/plumber1.jpg", description: "Install a new bathtub in your bathroom." },
  { id: 14, title: "Sewer Line Repair", category: "LeakRepairs", price: 1999, imgSrc: "/plumber2.avif", description: "Repair broken or clogged sewer lines." },
  { id: 15, title: "Water Purifier Installation", category: "Installations", price: 799, imgSrc: "/plumber1.jpg", description: "Install water purifiers for clean drinking water." },
  { id: 16, title: "Pressure Pump Installation", category: "Installations", price: 1299, imgSrc: "/plumber2.avif", description: "Install pressure pumps for better water flow." },
  { id: 17, title: "Overhead Tank Repair", category: "TankSinkServices", price: 899, imgSrc: "/plumber1.jpg", description: "Repair and maintain overhead water tanks." },
  { id: 18, title: "Underground Pipe Repair", category: "Installations", price: 1599, imgSrc: "/plumber2.avif", description: "Fix leaks in underground pipes." },
  { id: 19, title: "Rainwater Harvesting Setup", category: "Installations", price: 2999, imgSrc: "/plumber1.jpg", description: "Install rainwater harvesting systems." },
  { id: 20, title: "Water Softener Installation", category: "TankSinkServices", price: 1299, imgSrc: "/plumber2.avif", description: "Install water softener for your home." },
];

// Group services by category
const groupByCategory = (services) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});
};

export default function PlumberPage() {
  const allServices = useMemo(() => groupByCategory(plumberServices), []);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Refs for scrolling
  const sectionRefs = {
    BathroomFittings: useRef(null),
    GeyserServices: useRef(null),
    LeakRepairs: useRef(null),
    Installations: useRef(null),
    TankSinkServices: useRef(null),
  };

  const handleScrollTo = (categoryKey) => {
    const ref = sectionRefs[categoryKey];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 fixed top-[64px] bottom-0 border-r bg-white z-40 overflow-y-auto">
          <PlumberSidebar onScrollTo={handleScrollTo} />
        </aside>

        <main className="flex-1 p-4 md:p-6 md:ml-64 space-y-16">
          {Object.entries(allServices).map(([section, services]) => (
            <section
              key={section}
              ref={sectionRefs[section]}
              id={section}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">{section}</h2>
              <BuyService services={services} />
            </section>
          ))}
        </main>
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 z-50 md:hidden flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-700">
              {cartItems.length} item{cartItems.length > 1 ? "s" : ""} selected
            </p>
            <p className="text-lg font-bold text-green-600">₹{totalPrice}</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
}