import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Support Roger Härtl, MD | Global Neurosurgery and Spine Research",
  description:
    "Support Roger Härtl, MD and his work in global neurosurgery, spine research, education, and patient care.",
  path: "/Gratitude",
});

export default function GratitudeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

