// src/app/layout.tsx
import './globals.css';
import '../lib/fontawesome';
import { ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hartlmd.net'),
  title: 'Roger Härtl, MD | Spine Surgeon, Neurosurgeon & Professor of Medicine',
  description:
    "Official website of Roger Härtl, M.D. — world-renowned spine surgeon, neurosurgeon, and professor of medicine at Weill Cornell Medicine. Specializing in minimally invasive spine surgery, spinal tumors, disc arthroplasty, sports-related spine injuries, and advanced neurological care.",
  keywords: [
    'Roger Härtl',
    'Dr. Roger Hartl',
    'spine surgeon',
    'neurosurgeon',
    'medical doctor',
    'medicine',
    'healthcare',
    'minimally invasive spine surgery',
    'spinal tumors',
    'disc replacement',
    'spinal care',
    'neurosurgery New York',
    'Weill Cornell Medicine',
    'Och Spine',
    'sports spine injuries',
  ],
  icons: {
    icon: '/img/Dr.Hartls.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.hartlmd.net/',
    title: 'Roger Härtl, MD | Spine Surgeon, Neurosurgeon & Professor of Medicine',
    description:
      "Medical doctor specializing in neurosurgery and spine health. Minimally invasive surgery, spinal care, and advanced treatment at Weill Cornell & NewYork-Presbyterian.",
    siteName: 'hartlmd.net',
    images: [{ url: '/img/Aboutme2.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roger Härtl, MD | Spine Surgeon & Neurosurgeon',
    description:
      "Healthcare, neurosurgery, and spine medicine. Expert in minimally invasive spine surgery, spinal tumors, and disc replacement at Weill Cornell Medicine.",
    images: ['/img/Aboutme2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        {/* Preload important images */}
        <link rel="preload" href="/img/Aboutme2.jpg" as="image" />
        <link rel="preload" href="/img/review5.jpeg" as="image" />
        <link rel="preload" href="/img/research.jpeg" as="image" />
      </body>
    </html>
  );
}
