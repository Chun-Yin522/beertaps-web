import type { Metadata } from "next"
import { LargeProductsContent } from "./content"

export const metadata: Metadata = {
  title: "大型出酒系統｜塔普斯 Beer Taps",
  description:
    "塔普斯 Beer Taps 大型出酒系統，多路供應、穩定高效，適合高出杯量的酒吧與餐廳。",
}

export default function LargeProductsPage() {
  return <LargeProductsContent />
}
