import "./globals.css";
import "../lib/fontawesome";
import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RecaptchaProvider from "../components/RecaptchaProvider";
import type { Metadata, Viewport } from "next";

import { doctorName, siteUrl } from "../lib/site";

config.autoAddCss = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Roger Hartl, MD | Spine Surgeon in New York | Weill Cornell Medicine",
    template: `%s | ${doctorName}`,
  },
  description:
    "Roger Hartl, MD is a spine surgeon and neurosurgeon in New York at Och Spine, NewYork-Presbyterian, and Weill Cornell Medicine. Explore patient reviews, contact information, spine surgery resources, research, and news.",
  keywords: [
    "Roger Hartl MD",
    "spine surgeon in New York",
    "neurosurgeon in NYC",
    "Weill Cornell spine surgeon",
    "best spine surgeon New York",
    "minimally invasive spine surgery",
    "cervical disc replacement",
    "spinal tumors",
    "New York spine surgery",
    "Weill Cornell Medicine",
    "Och Spine",
    "Dr. Roger Hartl",
  ],
  formatDetection: { telephone: true, address: false, email: false },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: [
      { url: "/img/Dr.Hartls.png" },
      { url: "/favicon.ico", rel: "icon", sizes: "any" },
    ],
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title: "Roger Hartl, MD | Spine Surgeon in New York",
    description:
      "Spine surgeon and neurosurgeon in New York at Och Spine, NewYork-Presbyterian, and Weill Cornell Medicine.",
    siteName: "hartlmd.net",
    images: [
      {
        url: "/img/Aboutme2.jpg",
        width: 1200,
        height: 630,
        alt: "Roger Hartl, MD - Spine Surgeon in New York",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Hartl, MD | Spine Surgeon in New York",
    description:
      "Spine surgery, neurosurgery, cervical disc replacement, and complex spinal care in New York.",
    images: ["/img/Aboutme2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <RecaptchaProvider>
          <Header />
          {children}
          <Footer />
        </RecaptchaProvider>
        <link rel="preload" href="/img/Aboutme2.jpg" as="image" />
        <link rel="preload" href="/img/review5.jpeg" as="image" />
        <link rel="preload" href="/img/research.jpeg" as="image" />
      </body>
    </html>
  );
}
