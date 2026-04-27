import type { Metadata } from "next";

import { doctorName, siteUrl } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      title,
      description,
      siteName: "hartlmd.net",
      images: [
        {
          url: "/img/Aboutme2.jpg",
          width: 1200,
          height: 630,
          alt: `${doctorName} - Spine Surgeon in New York`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/Aboutme2.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
