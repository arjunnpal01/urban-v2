import './globals.css';
import ClientLayout from './components/layout/ClientLayout';

export const metadata = {
  title: 'UrbanX',
  description: 'Urban services platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
