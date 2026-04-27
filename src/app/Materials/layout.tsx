import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Patient Information | Roger Hartl, MD | Spine Surgery Resources",
  description:
    "Browse patient information, spine surgery guides, recovery resources, referrals, imaging instructions, and educational materials from Roger Hartl, MD.",
  path: "/Materials",
});

export default function MaterialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
