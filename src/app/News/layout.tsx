import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Roger Härtl, MD News and Podcasts | Spine Surgeon in New York",
  description:
    "Explore news, podcast appearances, interviews, and media coverage featuring Roger Härtl, MD, spine surgeon in New York.",
  path: "/News",
});

export default function NewsLayout({ children }: { children: ReactNode }) {
  return children;
}

