// src/app/layout.tsx
import './globals.css'; // Your global styles
import '../lib/fontawesome'; // Import Font Awesome configuration
import { ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Mediz Medical Center',
  description: 'Medical center website',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
     
      <body>  
        <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
