import type { Metadata } from "next"
import { SmallProductsContent } from "./content"

export const metadata: Metadata = {
  title: "小型啤酒機｜塔普斯 Beer Taps",
  description:
    "塔普斯 Beer Taps 小型啤酒機系列，輕巧高效，適合各種小型營業空間，穩定出酒品質。",
}

export default function SmallProductsPage() {
  return <SmallProductsContent />
}
