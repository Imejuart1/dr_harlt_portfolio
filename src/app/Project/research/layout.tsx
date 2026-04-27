import type { ReactNode } from "react";

import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Biological Spine Research | Roger Hartl, MD",
  description:
    "Learn about biological spine research, disc regeneration, and innovative spinal treatments led by Roger Hartl, MD.",
  path: "/Project/research",
});

export default function ProjectResearchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
