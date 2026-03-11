import type { Metadata } from "next"
import { WallProductsContent } from "./content"

export const metadata: Metadata = {
  title: "壁出式啤酒牆｜塔普斯 Beer Taps",
  description:
    "塔普斯 Beer Taps 壁出式啤酒牆，將出酒設備融入空間設計，兼具美觀與機能。",
}

export default function WallProductsPage() {
  return <WallProductsContent />
}
