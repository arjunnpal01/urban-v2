import './globals.css';
import ClientLayout from './components/layout/ClientLayout';


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
