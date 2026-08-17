import type { Metadata } from "next"
import { HomeContent } from "./home-content"
import { JsonLd } from "@/components/json-ld"
import { SITE } from "@/data/site"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildPageMetadata({
  description:
    "塔普斯 Beer Taps 提供啤酒龍頭、飲品出酒系統、吧檯設備與客製化商用設備，協助餐飲品牌打造穩定且具質感的營業空間。",
  path: "/",
})

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: ["Beer Taps", "塔普斯", "beertaps.tw"],
    url: SITE.url,
  }

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HomeContent />
    </>
  )
}
