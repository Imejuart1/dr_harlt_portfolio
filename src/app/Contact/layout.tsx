import type { ReactNode } from "react";

import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Roger Hartl, MD | Spine Surgeon in New York",
  description:
    "Contact Roger Hartl, MD at Och Spine, NewYork-Presbyterian, and Weill Cornell Medicine for appointments, referrals, and patient questions.",
  path: "/Contact",
});

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
