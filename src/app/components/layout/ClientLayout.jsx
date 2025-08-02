'use client';


import ReduxProvider from '@/store/providers/ReduxProvider';
import ClientWrapper from './ClientWrapper';
import { LocationProvider } from '../location/LocationContext';
import ReactQueryProvider from './ReactQueryProvider';

export default function ClientLayout({ children }) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <LocationProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </LocationProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
}
