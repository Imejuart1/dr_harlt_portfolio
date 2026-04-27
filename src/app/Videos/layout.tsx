import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Videos | Roger Hartl, MD | Spine Surgery, Lectures, and Patient Stories",
  description:
    "Watch spine surgery videos, lectures, educational content, and patient stories featuring Roger Hartl, MD.",
  path: "/Videos",
});

export default function VideosLayout({ children }: { children: ReactNode }) {
  return children;
}
