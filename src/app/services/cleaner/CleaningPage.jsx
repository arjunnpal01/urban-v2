'use client';

import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import BuyService from './BuyServices';
import CleaningSidebar from '../sidebar/CleaningSidebar';

const cleaningServices = [
  { id: 1, title: 'Bathroom Deep Cleaning', category: 'HomeCleaning', price: 499, imgSrc: '/images/bathroom.jpg', description: 'Thorough cleaning of bathroom including tiles, WC, basin and floor.' },
  { id: 2, title: 'Kitchen Deep Cleaning', category: 'HomeCleaning', price: 799, imgSrc: '/images/kitchen.jpg', description: 'Includes cleaning of slabs, tiles, cabinets and appliances.' },
  { id: 3, title: 'Sofa Shampooing', category: 'FurnishingCleaning', price: 999, imgSrc: '/images/sofa.jpg', description: 'Deep cleaning and stain removal for all types of sofas.' },
  { id: 4, title: 'Carpet Cleaning', category: 'FurnishingCleaning', price: 599, imgSrc: '/images/carpet.jpg', description: 'Remove dust, allergens and stains from carpets.' },
  { id: 5, title: 'Mattress Cleaning', category: 'FurnishingCleaning', price: 699, imgSrc: '/images/mattress.jpg', description: 'Sanitize and clean your mattresses thoroughly.' },
  { id: 6, title: 'Home Full Deep Cleaning', category: 'FullHome', price: 2499, imgSrc: '/images/home-clean.jpg', description: 'Top-to-bottom deep cleaning for the entire house.' },
  { id: 7, title: 'Window Glass Cleaning', category: 'SpecialCleaning', price: 299, imgSrc: '/images/window.jpg', description: 'Sparkling clean window glasses and frames.' },
  { id: 8, title: 'Fridge Cleaning', category: 'ApplianceCleaning', price: 199, imgSrc: '/images/fridge.jpg', description: 'Interior and exterior cleaning of refrigerator.' },
  { id: 9, title: 'Microwave Cleaning', category: 'ApplianceCleaning', price: 149, imgSrc: '/images/microwave.jpg', description: 'Remove grease and odor from microwave interiors.' },
  { id: 10, title: 'Balcony Cleaning', category: 'SpecialCleaning', price: 399, imgSrc: '/images/balcony.jpg', description: 'Cleaning of floor, railing and furniture in balcony.' },
];

const groupByCategory = (services) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});
};

export default function CleaningPage() {
  const allServices = useMemo(() => groupByCategory(cleaningServices), []);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sectionRefs = {
    HomeCleaning: useRef(null),
    FurnishingCleaning: useRef(null),
    FullHome: useRef(null),
    ApplianceCleaning: useRef(null),
    SpecialCleaning: useRef(null),
  };

  const handleScrollTo = (key) => {
    const ref = sectionRefs[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 fixed top-[64px] bottom-0 border-r bg-white z-40 overflow-y-auto">
          <CleaningSidebar onScrollTo={handleScrollTo} />
        </aside>

        <main className="flex-1 p-4 md:p-6 md:ml-64 space-y-16">
          {Object.entries(allServices).map(([section, services]) => (
            <section
              key={section}
              ref={sectionRefs[section]}
              id={section}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">{section.replace(/([A-Z])/g, ' $1')}</h2>
              <BuyService services={services} />
            </section>
          ))}
        </main>
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 z-50 md:hidden flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-700">{cartItems.length} item(s) selected</p>
            <p className="text-lg font-bold text-green-600">₹{totalPrice}</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">View Cart</button>
        </div>
      )}
    </div>
  );
}
