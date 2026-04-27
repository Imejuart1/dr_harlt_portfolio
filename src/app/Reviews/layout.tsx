import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Patient Reviews for Roger Hartl, MD | Spine Surgeon in New York",
  description:
    "Read patient reviews, testimonials, and ratings for Roger Hartl, MD, spine surgeon and neurosurgeon in New York.",
  path: "/Reviews",
});

export default function ReviewsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
