import type { Metadata } from "next";
import type { ReactNode } from "react";

import { createPageMetadata } from "../../../lib/seo";
import { materialData } from "./Materialsdata/materialData";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const material = materialData[params.slug as keyof typeof materialData];

  if (!material) {
    return createPageMetadata({
      title: "Spine Surgery Resources | Roger Hartl, MD",
      description:
        "Explore spine surgery educational resources, patient guides, and recovery information from Roger Hartl, MD.",
      path: `/Materials/${params.slug}`,
    });
  }

  return createPageMetadata({
    title: `${material.title} | Roger Hartl, MD`,
    description: material.content,
    path: `/Materials/${params.slug}`,
  });
}

export default function MaterialSlugLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
