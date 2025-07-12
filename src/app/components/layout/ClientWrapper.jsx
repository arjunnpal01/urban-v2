'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // ✅ Hide header/footer on any path that starts with /admin or /dashboard
    const hidden = pathname.startsWith("/admin") || pathname.startsWith("/dashboard");
    setShowLayout(!hidden);
  }, [pathname]);

  return (
    <>
      {showLayout && <Navbar />}
      
      <div className="pt- md:pt- pb- md:pb-0 min-h-screen bg-white">
        {children}
      </div>
      
      {showLayout && <Footer />}
    </>
  );
}
