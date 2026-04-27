import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Honors and Awards | Roger Hartl, MD | Spine Surgeon in New York",
  description:
    "See honors, awards, leadership roles, and professional recognition for Roger Hartl, MD, spine surgeon and neurosurgeon in New York.",
  path: "/honors-awards",
});

export default function HonorsAwardsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
