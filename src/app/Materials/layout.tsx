import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Patient Information | Roger Härtl, MD | Spine Surgery Resources",
  description:
    "Browse patient information, spine surgery guides, recovery resources, referrals, imaging instructions, and educational materials from Roger Härtl, MD.",
  path: "/Materials",
});

export default function MaterialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

