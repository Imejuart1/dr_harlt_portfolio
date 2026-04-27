import type { MetadataRoute } from "next";

import { siteUrl } from "../lib/site";
import { materialData } from "./Materials/[slug]/Materialsdata/materialData";

const staticRoutes = [
  "/",
  "/Bio",
  "/Reviews",
  "/Gratitude",
  "/honors-awards",
  "/News",
  "/Materials",
  "/spine-surgeon-new-york",
  "/cervical-laminoplasty-new-york",
  "/acdf-neurosurgery-nyc",
  "/best-neurosurgeon-nyc",
  "/Videos",
  "/Videos/lectures",
  "/Videos/surgical",
  "/Videos/stories",
  "/Videos/explore",
  "/Project",
  "/Project/research",
  "/Project/tanzania-project",
  "/Contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const materialRoutes = Object.keys(materialData).map(
    (slug) => `/Materials/${slug}`,
  );

  return [...staticRoutes, ...materialRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/Materials/") ? 0.7 : 0.8,
  }));
}
