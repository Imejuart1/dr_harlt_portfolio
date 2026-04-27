import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "About Roger Hartl, MD | Spine Surgeon and Neurosurgeon in New York",
  description:
    "Learn about Roger Hartl, MD, spine surgeon and neurosurgeon at Weill Cornell Medicine and NewYork-Presbyterian in New York.",
  path: "/Bio",
});

export default function BioLayout({ children }: { children: ReactNode }) {
  return children;
}
