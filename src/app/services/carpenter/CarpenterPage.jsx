'use client';

import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CarpenterSidebar from '../sidebar/CarpenterSidebar';
import BuyService from './BuyServices';

const carpenterServices = [
  { id: 1, title: 'Furniture Repair', category: 'Repair', price: 499, imgSrc: '/carpenter1.jpg', description: 'Fix broken furniture and fittings.' },
  { id: 2, title: 'Door Fitting', category: 'Installation', price: 799, imgSrc: '/carpenter2.jpg', description: 'Install new wooden doors securely.' },
  { id: 3, title: 'Window Repair', category: 'Repair', price: 599, imgSrc: '/carpenter1.jpg', description: 'Fix jammed or broken windows.' },
  { id: 4, title: 'Modular Kitchen Setup', category: 'Installation', price: 2499, imgSrc: '/carpenter2.jpg', description: 'Setup modular kitchen fittings.' },
  { id: 5, title: 'Custom Furniture Making', category: 'CustomWork', price: 3999, imgSrc: '/carpenter1.jpg', description: 'Build custom furniture on demand.' },
  { id: 6, title: 'Bed Assembly', category: 'Assembly', price: 699, imgSrc: '/carpenter2.jpg', description: 'Assemble your new beds and cots.' },
  { id: 7, title: 'Shelf Installation', category: 'Installation', price: 499, imgSrc: '/carpenter1.jpg', description: 'Wall-mounted or wooden shelf fitting.' },
  { id: 8, title: 'Table Assembly', category: 'Assembly', price: 399, imgSrc: '/carpenter2.jpg', description: 'Assemble office or home tables.' },
  { id: 9, title: 'Wardrobe Repair', category: 'Repair', price: 799, imgSrc: '/carpenter1.jpg', description: 'Fix hinges, doors, and more.' },
  { id: 10, title: 'False Ceiling Work', category: 'CustomWork', price: 2999, imgSrc: '/carpenter2.jpg', description: 'Custom wooden false ceiling jobs.' },
];

const groupByCategory = (services) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});
};

export default function CarpenterPage() {
  const allServices = useMemo(() => groupByCategory(carpenterServices), []);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sectionRefs = {
    Repair: useRef(null),
    Installation: useRef(null),
    CustomWork: useRef(null),
    Assembly: useRef(null),
  };

  const handleScrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 fixed top-[64px] bottom-0 border-r bg-white z-40 overflow-y-auto">
          <CarpenterSidebar onScrollTo={handleScrollTo} />
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
