import './globals.css'; // Your global styles
import '../lib/fontawesome'; // Import Font Awesome configuration
import { ReactNode } from 'react';
import Head from 'next/head'; // Import Head from next/head
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false

export const metadata = {
  title: 'Dr. Roger Härtl',
  description: 'Dr. Roger Härtl website',
  icon:'/img/Dr.Hartls.png'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        {/* Preload images */}
        <link rel="preload" href="/img/Aboutme2.jpg" as="image" />
        <link rel="preload" href="/img/review5.jpeg" as="image" />
        <link rel="preload" href="/img/research.jpeg" as="image" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
