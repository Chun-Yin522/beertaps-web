import type { Metadata } from "next"
import { WallProductsContent } from "./content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/metadata"
import { buildBreadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = buildPageMetadata({
  title: "壁出式啤酒牆",
  description:
    "塔普斯壁出式啤酒牆協助節省吧檯檯面空間，讓出酒設備與牆面、品牌視覺與操作動線完整整合。",
  path: "/products/wall",
})

export default function WallProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([
        { name: "首頁", path: "/" },
        { name: "產品頁面", path: "/products" },
        { name: "壁出式啤酒牆", path: "/products/wall" },
      ])} />
      <WallProductsContent />
    </>
  )
}
