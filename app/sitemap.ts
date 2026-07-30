import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/data/blog-posts"
import { SITE } from "@/data/site"

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/small", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/large", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/wall", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/custom", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route.path || "/", SITE.url).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articles: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug }) => ({
    url: new URL(`/blog/${slug}`, SITE.url).toString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...pages, ...articles]
}
