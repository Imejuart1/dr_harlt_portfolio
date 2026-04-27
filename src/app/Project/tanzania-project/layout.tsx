import type { ReactNode } from "react";

import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Global Neurosurgery in Tanzania | Roger Hartl, MD",
  description:
    "See how Roger Hartl, MD has advanced global neurosurgery training, education, and care in Tanzania.",
  path: "/Project/tanzania-project",
});

export default function TanzaniaProjectLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
