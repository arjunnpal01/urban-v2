'use client';

import ReduxProvider from '@/store/providers/ReduxProvider';
import ClientWrapper from './ClientWrapper';
import { LocationProvider } from '../location/LocationContext'; // ✅

export default function ClientLayout({ children }) {
  return (
    <ReduxProvider>
      <LocationProvider> {/* ✅ Wrap here */}
        <ClientWrapper>{children}</ClientWrapper>
      </LocationProvider>
    </ReduxProvider>
  );
}
