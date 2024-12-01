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
  title: 'Dr. Roger Hartl',
  description: 'Roger Hartl, M.D., is the Hansen-MacDonald Professor of Neurological Surgery, Director of Spinal Surgery at Weill Cornell Medicine, and Neurosurgical Director of Och Spine. He also serves as the official neurosurgeon for the New York Giants and leads Weill Cornell\'s Global Neurosurgery Initiative in Tanzania.',
  icon: '/img/Dr.Hartls.png'
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
