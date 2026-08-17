import type { Metadata } from "next"
import { SmallProductsContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "小型啤酒機",
  description:
    "塔普斯小型啤酒機適合吧檯、餐飲與小型店面使用，協助規劃穩定、俐落且易於維護的商用出杯配置。",
  path: "/products/small",
})

export default function SmallProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "產品頁面", path: "/products" },
        { name: "小型啤酒機", path: "/products/small" },
      ])} />
      <SmallProductsContent />
    </>
  )
}
