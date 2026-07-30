"use client"

import { EquipmentCategoryPage } from "@/components/equipment-category-page"
import { wallEquipmentData } from "@/data/equipment/wall"

export function WallProductsContent() {
  return <EquipmentCategoryPage data={wallEquipmentData} />
}
