import type { Metadata } from "next"
import { LargeProductsContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "大型出酒系統",
  description:
    "Beer Taps 大型出酒系統適合高出杯量、多品項與大型營業空間，提供穩定的商用飲品設備配置。",
  path: "/products/large",
  image: "/images/gallery/l-submarine-2.jpg",
})

export default function LargeProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "產品頁面", path: "/products" },
        { name: "大型出酒系統", path: "/products/large" },
      ])} />
      <LargeProductsContent />
    </>
  )
}
