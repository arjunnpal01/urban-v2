'use client';

import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import BuyService from './BuyServices';
import Sidebar from '../sidebar/ElectricianSidebar';

const electricianServices = [
  { id: 1, title: 'Switch Installation', category: 'SwitchSocket', price: 120, imgSrc: '/images/switchboard.jpg', description: 'Install new switches in your home.' },
  { id: 2, title: 'Socket Installation', category: 'SwitchSocket', price: 130, imgSrc: '/images/socket-repair.jpg', description: 'Install new sockets for appliances.' },
  { id: 3, title: 'Switch/Socket Repair', category: 'SwitchSocket', price: 149, imgSrc: '/images/socket-repair.jpg', description: 'Repair faulty switches or sockets.' },

  { id: 4, title: 'Ceiling Fan Installation', category: 'Fan', price: 399, imgSrc: '/images/fan-install.jpg', description: 'Install a new ceiling fan safely.' },
  { id: 5, title: 'Fan Repair', category: 'Fan', price: 249, imgSrc: '/images/fan-repair.jpg', description: 'Fix non-working or noisy fans.' },
  { id: 6, title: 'Exhaust Fan Installation', category: 'Fan', price: 349, imgSrc: '/images/exhaust-fan.jpg', description: 'Install exhaust fans in kitchen/bathroom.' },

  { id: 7, title: 'LED Light Fitting', category: 'WallCeilingLight', price: 199, imgSrc: '/images/led-install.jpg', description: 'Install LED bulbs, panels, or strips.' },
  { id: 8, title: 'Tube Light Fitting', category: 'WallCeilingLight', price: 149, imgSrc: '/images/tubelight.jpg', description: 'Install or replace tube lights.' },
  { id: 9, title: 'Chandelier Installation', category: 'WallCeilingLight', price: 999, imgSrc: '/images/chandelier.jpg', description: 'Install decorative chandeliers.' },

  { id: 10, title: 'Wiring Issue Repair', category: 'Wiring', price: 499, imgSrc: '/images/wiring-repair.jpg', description: 'Fix short circuits or wiring faults.' },
  { id: 11, title: 'Appliance Wiring', category: 'Wiring', price: 399, imgSrc: '/images/appliance-wiring.jpg', description: 'Wiring for new appliances.' },

  { id: 12, title: 'Door Bell Installation', category: 'Doorbell', price: 129, imgSrc: '/images/doorbell.jpg', description: 'Install a new door bell.' },
  { id: 13, title: 'Door Bell Repair', category: 'Doorbell', price: 129, imgSrc: '/images/doorbell.jpg', description: 'Repair or replace door bell.' },
  { id: 14, title: 'Door Access System', category: 'Doorbell', price: 1199, imgSrc: '/images/door-access.jpg', description: 'Install/repair door access system.' },

  { id: 15, title: 'MCB Repair/Replacement', category: 'MCBSubmeter', price: 299, imgSrc: '/images/mcb-repair.jpg', description: 'Fix or replace MCBs in your panel.' },
  { id: 16, title: 'Submeter Installation', category: 'MCBSubmeter', price: 499, imgSrc: '/images/mcb-repair.jpg', description: 'Install or replace submeters.' },

  { id: 17, title: 'Inverter Installation', category: 'InverterStabiliser', price: 799, imgSrc: '/images/inverter.jpg', description: 'Install or replace home inverter.' },
  { id: 18, title: 'Stabilizer Installation', category: 'InverterStabiliser', price: 399, imgSrc: '/images/stabilizer.jpg', description: 'Install or repair voltage stabilizers.' },
  { id: 19, title: 'UPS Installation', category: 'InverterStabiliser', price: 699, imgSrc: '/images/ups.jpg', description: 'Install or replace UPS.' },

  { id: 20, title: 'Geyser Installation', category: 'Appliance', price: 499, imgSrc: '/images/geyser.jpg', description: 'Install or repair electric geyser.' },
];

// Group by category
const groupByCategory = (services) => {
  return services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});
};

export default function ElectricianPage() {
  const allServices = useMemo(() => groupByCategory(electricianServices), []);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sectionRefs = {
    SwitchSocket: useRef(null),
    Fan: useRef(null),
    WallCeilingLight: useRef(null),
    Wiring: useRef(null),
    Doorbell: useRef(null),
    MCBSubmeter: useRef(null),
    InverterStabiliser: useRef(null),
    Appliance: useRef(null),
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
