// src/app/layout.tsx
import "./globals.css";
import "../lib/fontawesome";
import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RecaptchaProvider from "../components/RecaptchaProvider";
config.autoAddCss = false;

import type { Metadata, Viewport } from "next";

/** Mobile viewport + iOS phone-number detection */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

/** Site-wide SEO */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.hartlmd.net"),
  title: {
    default: "Roger Härtl, MD | Spine Surgeon, Neurosurgeon & Professor of Medicine",
    template: "%s | Roger Härtl, MD",
  },
  description:
    "Official website of Roger Härtl, MD — spine surgeon and neurosurgeon at Weill Cornell Medicine & NewYork-Presbyterian. Minimally invasive spine surgery, disc replacement, spinal tumors, and complex deformity care.",
  keywords: [
    "spine surgeon",
    "neurosurgeon",
    "spine surgery",
    "minimally invasive spine surgery",
    "cervical disc replacement",
    "spinal tumors",
    "New York",
    "Weill Cornell Medicine",
    "Och Spine",
    "Roger Härtl",
    "Dr. Roger Hartl",
  ],
  /** Replace with your actual verification tokens when you have them */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION",
    yandex: "",
    other: { "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION" },
  },
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
    apple: [{ url: "/apple-touch-icon.png" }], // add file if you have it
  },
  openGraph: {
    type: "website",
    url: "https://www.hartlmd.net/",
    title: "Roger Härtl, MD | Spine Surgeon, Neurosurgeon & Professor of Medicine",
    description:
      "Minimally invasive spine surgery, disc replacement, spinal tumor care, and complex deformity surgery at Weill Cornell Medicine & NewYork-Presbyterian.",
    siteName: "hartlmd.net",
    images: [
      {
        url: "/img/Aboutme2.jpg",
        width: 1200,
        height: 630,
        alt: "Roger Härtl, MD — Spine Surgeon & Neurosurgeon",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Härtl, MD | Spine Surgeon & Neurosurgeon",
    description:
      "Spine surgery, neurosurgery, cervical disc replacement, and complex spinal care in New York.",
    images: ["/img/Aboutme2.jpg"],
    // creator: "@YourTwitterHandle", // add if you have one
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
        {/* If you keep these preloads, make sure the files exist.
           Note: In Next.js, best practice is to use <Image priority /> on your hero images. */}
        <link rel="preload" href="/img/Aboutme2.jpg" as="image" />
        <link rel="preload" href="/img/review5.jpeg" as="image" />
        <link rel="preload" href="/img/research.jpeg" as="image" />
      </body>
    </html>
  );
}
