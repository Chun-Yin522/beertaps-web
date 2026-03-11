import type { Metadata } from "next"
import { CustomProductsContent } from "./content"

export const metadata: Metadata = {
  title: "特殊造型設計｜塔普斯 Beer Taps",
  description:
    "塔普斯 Beer Taps 特殊造型設計出酒設備，為您的品牌量身打造獨一無二的出酒系統。",
}

export default function CustomProductsPage() {
  return <CustomProductsContent />
}
