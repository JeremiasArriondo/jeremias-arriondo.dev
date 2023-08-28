import { allPosts } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const sitemap: MetadataRoute.Sitemap = [];

  for (const post of allPosts) {
    sitemap.push({
      url: `${process.env.SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    });
  }

  return sitemap;
}
