import type { Metadata } from "next"
import { CustomProductsContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "客製化設備",
  description:
    "塔普斯依照品牌風格、空間條件與營運需求，提供客製化飲品設備與吧檯整合規劃。",
  path: "/products/custom",
})

export default function CustomProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "產品頁面", path: "/products" },
        { name: "客製化設備", path: "/products/custom" },
      ])} />
      <CustomProductsContent />
    </>
  )
}
