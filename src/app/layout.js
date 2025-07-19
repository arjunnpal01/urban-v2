
import './globals.css';
import ClientLayout from './components/layout/ClientLayout';

// Enable MSW mocking only if NEXT_PUBLIC_API_MOCKING is set to 'true' in .env.local
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
      
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
