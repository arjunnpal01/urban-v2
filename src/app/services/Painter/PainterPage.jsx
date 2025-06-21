'use client';

import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import BuyService from './buyServices';
import PainterSidebar from '../sidebar/PainterSidebar';

const painterServices = [
  { id: 1, title: "Wall Painting", category: "Wall", price: 899, imgSrc: "/painter1.jpg", description: "Interior wall painting with premium finish." },
  { id: 2, title: "Ceiling Painting", category: "Ceiling", price: 799, imgSrc: "/painter2.jpg", description: "Painting of ceiling areas with care." },
  { id: 3, title: "Exterior Painting", category: "Exterior", price: 1499, imgSrc: "/painter1.jpg", description: "Weatherproof and durable exterior painting." },
  { id: 4, title: "Wood Polishing", category: "Wood", price: 699, imgSrc: "/painter2.jpg", description: "Polish for wooden surfaces and furniture." },
  { id: 5, title: "Metal Painting", category: "Metal", price: 499, imgSrc: "/painter1.jpg", description: "Rust-resistant painting for metal parts." },
  { id: 6, title: "Wallpaper Installation", category: "Wall", price: 1199, imgSrc: "/painter2.jpg", description: "Professional wallpaper setup and design." },
];

const groupByCategory = (services) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});
};

export default function PainterPage() {
  const allServices = useMemo(() => groupByCategory(painterServices), []);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sectionRefs = {
    Wall: useRef(null),
    Ceiling: useRef(null),
    Exterior: useRef(null),
    Wood: useRef(null),
    Metal: useRef(null),
  };

  const handleScrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 fixed top-[64px] bottom-0 border-r bg-white z-40 overflow-y-auto">
          <PainterSidebar onScrollTo={handleScrollTo} />
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
