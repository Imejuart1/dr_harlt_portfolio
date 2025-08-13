import { MetadataRoute } from "next";

/**
 * Keep URLs case-EXACT. Only include routes that actually exist.
 * If you later rename or add pages, update this list.
 */
const urls: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { url: "https://www.hartlmd.net/", priority: 1.0, changeFrequency: "weekly" },
  { url: "https://www.hartlmd.net/Bio", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Reviews", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Gratitude", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/honors-awards", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/News", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Project", priority: 0.8, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Contact", priority: 0.8, changeFrequency: "monthly" },

  // Materials detail pages
  { url: "https://www.hartlmd.net/Materials/surgical-guide-minimally-invasive-tubular-surgery", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/surgical-guide-minimally-invasive-tlif", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/surgical-guide-elif-xlif-llif-dlif", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/surgical-guide-laminoplasty", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/post-op-instructions", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/post-op-posture", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/hans-kraus-post-op-exercises", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/post-op-activity-timeline", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/B.L.T", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/physical-therapy", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/braces-lumbar-support", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/spine-center-referrals", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/neurology-referrals", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/norman-marcus-pain-referral", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/weill-cornell-imaging-locations", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/psychology-referrals", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/hss-ortho-referrals", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/sports-activities-beneficial-harmful-back", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/vitamins-supplements", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/10-rules-healthy-back", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/tips-tricks-protecting-spine", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/supplements-for-nerve-regeneration", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/book-recommendations-dr-hartl", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/surgical-videos", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/spine-time", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/finding-balance-neurosurgery", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/ambra-Instructions", priority: 0.64, changeFrequency: "monthly" },

  // Projects
  { url: "https://www.hartlmd.net/Project/research", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Project/tanzania-project", priority: 0.64, changeFrequency: "monthly" },

  // Other materials
  { url: "https://www.hartlmd.net/Materials/other", priority: 0.64, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/stem-cell-guide", priority: 0.51, changeFrequency: "monthly" },
  { url: "https://www.hartlmd.net/Materials/disc-degeneration", priority: 0.51, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(); // Use the current time for lastModified
  return urls.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
