// src/app/layout.tsx
import './globals.css'; // Your global styles
import '../lib/fontawesome'; // Import Font Awesome configuration
import { ReactNode } from 'react';

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
      <body>{children}</body>
    </html>
  );
}
