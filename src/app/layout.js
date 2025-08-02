import './globals.css';
import ClientLayout from './components/layout/ClientLayout';
import { AuthProvider } from '@/contexts/AuthContext'; // ✅ Add this

if (
  process.env.NODE_ENV === 'development' &&
  process.env.NEXT_PUBLIC_API_MOCKING === 'true'
) {
  import('./mocks');
}

export const metadata = {
  title: 'UrbanX',
  description: 'Urban services platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body className="overflow-x-hidden w-full">
        <AuthProvider> {/* ✅ Wrap for login context */}
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
