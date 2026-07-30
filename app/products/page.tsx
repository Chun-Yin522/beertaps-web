import type { Metadata } from "next"
import { ProductsContent } from "@/components/products-content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "產品頁面",
  description:
    "Beer Taps 提供小型啤酒機、大型出酒系統、壁出式啤酒牆與客製化設備，協助餐飲與飲品品牌建立穩定營業現場。",
  path: "/products",
})

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "產品頁面", path: "/products" },
      ])} />
      <ProductsContent />
    </>
  )
}
