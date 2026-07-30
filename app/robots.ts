import type { MetadataRoute } from "next"
import { SITE } from "@/data/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [
      new URL("/sitemap.xml", SITE.url).toString(),
      new URL("/image-sitemap.xml", SITE.url).toString(),
    ],
  }
}
