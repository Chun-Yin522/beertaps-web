"use client"

import { EquipmentCategoryPage } from "@/components/equipment-category-page"
import { smallEquipmentData } from "@/data/equipment/small"

export function SmallProductsContent() {
  return <EquipmentCategoryPage data={smallEquipmentData} />
}
