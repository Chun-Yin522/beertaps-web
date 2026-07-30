import type { Metadata } from "next"
import { SITE } from "@/data/site"

interface PageMetadataOptions {
  title?: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
  authors?: string[]
  publishedTime?: string
  modifiedTime?: string
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  authors,
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, SITE.url).toString()
  const fullTitle = title ? `${title}｜Beer Taps` : "Beer Taps｜專業飲品出酒設備與吧檯設備"

  const openGraph: Metadata["openGraph"] = type === "article"
    ? {
        type: "article",
        locale: "zh_TW",
        url: canonical,
        siteName: SITE.name,
        title: fullTitle,
        description,
        authors,
        publishedTime,
        modifiedTime,
      }
    : {
        type: "website",
        locale: "zh_TW",
        url: canonical,
        siteName: SITE.name,
        title: fullTitle,
        description,
      }

  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical },
    authors: authors?.map((name) => ({ name })),
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  }
}
