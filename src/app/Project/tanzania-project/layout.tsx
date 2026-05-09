import type { ReactNode } from "react";

import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Global Neurosurgery in Tanzania | Roger Härtl, MD",
  description:
    "See how Roger Härtl, MD has advanced global neurosurgery training, education, and care in Tanzania.",
  path: "/Project/tanzania-project",
});

export default function TanzaniaProjectLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

