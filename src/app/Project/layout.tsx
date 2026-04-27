import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Projects and Research | Roger Hartl, MD | Spine Surgery Innovation",
  description:
    "Explore research, global health, physician education, and innovation projects led by Roger Hartl, MD.",
  path: "/Project",
});

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return children;
}
