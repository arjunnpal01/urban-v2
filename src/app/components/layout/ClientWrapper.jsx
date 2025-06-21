'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const hiddenPaths = ['/cart', '/checkout'];
    setShowLayout(!hiddenPaths.includes(pathname));
  }, [pathname]);

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}
