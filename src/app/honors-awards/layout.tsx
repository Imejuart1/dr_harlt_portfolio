import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Honors and Awards | Roger Härtl, MD | Spine Surgeon in New York",
  description:
    "See honors, awards, leadership roles, and professional recognition for Roger Härtl, MD, spine surgeon and neurosurgeon in New York.",
  path: "/honors-awards",
});

export default function HonorsAwardsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

