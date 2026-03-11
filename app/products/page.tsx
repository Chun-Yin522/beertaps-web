import type { Metadata } from "next"
import { ProductsContent } from "@/components/products-content"

export const metadata: Metadata = {
  title: "產品介紹｜塔普斯 Beer Taps 啤酒機・出酒設備",
  description:
    "塔普斯 Beer Taps 提供多種商用啤酒機、出酒設備系統，包含小型啤酒機、大型出酒系統、壁出式啤酒牆及特殊造型設計，適用於酒吧、餐廳、飲料店。",
}

export default function ProductsPage() {
  return <ProductsContent />
}
