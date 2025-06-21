'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import BuyService from './BuyServices';
import Sidebar from '../sidebar/ACSidebar';

const allServices = {
  Service: [
    {
      id: 1,
      title: "Foam-jet AC service",
      description: "Dust-free filters & better airflow",
      price: 599,
      imgSrc: "/images/ac-cleaning.jpg",
      alt: "AC Cleaning",
      category: "ac",
      rating: 4.7,
      reviews: "1.5K",
      duration: "60 mins",
    },
    {
      id: 2,
      title: "AC Gas Top-up",
      description: "Refill AC gas for optimal cooling",
      price: 799,
      imgSrc: "/images/ac-gas.jpg",
      alt: "AC Gas Top-up",
      category: "ac",
      rating: 4.5,
      reviews: "1.2K",
      duration: "45 mins",
    },
    {
      id: 3,
      title: "AC Deep Cleaning",
      description: "Comprehensive cleaning for better performance",
      price: 999,
      imgSrc: "/images/ac-deep.jpg",
      alt: "AC Deep Cleaning",
      category: "ac",
      rating: 4.8,
      reviews: "2K",
      duration: "90 mins",
    },
    {
      id: 4,
      title: "AC Filter Replacement",
      description: "Replace old filters for fresh air",
      price: 299,
      imgSrc: "/images/ac-filter.jpg",
      alt: "AC Filter Replacement",
      category: "ac",
      rating: 4.6,
      reviews: "900",
      duration: "30 mins",
    },
  ],
  Repair: [
    {
      id: 5,
      title: "AC not cooling",
      description: "Fix cooling issues",
      price: 299,
      imgSrc: "/images/nocool.jpg",
      alt: "Cooling Repair",
      category: "ac",
      rating: 4.6,
      reviews: "1.1K",
      duration: "45 mins",
    },
    {
      id: 6,
      title: "AC Water Leakage",
      description: "Repair water leakage problems",
      price: 399,
      imgSrc: "/images/ac-leak.jpg",
      alt: "Water Leakage",
      category: "ac",
      rating: 4.4,
      reviews: "800",
      duration: "40 mins",
    },
    {
      id: 7,
      title: "AC Noise Issue",
      description: "Resolve noise and vibration issues",
      price: 349,
      imgSrc: "/images/ac-noise.jpg",
      alt: "Noise Issue",
      category: "ac",
      rating: 4.5,
      reviews: "950",
      duration: "35 mins",
    },
    {
      id: 8,
      title: "AC Remote Repair",
      description: "Fix or replace faulty AC remote",
      price: 199,
      imgSrc: "/images/ac-remote.jpg",
      alt: "Remote Repair",
      category: "ac",
      rating: 4.3,
      reviews: "600",
      duration: "20 mins",
    },
  ],
  Installation: [
    {
      id: 9,
      title: "Split AC install",
      description: "Wall-mounted AC setup",
      price: 1499,
      imgSrc: "/images/split.jpg",
      alt: "Split Install",
      category: "ac",
      rating: 4.8,
      reviews: "2K",
      duration: "2 hrs",
    },
    {
      id: 10,
      title: "Window AC install",
      description: "Window AC installation service",
      price: 1299,
      imgSrc: "/images/window-ac.jpg",
      alt: "Window AC Install",
      category: "ac",
      rating: 4.7,
      reviews: "1.3K",
      duration: "1.5 hrs",
    },
    {
      id: 11,
      title: "AC Uninstallation",
      description: "Remove your AC safely",
      price: 699,
      imgSrc: "/images/ac-uninstall.jpg",
      alt: "AC Uninstallation",
      category: "ac",
      rating: 4.6,
      reviews: "1K",
      duration: "1 hr",
    },
    {
      id: 12,
      title: "AC Relocation",
      description: "Relocate your AC to a new place",
      price: 1799,
      imgSrc: "/images/ac-relocate.jpg",
      alt: "AC Relocation",
      category: "ac",
      rating: 4.7,
      reviews: "700",
      duration: "2.5 hrs",
    },
  ],
};

export default function AcRepairPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sectionRefs = {
    Service: useRef(null),
    Repair: useRef(null),
    Installation: useRef(null),
  };

  const handleScrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 fixed top-[64px] bottom-0 border-r bg-white z-40 overflow-y-auto">
          <Sidebar onScrollTo={handleScrollTo} />
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
              {cartItems.length} item{cartItems.length > 1 ? 's' : ''} selected
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