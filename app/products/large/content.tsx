"use client"

import { EquipmentCategoryPage } from "@/components/equipment-category-page"
import { largeEquipmentData } from "@/data/equipment/large"

export function LargeProductsContent() {
  return <EquipmentCategoryPage data={largeEquipmentData} />
}
